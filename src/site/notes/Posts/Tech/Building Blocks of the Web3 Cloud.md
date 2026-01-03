---
{"dg-publish":true,"dg-permalink":"/post/tech/web3-platform-basics","permalink":"/post/tech/web3-platform-basics/","hide":true,"created":"2025-03-27T11:57:40.625+02:00","updated":"2025-08-20T16:13:49.509+03:00"}
---

[x.com/ayyyeandy/status/1907515511023292594](https://x.com/ayyyeandy/status/1907515511023292594)

Polkadot is increasingly pushing towards demonstrating itself as a *general-purpose* [Web3 Cloud](https://forum.polkadot.network/t/the-polkadot-cloud/10670)[^1], rather than a (multi-chain) *blockchain* platform. This narrative further poses the question of *what a general purpose blockchain cloud is and could become in the future*.
[^1]: Also see [Shawn Tabrizi's talk in Sub0 2024](https://x.com/paritytech/status/1855929716433457518) about this.

This posts explores: 
- What properties blockchain platforms can bring about, which in my methodology end up being  
	- [[Posts/Tech/Building Blocks of the Web3 Cloud#Correct/Secure Computation\|#Correct/Secure Computation]]
	- [[Posts/Tech/Building Blocks of the Web3 Cloud#Ordering/Consistency\|#Ordering/Consistency]]
	- [[Posts/Tech/Building Blocks of the Web3 Cloud#Canonical State\|#Canonical State]]
- And at what cost we can achieve each of them
- What applications can actually be built with these primitives?

My motivation in writing this is that I increasingly see even engineers and decision-makers not having a clear understanding of what it actually is that they are building. The [criticism towards Web3](https://youtu.be/DktkFTTFLHE?si=vXbPC_-7r77J0Xxh&t=4027) being vaporware is increasing, Consequently, I see products being fitted into Web3 with requirements that are not met by blockchains, exacerbating the criticism. Frankly, some of us are, sadly, creating vaporware, and it is rooted in our lack of understanding of the technology. This post aims to be a small towards filling this knowledge gap. In the last year or so, I have examined the above question, and I have formulated my answer to it, which I will describe in this blog post. More is to be said about it, so expect more follow-ups 📝.

> [!note] Opinions Differ
> My opinions here are rather traditional. Recent founders and decision makers of the Web3 space might think differently, and are more willing to question the properties that I explain below. I think there is merit to both types of thinking, and both can positively help a clear-minded decision.

## Correct/Secure Computation

Blockchains are, at the core of them, a more resilient [TEE](https://en.wikipedia.org/wiki/Trusted_execution_environment). You can give them some code (a set of rules), and they execute that code correctly for you. You can be sure about the correct execution of that code, and the security of it is a function of the economic security (in PoS) or hash power (in PoW[^1]), or math magic (SNARK proofs). All the said 3 technologies (PoW, PoS, SNARK proofs) are a way to ensure **some execution actually happened correctly**. In the former two we rely on economic incentives, in the latter in a mathematical proof. 
[^1]: Interestingly, Proof of Work is essentially the same as economic security represented in the form of hardware and electricity

An age-old example that I find useful to remember all the time: I can run a 50 lines python script that has the same logic as the `BTC` token, and run it on my computer. Why don’t we trust this to be trustworthy, yet trust the same logic executed by Bitcoin miners to be trustworthy? What’s the difference? **Correct Computation through PoW**. The same applies to Polkadot and its parachain, Ethereum and its Solidity contracts, and Solana and its SVM contracts. I could be running the exact same contracts and parachains on my machine, yet we don't trust me to do it correctly.

Next, let's explore the properties and consequences of [[Posts/Tech/Building Blocks of the Web3 Cloud#Correct/Secure Computation\|#Correct/Secure Computation]]. 

### *Multi-Party* Contention
[[Posts/Tech/Building Blocks of the Web3 Cloud#Correct/Secure Computation\|#Correct/Secure Computation]] is mainly useful for any kind of application that involves **contentious computation between multiple parties**. That is, multiple humans are performing a value-breading transaction with one another, and are sufficiently unfamiliar with one another, such that they don't trust each other. 

> If writing it as a python script and running it on my server is good enough for Joe to interact with it, then running it on a blockchain for Joe to interact with it is a needless overhead.

We have not seen single-party applications on Blockchains yet, and I am doubtful if/how they will work. If it is just *my* data, *my* computation, and *my* interactions with it, I am not sure why I would want to host it on a blockchain, vs. a self-hosted solution on my server (if I am privacy-concerned). A good example here is applications like personal note-taking, password managers and so on. These applications don't involve any multi-party contention. It is all about a single individual's interactions with their private data. 

### Expensive
Achieving this TEE-equivalent property is not cheap. It requires either a combination of re-execution + economic security, or expensive SNARK proving that we see in the Ethereum space[^2]. So the blockchain computer is, compared to your computer, **extremely slow**. It is a **trustworthy, slow computer**, that so far we know can be given some **code**, and it can execute that code correctly.

[^2]: at present proving `fn(x) -> y` is millions/many-thousands of times more expensive than executing `fn(x)` directly – [see here](https://www.binance.com/en/square/post/2540550190602)

### Public By Default
If we use the economic security method for achieving correct computation, there is no way around the fact that it has to be public, at least to the validators of the said blockchain executing the operation. There is no way to do a balance transfer without making it public to at least the validators of the network that is executing it, so they can verify through re-executing it.

Note that the ZK-SNARK method is different, because the computation is essentially happening outside the validator group, and an anonymized proof is verified by the validators, with control over what part of the computation can be made public. In the case of an ZK-Rollup, the (often centralized) sequencer generates the proof. In dark-fi, it actually seems to happen on the user’s machine itself ([ref](https://dev.risczero.com/api/zkvm/)). I am not very familiar with the constraints of this computation method at present.

If proof generation becomes so cheap that any user/wallet/dapp can generate the proof of their correct computation, this whole section around “Correct Computation” and using economic security to achieve it will become useless.

### Digital, Digital And Finally Digital
Something that I found to be poorly understood is that blockchains are at the end of the day a **digital system.**  It can ensure the correctness of some bits in computers and nothing in the real world. Linking real world assets and objects to blockchains is not sensible unless a robust oracle that can both read real world information, and enforce updates to the real world (neither of which exist at present) exists.

I think all the “*let’s tokenize this apartment and my rolex and put it onchain*‘ is all a dead end, and the result of misled decision makers not understanding the technology on which they are building.

## Ordering/Consistency

Even if we have a blockchain-based computer that executes some code correctly, there could be two parallel states that are both “correct according to the code”, but we need to choose which one we stick to. Correct ordering is the second main property of blockchain platforms.

### (usually) Auditable

This history of execution is fully auditable, and any other network participant is capable of combining the “Correct Execution” and “Ordering” to re-verify the whole thing.

In fact, the main purpose of the data-structure known as a blockchain is used in this part. Excluding ordering, I can have a PoS system that delivers “**correct execution**” while not using blockchains at all.

## Canonical State

This computer has access to a storage primitive that we know as the **state**. We can think of it as the persistent memory that the said code has access to.

### Expensive

Similar to the computation aspect, anything that we store in the state is much more expensive than a normal computer platform. At the least, it has the replicated many times. It is also stored in ways (e.g. merklized) that are not particularly performant. 

### Public

Anything that goes into this state is public and visible to anyone else in the network. 

### No Private partition

A typical web2 service holds the entire state of the system private, and when a user authenticates themselves, a portion of the state is exposed to them. Any web3 storage cannot really benefit from this, and there is no partitioning. The only way to achieve partitioning is to leverage public key encryption. But then you have to remember that unless if you are using ZK for execution, at least the validator needs to have access to the unencrypted information to verify whatever it is executing. 

### Provable

A very nice property of this state is that you can cheaply generate proofs about a subset of it to anyone else. See [here](https://research.polytope.technology/state-machine-proofs).

## Evolution of Blockchain State Transition Function

The main pillars discussed so far: 

1. Correct Execution  
2. Canonical And Auditable Ordering

Combined is mainly why we model blockchain systems as state machines. It is a state machine that is guaranteed to have one correct final state. This leads to us modeling the business logic of the blockchain as the state transition function of a state machine. Then, let’s look at the evolution of this STF.

* **Fixed**: Bitcoin, Litecoin, Monero etc. Any blockchain that has one fixed function, and it only does that.   
* **Programmable, while exposing the underlying blockchain platform**: All smart contract platforms, Polkadot Parachains, Substrate solo-chain, Ethereum and L2s. All of these are means to make the blockchain platform programmable, but none of them go as far as hiding the fact that you are running a blockchain.  
* **Programmable, while hiding the underlying blockchain platform**: JAM+CoreVM and ICP are the only projects that have taken steps in hiding the fact that you are running on a blockchain.

I think in retrospect this is absurd how much of *implementation* (blockchain) is leaking into *abstraction (applications built on top)*: As said above, blockchain is a data-structure used to create the property of canonical ordering. Correct execution, which to me is the main property, is independent of blockchains. 

## Beyond Canonical State

* DA: same properties as the state \+ cheaper \+ but ephemeral  
* Some storage chains that work on the basis of being an incentive layer on top of IPFS. def. Has some different properties than Canonical state.  
  * [https://eigerco.github.io/polka-storage-book/getting-started/demo-file-store.html](https://eigerco.github.io/polka-storage-book/getting-started/demo-file-store.html)  
* [https://forum.polkadot.network/t/introducing-storage-hub-a-system-parachain-optimised-for-storage/4525/12](https://forum.polkadot.network/t/introducing-storage-hub-a-system-parachain-optimised-for-storage/4525/12) W3F grant, asked lead for a meeting to see what they are up to.  
* Substrate based storage chain that Arkady worked on, and I think is being implemented in the PoP’s bulletin chain. 

## Summary 

My motivation in putting this together is to deeply understand what are the properties that blockchain platforms excel at, and then find existing/new use cases that are in fact a fit for these properties. In other words, we should have an educated guess on what use cases fit blockchains, rather than blindly searching in the dark.


---

- Games
	- Chess.com
	- 