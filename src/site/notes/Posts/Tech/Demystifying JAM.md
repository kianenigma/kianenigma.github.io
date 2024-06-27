---
{"dg-publish":true,"permalink":"/posts/tech/demystifying-jam/","hide":true,"tags":["polkadot","jam"],"created":"2024-05-02T17:08:56.000+03:30","updated":"2024-06-27T19:55:44.069+03:30"}
---

- [[Posts/Tech/Demystifying JAM#Prelude: Polkadot 1\|Prelude: Polkadot 1]]
- [[Posts/Tech/Demystifying JAM#All About Cores\|All About Cores]]
- [[Posts/Tech/Demystifying JAM#Polkadot 2\|Polkadot 2]]
- [[Posts/Tech/Demystifying JAM#Inside Core vs. On the Chain\|Inside Core vs. On the Chain]]
- [[Posts/Tech/Demystifying JAM#JAM\|JAM]]
	- [[Posts/Tech/Demystifying JAM#JAM\|Service and Work Items]]
	- [[Posts/Tech/Demystifying JAM#JAM\|Semi Coherence]]
	- [[Posts/Tech/Demystifying JAM#JAM\|CoreChain]]
	- [[Posts/Tech/Demystifying JAM#JAM\|PVM]]
- [[Posts/Tech/Demystifying JAM#Appendix: Re Defining Blockspace\|Appendix: Re Defining Blockspace]]
- [[Posts/Tech/Demystifying JAM#Appendix: Scalability Space Map\|Appendix: Scalability Space Map]]


## Prelude: Polkadot 1

First, let's take a moment to jot down what I think are the top novel features of Polkadot. One on the technical side, and one on the social side. 

- Social: 
	- Biggest DAO. the only network that does fully onchain, self-enacting governance, including runtime upgrades.
- Technological: 
	- Shared security, sharded execution
	- Use of a WASM-based meta-protocol. Storing the code of the blockchain in the state as byte-code.

Let's dive further into the second one.
## All About Cores

> For now, we are only talking in the context of a L1 network that hosts other L2 "blockchain" networks, much like Polkadot and Ethereum. Therefore, the words L2 and Parachain can be used interchangeably. 

The core problem with blockchain scalability can be put as: There exists a set of validator's who's execution can be trusted through crypto-economic and proof stake systems. But, it is very inefficient, and not scalable, to have all validators execute everything at all times.  

> TODO: Diagram of a single threaded blockchain.

In such a system, if the blockchain wants to host further L2s, all validators have to now re-execute the work of all rollups as well. Obviously, this will not scale. Optimistic rollups are one way to circumvent this issue, in that re-execution (aka. fraud-proofs) only happen if someone claims a fraud to have happened.

A naive solution to sharding is to merely split the validator set into smaller subsets, and have a small group of them re-execute the L2 block. What is the issue with this approach? we are sharding the economic security of the network as well. 

> TODO: BAD Sharded Security

Contrary to Optimistic Rollups that cannot afford re-execution at all times due to architectural shortcomings, Polkadot can have a subset of its validators re-execute a L2 block, while providing sufficient crypto-economical evidence to all network participants that the veracity of the block is as secure as if the entire set of validators had re-executed it. This is possible through the novel (recently formally published) ELVES paper.  

> TODO: GOOD Shared Security 

That is, "*Sharded Execution*", with "*Shared Security*", the main technological outcomes of Polkadot 1 when it comes to scalability.

An execution-sharded blockchain is very much like a CPU: In much the same way that a CPU can have many cores and execute instructions in parallel, Polkadot can progress L2 blocks in parallel. This is why an L2 on Polkadot is called a ***Para***chain, and the environment in which the smaller sub-group of validators re-execute a single L2 block is called a Core. Each core can be abstracted as "a group of validators working in coordination".

You can imagine a single-threaded blockchain as one that ingests a single block at any given 6s time-slot, while Polkadot ingests 1 relay-chain block, and 1 parachain block per core, per time-slot

>  TODO: animation 

## Polkadot 2

A bit part of Polkadot 2 is about making cores more flexibily use-able. In the original Polkadot model, a core could have been rented for 6m at a time.  
a single-chain using multiple cores, a single chain using cores infrequently.
Very short, no need to spend more time here. 

> TODO Diagram of long running task, and short running

## Inside Core vs. On the Chain

To understand JAM, it is first useful to look into what happens in a Polkadot Core when an L2 block comes in. 

> This contains a lot of simplification.

> Recall that a core is constituted primarily from a group of validators. So, when we say some data is sent to the core, it is gossiped to this group of validators.

0. An L2 Block + a subset of that L2's state is sent to the core. This is all the data that is needed to execute the block[^1]. 
1. Subset of validators, those that constitute a core, re-execute the L2 block and proceed with further consensus related tasks. 
2. Make the data needed for other validators (outside of the core) available[^2] to re-execute the L2 block, if need be. Further validators might decide to re-execute this L2 block based on ELVES rules, and they need the data to do so. 
3. Note that all of the operation so far is outside the the Polkadot's main block and state.
4. Eventually, a small commitment of the new L2 state becomes visible on the main Polkadot relay chain state. This operation, which is much cheaper than the actual re-execution of the L2 block, unlike everything thus far, affects the main Polkadot state, becomes visible in a Polkadot block, and is executed by all Polkadot validators[^3]. 

Let's deduce some new ideas from the above: From 1, we can deduce that there exists a new type of execution in Polkadot that differs from normal blockchain operations. Typically, when all validators of a network execute some work, and as the outcome, the main state is updated, we call this an on-chain operation. This is what happens in step 4. Yet, what happens inside a core differs from this. We call this novel type of blockchain computation **in-core** execution, and it is different from **on-chain** execution. 

Next, from point 2 we can deduce that Polkadot already provides a native DA layer, and L2's automatically use it to keep their execution evidence present for some period of time. Yet, the type data that can be posted to this DA layer is fixed, and it is always the evidence needed to re-execute an L2 block.

[^1]: We called the L2's state POV, and the combination of the two PVF. 
[^2]: This is Polkadot's native Data Availability layer.

Understanding the above is foundation of understanding majority of what JAM does. Before going further, a recap: 

* in-core execution
* on-chain execution
* DA

## JAM

With the understanding gained in [[Posts/Tech/Demystifying JAM#Inside Core vs. On the Chain\|#Inside Core vs. On the Chain]], we can smoothly transition into what JAM is.

JAM is a new protocol, heavily inspired by Polkadot, and fully compatible with it, that aims to replace the Polkadot Relay Chain[^4]. 

JAM builds on top of [[Posts/Tech/Demystifying JAM#Polkadot 2\|#Polkadot 2]], in that it tries to make Polkadot cores more useful, but in ways radically more flexible than [[Posts/Tech/Demystifying JAM#Polkadot 2\|#Polkadot 2]].

The main observation of JAM is to alter Polkadot cores as follows: 

1. Allow both the work that is being done in-core and  on-chain to be fully programmable.
2. Allow any data to be read-from and written-into the Polkadot DA layer.

Both of these stem from one key observation: "Polkadot cores are amazingly powerful, why just use them to run L2s? they can run anything!". 
### Service and Work Items 

This is why in the context of JAM, what used to called an L2/Parachain block is now called "*Work*[^3]", a very generic term. 

Moreover, the "application" to which a work belongs is called a `Service`. A service is described by 3 entry points, two of which are `fn join()` and `fn accumulate()`. The former describes what the service does in-core, and the latter describes what the service does on-chain. 

Finally, the name of the two entry-points is why this protocol is called, JAM: the Join Accumulate Machine. 

This is a somewhat simplistic, yet foundational and groud-up description of what JAM aims to be. Needless to say, a lot has been simplified here, and the protocol might still evolve. 

On top of this foundation in mind, there are a few other aspects of JAM that now we can describe in the coming sections.  

[^3]: Terms like `WorkItem`, `WorkRrport`, `WorkPackage`. 
[^4]: It is crucial to already point out that JAM is only meant to replace the Polkadot relay chain. Parachains, and all applications that run on top of Polkadot remain intact, mainly thanks to [[Posts/Tech/Demystifying JAM#CoreChain\|#CoreChain]]. 
### Semi Coherence 

TODO

### CoreChain 

TODO

### PVM 

TODO

## Appendix: Re Defining Blockspace

Polkadot's blockspace is therefore a combination of a lot of in-core blockspace, and a reasonable amount of on-chain blockspace. 

## Appendix: Scalability Space Map

1. Beefy hardware + optimization: Solana
2. Optimistic Rollups
3. ZKP
4. Data and Execution Sharding

A short digest from the graypaper.


--- 

[https://ethresear.ch/t/bringing-polkadot-tech-to-ethereum/17104](https://ethresear.ch/t/bringing-polkadot-tech-to-ethereum/17104)
[https://medium.com/coinmonks/polkadot-a-pessimistic-rollup-world-89fee1cfcd5f](https://medium.com/coinmonks/polkadot-a-pessimistic-rollup-world-89fee1cfcd5f)
[https://miro.com/app/board/uXjVKT7riCM=/](https://miro.com/app/board/uXjVKT7riCM=/)
https://grillapp.net/@filippoweb3/136004
https://github.com/openguild-labs/learn-jam