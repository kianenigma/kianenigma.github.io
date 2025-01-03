---
{"dg-publish":true,"dg-permalink":"blockchain-reimagined/presentation-tum","permalink":"/blockchain-reimagined/presentation-tum/","tags":["blockchain","polkadot"],"created":"2024-09-08T13:01:24.988+01:00","updated":"2024-12-30T10:25:01.061+00:00"}
---


<style>
.reveal .slides section img { 
	max-height: 70vh; /* Limit image height to 70% of the viewport height */ 
	width: auto; /* Maintain aspect ratio */ 
	 border-bottom: 1px dashed rgba(0, 0, 0, 0.5);
	 padding: 20px;
}
</style>

# Blockchain Scalability 

A Holistic Recap

<iframe width="560" height="315" src="https://www.youtube.com/embed/mSoA2HOQiC0?si=CuuiJaP3iKMpFDYl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---
## Prelude 

- Hello 👋🏻 `@kianenigma / kianenigma.nl`
- Polkadot for ~6 years
- Re-discover the fundamentals of blockchains
- I am here to solve industry-scale problems, not *sell a product*

Notes: 

1. I am a core engineer of Polkadot. 
2. On a journey to re-discover the fundamentals of blockchains. This talk is part of my journey.
	-  *Purpose-dysphoria*
3. Academic talk, not selling anything. Not talking much about Polkadot (*very little*)

---

## Owning Digital Money 

- €1000 in Revolut (🔫👮🧑‍⚖️⛪️ -> *Conditional Trust*)
- €1000 in the Bitcoin network (🧮 ♾️ -> *Synthesizes Verifiable Trust*)
- Economically secured validators (💻💰) doing redundant work 
 
Notes: 

Why do we trust each? 

- In Revolut, there is, in principle, as little as one computer, owned by Revolut, processes a transaction, and we trust the outcome of that, because of all the legal regulations around banking, government, law enforcements etc. 
- In the bitcoin network, we ***synthesize a new type of trust***, that is not based on social-norms, central-power, and law-enforcement, and is instead more based on branches of science, and is therefore **verifiable**, namely: mathematics, game theory and economics. 

> We don't trust a hash function to be one-way because a certain nation has a strong military, it is one way no matter who you are, and where you live. 

- A big part of this "*based on branches science*" is the fact that in a network like Bitcoin: 
	- a large number of actors can be the authority, each taking turn in become the **leader**
	- and many others, can check what that **leader** has done
		- We call this collective of the above two groups of entities "Validators"
	- All validators have skin in the game -> Economic Security 
	- All other nodes can observe and re-verify the behavior of validators

---
## Secure Validator Set Working Together 

![bi_cpu_models.png](/img/user/Excalidraw/blockchain-reimagined/bi_cpu_models.png)

Is one massive, ***SLOW***, **TRUSTWORTHY** computer.

Notes: 

- And a key reason why blockchains have a hard time scaling: All validator's at the simplest model, have to re-execute everyone else's work, and come to consensus/finality about it.

Question: Which Computer model is good, or perhaps good for which use cases? idk, deeper philosophical question.

Question statement: **How can I make the Web3 Computer go faster?** and while doing so, am I am compromising on the trust-worthy-ness of it? 

This is the core issue we try to tackle, how can we remove this property of "everyone re-executes everything". 

---
## Scaling Options 

---

![hyperopt.png](/img/user/Excalidraw/blockchain-reimagined/hyperopt.png)
- `+` No fragmentation
- `-` Vertical scaling / Cutting corners? 

Note: 
- Somewhat like brute forcing it. 
- Needs careful consideration of how much of trust-worthiness of the original model it retains. 
	- Not having merklized state -> no light clients ever
	- Hardware requirements to run the network beyond what an individual can ever afford. 
- [Solana - How it Works (Helius)](https://report.helius.dev/)

---

![shardingsecyurity.png](/img/user/Excalidraw/blockchain-reimagined/shardingsecyurity.png)
- `-` Sharding Security and Capital / Limited Capital 

Note: 

- Cosmos' original view 
- There's only limited capital in the world, shard execution, and economic security. 
- Multi chains, in general real to a multitude of issues: 
	- 🐢 Slow and asynchronous communication
	- 💴 vs 💰 / 🥷: varying degrees of economic security, leading to a the weakest link issue
---

![optimistic.png](/img/user/Excalidraw/blockchain-reimagined/optimistic.png)

- `-` Slow finality / ⚠️ Need FP / Fragmented
- `+`  Little overhead on L1 (Execution, DA)

Notes:

- little overhead on the base security layer, scales well:
	- New rollup, in the absence of fraud, no overhead on L1 in terms of execution, only DA
	- Although, in the presence of fraud, the L1 has to re-execute everything. I wonder how much this scales in the presence of frauds, and when compared to the cost of performing fraud. 
- slow finality
- In the presence of fraud proofs, it is secure. In the lack of of fraud proofs, it is a non-starter because it fully loses touch with the initial assumption of "the system is secure because of the L1 validators' economic security".

---

![cynical.png](/img/user/Excalidraw/blockchain-reimagined/cynical.png)

- `+` FP Is proactive and secure /  FAST finality / 🥷🔫 HOMOGENOUS security 
- `-` proactiveness is *not free*, but still scales well
- ELVES / Sharded Execution, Shared Security  / "Validator waiting room" analogy 

Notes:
- Fraud prover is my neighboring validator, and is ***as secure as I am***. 
- Fraud prover is ***proactively*** asked to check my work. 
- In case of escalation, all validators participate. Hydra analogy. 
- This leads, through game theoretic and economic rules into a system that is functionally equivalent to **Shared Security, but sharded execution**. 
- [ELVES](https://eprint.iacr.org/2024/961): The cost of attacking any of the L2s in this model, is as high as the cost of attacking the entire L1. 
	- [x.com](https://x.com/rphmeier/status/1807884271157187007)
	- [Jeff Burdges (Web3 Foundation) - " WIP: Efficient Block-Auditing for Blockchains" - YouTube](https://www.youtube.com/watch?v=C1teIFTSphE)
- Optimistic: Go to the room of validators, and if after 2 weeks no one says that something was wrong, you are good. 
- Cynical: Go to the room of validators, and ask 5 random validators out of 1000 what they think. Then ask 5 more random ones what they think of the


---

![asym.png](/img/user/Excalidraw/blockchain-reimagined/asym.png)

- `+` Secure
- `-` Expensive to prove, Generality

Notes:
- [Coprocessor Market Structure: Cryptoeconomic vs ZK | rob.tech](https://www.rob.tech/blog/coprocessor-competition/)
- [4.1 Heated Pannel: Programmable Crypto (ZK) v.s. Programmable Trust (Restaking) - YouTube](https://www.youtube.com/watch?v=SQWgrfCwVkk&list=PLa81rqLujkvsdo5XXCfE6mp0XmYzXtSKU&index=9)
- [A technical FAQ on Lasso, Jolt, and recent advancements in SNARK design - a16z crypto](https://a16zcrypto.com/posts/article/a-technical-faq-on-lasso-jolt-and-recent-advancements-in-snark-design/)

---

![polkadot.png](/img/user/Excalidraw/blockchain-reimagined/polkadot.png)

- Cores, Parachains

Notes:
- [Bringing Polkadot tech to Ethereum - Layer 2 - Ethereum Research](https://ethresear.ch/t/bringing-polkadot-tech-to-ethereum/17104)
1. Higher Cost, an inevitability of the proactiveness of the security that Polkadot offers
2. Shorter time to finality
3. Possibility of implementing SPREE  
4. No weakest link issue. 

---
### Polkadot 2.0

- Make the usage of cores more flexible: 
	- Agile and On-demand
	- Elastic Scaling
	- Lower Block Times, 0.5 parachains are coming

---

![jam.png](/img/user/resources/JAM.png)

- Gutting and exposing Polkadot's core abilities. 
- You can only do this under the shadow of Cynical Rollups' shared security. 
- .. and a very powerful VM. 

Notes:

JAM is a gutting of Polkadot that exposes: 
1. DA
2. Onchain 
3. In-Core

To the user of each core.


---
### JAM (2)

Why is JAM a big deal, and a step forward? 

> [!error]
> Persistent Fragmentation ❌

Notes: 

All models so far suffer from a property that we can call persistent fragmentation. The state associated with each application must live within the boundaries of its own walled garden. 

Through access to DA, and a fully unspecified scheduling, application that run on JAM (Services) need not suffer from persistent fragmentation, should they wish to. 

This is a big deal, and a step forward in the space of sharded blockchain. 

[JAM Resources](https://graypaper.com/resources/#download)

---
## Summary 

|                     | Economically Secure? 💻💰 | Homogenous Economic Security  🥷 | Fragmented?<br>🐢 |
| ------------------- | ------------------------- | -------------------------------- | ----------------- |
| Hyper Optimized     | ✅ 🙈                      | N/A                              | ✅                 |
| Sharded MC          | ✅ 📉                      | ❌                                | ❌                 |
| Optimistic RU W FP  | ✅                         | ❌ ~ ✅                            | ❌                 |
| Optimistic RU WO FP | ❌                         | ❌                                | ❌                 |
| SNARK  Rollups      | ✅                         | ❌ ~ ✅                            | ❌                 |
| Cynical Rollups     | ✅                         | ✅                                | ❌                 |
| JAM                 | ✅                         | ✅                                | ✅*                |

---
## Close

> *Question: Which application is best suited to which computer?* 

> *How can we build systems that **are faster** but are not a time-bomb waiting for the next black swan event?* 

- Strong Opinions? Later ;) 
- Talk + Recording
	- https://blog.kianenigma.nl/blockchain-reimagined/presentation-tum/

Note: 
- I tried to keep this talk intentionally un-opinionated, but I do have *stronger opinions* ;) 
	- Come talk to me afterwards, or perhaps the panel later today.
- [TUM Dry Run](https://www.loom.com/share/af03a7963a7b4df3a9ab2cc9dcd7d346?sid=acc935f6-30b2-4eb7-8a5d-1a4e40ae3350)


---
## Appendix

- I merged PoW and PoS fully, and I argue PoW is a specialized case of PoS in which stake is paid in hardware. Come change my mind. 