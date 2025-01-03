---
{"dg-publish":true,"permalink":"/blockchain-reimagined/content/how/blockchains-are-overrated/","hide":true,"created":"2024-10-26T11:17:48.692+01:00","updated":"2024-12-29T16:56:14.374+00:00"}
---

We begin our description of how blockchains work with this cheeky title, as it conveys a very important message: What we have discussed so far, most notably in [[Blockchain-Reimagined/Content/What/Index\|"What"]] elaborated on Blockchains as [[Blockchain-Reimagined/Glossary/Resilience\|Resilience]] [[Blockchain-Reimagined/Glossary/State Machine\|State Machine]], 3 of the most important properties of which are: 
1. Verifiable execution
2. Correct ordering (of blocks and transaction)
3. Audit-ability of history

Blockchain is merely the one of the main data-structures that is used to achieved the above. That being said, we often (mistakenly) refer to the entire system as a "blockchain". This is pedantically wrong, and why I assert blockchains are overrated. 

> That being said, I myself have and will give into to this mistake, and use the work "blockchain" to refer to an entire system that is built using a blockchain.

Specifically, blockchain only helps with verifying the ordering and audit-ability of the history. Blockchain is *not* the technology that delivers verifiable execution *at all*, or even establish *what* the correct order should be.

Let's dive further into understanding *what* Blockchains actually are, and then revisit this proposition at the end.
## Blockchain

Imagine we have an establish correct order of 3 transactions[^1]. Without any special means, how can a new participant append a 4th one, while being able to prove the order of all the previous transactions? 

A naive way would be to always include the full list of previous

[1^]: recall from [[Blockchain-Reimagined/Appendix/Blockchain Models\|Blockchain Models]] that transaction is synonym to a transition or mutation to the blockchain.

Blockchain is solving this problem.

A blockchain proposes to: 
- Bundle all transactions that are being added, in the right order, into a single *block of transactions*
- *Chain* these blocks together by referencing a [[Blockchain-Reimagined/Appendix/Cryptographically Secured Hash\|Cryptographically Secured Hash]] of the previous block

```mermaid
graph LR
    subgraph "Block N-1"
        Header1["Header\n Current Hash: abc...\n Parent Hash: xyz..."]
        TxA["Tx1\nTx2\nTx3"]
        Header1 --> TxA
    end

    subgraph "Block N"
        Header2["Header\n Current Hash: def...\n Parent Hash: abc..."]
        TxB["Tx4"]
        Header2 --> TxB
    end

    Header1 --> Header2
```
The main novelty of the above is the `Header` of each block, which contains
- The **hash of all the data in the current block** of transactions
- A **hash of the parent block**, on top of which this block is meant to be valid

What the blockchain data structure achieves here is twofold: 
1. Assuming we have a large array of such blocks chained together, no previous block can be tampered with, or else the chain of valid hashes will break. This means
	1. No previous transaction can be added, removed, or modified
	2. Any new block is committing to a specified parent, growing the blockchain only in one canonical chain.
2. The hash of the header of the latest block contains a digest (via a [[Blockchain-Reimagined/Appendix/Cryptographically Secured Hash\|Cryptographically Secured Hash]]) of all the previous blocks as well. This allows the blockchain to grow, without the need to always (re)hash all of the transactions. 
## Aside: Forks 

Recall from [[Blockchain-Reimagined/Content/What/Execution, Ordering, History and State Machines\|Execution, Ordering, History and State Machines]] that a blockchain might have two mutations that both adhere to a **valid execution**, but eventually they are two parallel views of the state, and we need to resolve by choosing one. This situation is called a **[[Blockchain-Reimagined/Glossary/Fork\|Fork]]**. 

Blockchain systems must be able to eventually resolve forks by choosing one over the other, which is called the **Canonical Chain**. The rules of how forks are resolved is up to the [[Blockchain-Reimagined/Glossary/Consensus Algorithm\|Consensus Algorithm]] of the blockchain, and vary from implementation to implementation.

> It is also possible that one of the forks is an **invalid execution**, but in principle, they can be treated the same: the role of the consensus algorithm is to resolve them into choosing the canonical one. 
## Overrated? 

In summary, a blockchain, as a data-structure, is an **append-only list of transactions**, with an easy way to ensure the history is not tampered with.

It only provides the following: 
- Given the current block header, and its hash, you can be sure that if that block is valid, and part of the canonical chain, the entire chain of blocks that 

What the correct order of transactions in 

## Resilience

Blockchains are a means to an end; the goal is to create [[Blockchain-Reimagined/Glossary/Resilience\|Resilience]] systems, or perhaps a [[Blockchain-Reimagined/Glossary/Resilience\|Resilience]] web that we may call [[Blockchain-Reimagined/Glossary/Web3\|Web3]]. 