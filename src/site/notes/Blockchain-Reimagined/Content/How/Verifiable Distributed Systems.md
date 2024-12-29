---
{"dg-publish":true,"permalink":"/blockchain-reimagined/content/how/verifiable-distributed-systems/","hide":true,"created":"2024-08-11T18:28:26.428+01:00","updated":"2024-12-28T11:08:13.868+00:00"}
---

As clearly elaborated on [[Blockchain-Reimagined/Content/What/Blockchain-based Authorities\|Blockchain-based Authorities]], blockchains are digital systems. More precisely, they are forms of digital distributed systems that  

[[Blockchain-Reimagined/Content/What/Blockchain-based Authorities\|Blockchain-based Authorities]] closed by suggesting that we ca *verify* the correctness of the execution of a software through the use of a distributed network, without any form of [[Blind Trust\|Blind Trust]] involved.

For anyone unfamiliar: a distributed network is one in which many computers collaborate to perform a computation. For example, a small network could consist of 3 nodes: `A`, `B` and `C`. These nodes are interconnected, and can communicate with one another.  

TODO: diagram 

Consider the following properties in a distributed system: 
- Replication and Verification: Nodes sufficiently replicate one another's execution
- Incentives: The incentives are set such that these node's interest is to behave, including act upon one another's misbehavior. 
- High Inclusion: Reasonably low barrier to entry for these nodes
- Public: The rules of the system must public

A distributed system that has *at least* the above properties can be considered one that we can, in our own words from [[Blockchain-Reimagined/Content/What/Blockchain-based Authorities\|Blockchain-based Authorities]], *verifiably trust*, not *blindly*.  

TODO: Look into Gav's new 5 thoughts about web3. 

Distributed Trust Systems can have 2 types of nodes:
- Leaders
- Observers 

Which can cab further subdivide into
1. Authors
2. Observers: 
	1. Full Nodes 
	2. Users (Light Nodes)

We mostly focus on the author nodes, and what they do, as they are the ones that at the end of the day being about change in the system.

TODO: what are the current node types in Ethereum? Execution and what else? what is that all about? 

Leader Based Digital System 