---
{"dg-publish":true,"dg-permalink":"blockchain-reimagined/presentation-tum","permalink":"/blockchain-reimagined/presentation-tum/","created":"2024-09-08T13:01:24.988+01:00","updated":"2024-09-10T12:07:21.530+01:00"}
---


## Prelude 

- Hello 👋🏻
- `@kianenigma / kianenigma.nl`

- Polkadot for ~6 years
- Re-discover the fundamentals of blockchains
- I am here to solve industry-scale problems, not sell product


Notes: 

1. I am a core engineer of Polkadot. 
2. On a journey to re-discover the fundamentals of blockchains. This talk is part of my journey.
	-  *Purpose-dysphoria*
3. Academic talk, not selling anything. Not talking much about Polkadot (*very little*)

---

## Owning Digital Money 

- €1000 in Revolut (🔫👮🧑‍⚖️⛪️)
- €1000 in the Bitcoin network (🧮 ♾️)
- Economically secured validators doing redundant work 💰

Notes: 

Why do we trust each? 

- In Revolut, there is, in principle, as little as one computer, owned by Revolut, processes this transaction, and we trust the outcome of that, because of all the legal regulations around banking, government, law enforcements etc. 
- In the bitcoin network, we ***synthesize a new type of trust***, that is less based on social norms and central power, and more based on science, and is therefore verify-able, namely: mathematics, game theory and economics. 

- A big part of this "*based on science*" is the fact that in a network like Bitcoin: 
	- a large number of actors can be the authority
	- and many others, can check what that authority has done.
		- We call this collective of nodes the above two groups "Validators".
	- All validators have skin in the game -> Economic Security 
	- All other nodes can observe and re-verify the behavior of validators. 

---
## Validator Set

![bi_cpu_models.png](/img/user/Excalidraw/blockchain-reimagined/bi_cpu_models.png)

Is One Massive, ***SLOW***, **TRUSTWORTHY** CPU 

Notes: 
- And a key reason why blockchains have a hard time scaling: All validator's at the simplest model, have to re-execute everyone else's work, and come to consensus/finality about it.

Question: Which CPU model is good, or perhaps good for which use cases? idk, deeper philosophical question.

Question statement: **How can I make the Web3 CPU go faster?** and while doing so, am I am compromising on the trust-worthy-ness of it? 

This is the core issue we try to tackle, how can we remove this property of "everyone re-executes everything". 

---
## Scaling Options 

---

![hyperopt.png](/img/user/Excalidraw/blockchain-reimagined/hyperopt.png)
- Brute force / Cutting corners? 

Note: 
- Somewhat like brute forcing it. 
- Needs careful consideration of how much of trust-worthiness of the original model it retains. 
- [Solana - How it Works (Helius)](https://report.helius.dev/)

---

![shardingsecyurity.png](/img/user/Excalidraw/blockchain-reimagined/shardingsecyurity.png)
- Sharding Security and Capital / Limited Capital / Communication 


---

![optimistic.png](/img/user/Excalidraw/blockchain-reimagined/optimistic.png)

- Scales well / Slow finality / ⚠️ Need FP / Fragmented

Notes:

- little overhead on the base security layer, scales well and is basically free/very-cheap.
- slow finality
- In the presence of fraud proofs, it is secure. In the lack of of fraud proofs, it is not at all. 

---

![cynical.png](/img/user/Excalidraw/blockchain-reimagined/cynical.png)

- FP Is embedded, and proactive / Fast finality
- ELVES: Sharded Execution, Shared Security 

Notes:
- Fraud prover is my neighboring validator, and is as secure as I am. Fraud prover is proactively asked to check my work. 
- In case of escalation, all. Hydra analogy. 
- This leads, through game theoretic and economic rules into a system that is functionally equivalent to **Shared Security, but sharded execution**. 
- ELVES: The cost of attacking any of the L2s in this model, is as high as the cost of attacking the entire L1. 

---

![asym.png](/img/user/Excalidraw/blockchain-reimagined/asym.png)

- Secure, Expensive

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

Notes: 



---

![jam.png](/img/user/Excalidraw/blockchain-reimagined/jam.png)

- Gutting and exposing Polkadot's core abilities. 

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

---
## Summary 

|                          | Economically Secure? 💻💰 | Homogenous Economic Security  🥷 | Fragmented?<br>🐢 |
| ------------------------ | ------------------------- | -------------------------------- | ----------------- |
| Hyper Optimized Networks | ✅                         | N/A                              | ✅                 |
| Sharded Multi Chain      | ✅                         | ❌                                | ❌                 |
| Optimistic Rollups W FP  | ✅                         | ❌                                | ❌                 |
| Optimistic Rollups WO FP | ❌                         | ❌                                | ❌                 |
| SNARK  Rollups           | ✅                         | ❌                                | ❌                 |
| Cynical Rollups          | ✅                         | ✅                                | ❌                 |
| JAM                      | ✅                         | ✅                                | ✅*                |

---
## Opinions

- I tried to keep this talk intentionally un-opinionated, but I do have more strong opinions ;) 
- Come talk to me afterwards, or perhaps the panel later today.

---
## Appendix

- I merged PoW and PoS fully, and I argue PoW is a specialized case of PoS in which stake is paid in hardware. Come change my mind. 