---
{"dg-publish":true,"permalink":"/posts/tech/thoughts-blockchain-and-blockspace-scalability/","tags":["polkadot","blockchain"],"created":"2024-02-27T14:37:49.000+01:00","updated":"2024-02-27T14:37:49.000+01:00"}
---

> Originally published in the [Polkadot forum](https://forum.polkadot.network/t/tellling-the-story-of-the-game-theory-behind-frame-pallets/2282/12?u=kianenigma).

While thinking about a tutorial idea about FRAME, I came up with an interesting example that showcases/categorizes the **scalability issue** in blockchains, which is somewhat entangled with game theory. Here it goes. 

Imagine a simple validator selection system whereby: 

-  anyone can call `bond(amount)`, which registers them as "wanna-be validator' with `amount` as their approval-stake.
- anyone can call `delegate(who, amount)`, which increases the approval-stake of `who` by `amount`.
- every x blocks, we want to get the top `x` wanna-be validators based on their respective approval-stake (to the best of our abilities).

This is an extremely simple problem in the context of more information systems, but it is a surprisingly hard problem to solve in blockchains. Let's explore why.

The answer really boils down to one root issue: Blockchains, unlike all almost many other information systems, are **not sybil-resistant**. When you are thinking about solving the above algorithmic problem, you must assume you are solving it for an infinitely large input size. In this case, this translates to an infinitely large number of wanna-be validators. 

The first step in solving such issues is acknowledging such issues, and finding the boundaries of where your system breaks. For the above example, assume that an analysis on `weight`, memory or state usage could help us conclude that the system would work for as long as there are less than `V_max` wanna-be validators registered in the system. 

In essence, the problem can be stated as `sybil-irresistance -> scalability issues`. In written words, blockchains are not sybil resistance, therefore face scalability issues. 

We can tackle this issue in both sides of the above arrow. 

To fix/improve the **sybil-resistance** part: 

- **Crypto-economics**: This means, the deposit to become a wanna-be validator must be high enough such that the cost of registering `V_max` wanna-be validators is so high that no sane human/attacker would ever do it. 
- **Permissionless operations**: The system is not sybil-resistant because it is permissionless and *anyone* can spam the system. But, that also means *anyone* can clean aka. de-spam the system 🧠. In the above problem, imagine the chain would keep a linked-list of wanna-be validators, and allow anyone to submit an extrinsic that would swap two nodes in the list, *as long as it is a positive step toward keeping it sorted*. Crucially, if the extrinsic is successful, the submitter gets a (possibly small) reward, that could come from the deposit of the wanna-be validator that was misplaced. 

  This approach almost always goes hand-in-hand with crypto-economics, and would significantly lower the deposits needed to make sure `V_max` is never reached. For example, if we solely rely on crypto-economics, we probably have to impose a relatively hefty deposit to solve the above validator selection problem. But if we also rely on permissionless-operations, the deposit only needs to be high enough such that it is enough incentive for someone to submit those sorting extrinsics!

- **Other Web3 primitives such as DiDs, PoPs and NFTs**. There is a broad category of other primitives out there that, if themselves implemented correctly, can de-sybil the system. In our example, this translates to: making sure only accounts that have a particular identity, NFT, or personhood proof attached to them can become wanna-be validators. These systems could be enough to give you credible guarantees that `V_max` will not be reached. 

> Polkadot's Staking system in fact implements a linked-list like above, you can read more about it [here](https://polkadot.network/blog/staking-update-september-2021).

Note that neither of these solutions attempt at really solving the scalability part. They don't help increase `V_max`. They merely help with making the system more sybil resistance, ie. knowing that `V_max` is (almost) never reached.

Oftentimes, you want both. You want to be somewhat more sybil resistant, but you also want to be more scalable. Imagine you have implemented some or all of the of the above, but simply want that `V_max` to be larger. This translates to "more blockspace" and typically there are two ways to improve it: 

- **Blockspace optimization**. This is a realization that blockspace is a valuable scarce resource, and its usage can be avoided, if possible. Imagine, given input `X` and output `A`, a function `F(x) -> A` and verifier function `V(A) -> bool` which can verify the output to be correct. We have two options: run `F` onchain, which needs no verification because the code is trusted. Or else, run `F(x)` offchain, where none of these scalability issues exist, and submit `A` back to the chain, and run `V(A)` onchain.  Depending on the complexity of `F`, `V` and the size of `x` and `A`, it might be the case that doing the latter is more efficient. This realization is the basis of the rollup space. Specifically, ZK-rollups fit the above description perfectly. I would leave it up to the reader to tinker on whether the above sorting problem can also leverage this optimization or not (and comment their thoughts).
- **Blockspace scaling**: Another solution is to simply leverage more blockspace, which one can do by writing operations that are multi-block. This also increases the maximum limit of `V_max` that is acceptable by the system, yet poses its own set of problems. 

Recall, all of this helps us achieve a higher `V_max` for the above problem, neither try and prevent spammers to fill the entire space of `V_max`.

