---
{"dg-publish":true,"permalink":"/blockchain-reimagined/blockchain-reimagined/","hide":true,"created":"2024-07-12T16:35:17.118+01:00","updated":"2024-10-26T14:08:51.945+01:00"}
---

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQb_OXXMBQFHJTbUDDOm-UePQzf_oigtaX1kG8jlpuUXBuw-yrL3nutul3OJReByj3FW5RqAKw6QQdu/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

- [Blockchain, Bitcoin, Polkadot, JAM: Lisbon Hangout - Google Slides](https://docs.google.com/presentation/d/1UPmnISt8OH8CzgxbY2q9kX34rYP8Me-0qkLoiSXPyAQ/edit?usp=sharing)
## Table Of Content
- [[Blockchain-Reimagined/Content/Prelude\|Prelude]]
- Part 1: Blockchain Basics. 
	- [[Blockchain-Reimagined/Content/What Is This All About?\|What Is This All About?]]
	- [[Blockchain-Reimagined/Content/More On Authorities\|More On Authorities]]
	- Execution, Ordering, History
		- Authorities have some state, and perform mutations on it. We can be pretty sure that this mutation was then correct. 
		- Imagine some computer program exists `f(x) -> y`. We either give it to an authority with human-based trust to execute it for us, or we give it to a blockchain like Ethereum to execute it for us. And we know that the execution in Ethereum is also correct. So this is "Verifiable execution of code". 
		- But what if there are two branches of history, which conflict with one another, but each are correct in their own branch? 
		- This is why verifiable execution is not enough, you also need to figure out the ordering, and from ordering you can derive the full history.  
	- [[Blockchain-Reimagined/Content/Verifiable Distributed Systems\|Verifiable Distributed Systems]]
	- [[Blockchain-Reimagined/Content/Value Offering\|Value Offering]]
	- [[Blockchain-Reimagined/Content/Proof of Work\|Proof of Work]]
	- [[Blockchain-Reimagined/Content/Proof of Work\|Proof of Work]]
	- Conclusion: 
		- "Crypto economically secured systems", as a way to establish trust. 
		- Blockchain as a data structure is overrated, and is just an implementation detail. 
- Part 2: Scaling Crypto Economic Systems
- Part 3: Polkadot 
- Part 4: JAM 

Reading Checklist: 
- [ ] The guy who was into classical distributed systems and blockchains
- [ ] Don't be evil vs. Can't be evil. 

Publication Checklist: 
- [ ] Parity, Polkadot Twitter
- [ ] Blockchain Newsletters, news outlets. 
- [ ] Share with book publishers that have already published anything about blockchain
- [ ] Blockchain Podcasts, Any other influencer. 
- [ ] Short form video clips narrated
- [ ] ability to tip me! 


## Brain Dumps after [[Blockchain-Reimagined/Presentation/Blockchain Scalability - A Holistic Recap\|Blockchain Scalability - A Holistic Recap]]

- DLTs broadly provide: 
	- Execution of some code that: 
		- Always happen and cannot be sensored
		- Happens correctly
	- Order in which the correct code was executed
	- Audit-ability of history. This is where the blockchain dat structure comes into play.

A punch line I should think about is: Is a system that was formerly fully based on human trust, and now is partially based on human trust better? 