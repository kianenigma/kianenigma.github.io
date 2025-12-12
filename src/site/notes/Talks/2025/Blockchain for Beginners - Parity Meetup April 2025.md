---
{"dg-publish":true,"dg-permalink":"/talks/blockchain-beginners-2025","permalink":"/talks/blockchain-beginners-2025/","tags":["slides"],"created":"2025-04-28T16:57:59.887+01:00","updated":"2025-12-12T19:12:16.508+00:00"}
---

<style>
.reveal,
.reveal h1,
.reveal h2,
.reveal h3,
.reveal h4,
.reveal h5,
.reveal h6 {
  font-family: "PT Serif";
}
.reveal {
  --r-main-font-size: 32px;
}
.reveal .slides section img { 
	max-height: 30vh; /* Limit image height to 70% of the viewport height */ 
	width: auto; /* Maintain aspect ratio */ 
	 border-radius: 50px;
	 padding: 20px;
}
</style>

# Blockchain For Beginners 

---
## About Me

![Screenshot 2023-11-01 at 21.21.06.jpeg|300](/img/user/resources/Screenshot%202023-11-01%20at%2021.21.06.jpeg)

- Kian Paimani aka. `@kianenigma`
- Engineering Lead @ Parity Technologies 
- Polkadot Fellow
- blog.kianenigma.com (<-- slides)

---

# Introduction

---

## Owning Money 

- €100 worth of Bitcoin, and €100 in your national bank of choice. What is the difference?

![Blockchain for Beginners - Parity Meetup April 2025 2025-04-29 16.01.17.png](/img/user/resources/Blockchain%20for%20Beginners%20-%20Parity%20Meetup%20April%202025%202025-04-29%2016.01.17.png)

--
### Owning Money 
- Revolut
- &shy;<!-- element class="fragment" -->🏦 Central Bank
- &shy;<!-- element class="fragment" -->👩‍⚖️ Judiciary System
- &shy;<!-- element class="fragment" -->🔫 Law Enforcement

--
### Owning Money 

- Bitcoin
- &shy;<!-- element class="fragment" -->🧮 Cryptography
- &shy;<!-- element class="fragment" -->🤑 (Crypto)Economic Security
- &shy;<!-- element class="fragment" -->🔂 Re-execution
- &shy;<!-- element class="fragment" -->⛓️‍💥 Did you notice a blockchain is not in the list? More on that later

> <!-- element class="fragment" -->Somehow we settled on calling systems that utilize the above, and happen to use a blockchain data-structure, a blockchain (system)

Note:
- Cryptography: Military-grade, politically neutral technology
- (Crypto)Economic Security: You diverge from correct behavior? You lose money
- Re-execution: A lot of re-execution of the same work by different parties

More on this in [[Talks/2024/Blockchain Scalability - A Holistic Recap\|Blockchain Scalability - A Holistic Recap]]

--
### Owning Money 

- &shy;<!-- element class="fragment" -->🔫 + 🏦 + 👩‍⚖️ $\rightarrow$ Trust 
- &shy;<!-- element class="fragment" -->🧮 + 🤑 + 🔂  $\rightarrow$ **Truth** 
	- &shy;<!-- element class="fragment" -->aka. Verifiable trust 
	- &shy;<!-- element class="fragment" --> "*Less trust, more truth*"
- &shy;<!-- element class="fragment" -->Blockchain systems yield a ***truthful computer***.

---
## Properties Of The Truthful Blockchain Computer

Let's examine

--
### Properties: Execution + Storage

- &shy;<!-- element class="fragment" -->Given a set of rules for the computer encoded as a **`code`**
- &shy;<!-- element class="fragment" -->And an **`input`** to that code
- &shy;<!-- element class="fragment" -->The `code` is executed correctly
- &shy;<!-- element class="fragment" -->Any **`storage`** *update by that code* is truthful
- &shy;<!-- element class="fragment" -->*Truthful* **Execution** + **Storage**
- &shy;<!-- element class="fragment" -->What is the `code`, `input`, and `storage` in Bitcoin? 

--

### Properties: Execution + Storage

![Blockchain for Beginners - Parity Meetup April 2025 2025-04-29 16.04.43.png](/img/user/resources/Blockchain%20for%20Beginners%20-%20Parity%20Meetup%20April%202025%202025-04-29%2016.04.43.png)

--

### Properties: Auditable History + Strict Ordering 

- ⛓️‍💥 Blockchain (is **overrated**)!
- Blockchain != Blockchain-based system

![Blockchain for Beginners - Parity Meetup April 2025 2025-04-29 16.11.08.png](/img/user/resources/Blockchain%20for%20Beginners%20-%20Parity%20Meetup%20April%202025%202025-04-29%2016.11.08.png)

--

### Properties: Public

- Both `code` and `storage` and `input`s to that code need to be public for other network participants to verify it
- &shy;<!-- element class="fragment" -->🔂 **Re-execution necessitates (*some degree of*) publicity**
- &shy;<!-- element class="fragment" -->✅ ZK-SNARK proofs? Yes, that'll work

--

### Properties: Digital

* Needless to say, this *truthfulness* **only applies to the execution of the `code`, and its side-effect `storage`**. 
* &shy;<!-- element class="fragment" -->Not anything else, and importantly not the real world.
	* &shy;<!-- element class="fragment" -->Oracle Problem
* &shy;<!-- element class="fragment" -->RWA???

Note:

Not to say RWA tokenization is bad... But it is fundamentally using Blockchains different compared to that of DeFi and alike.

---

## How 

* How the blockchain computer becomes truthful? 
* &shy;<!-- element class="fragment" -->🔂 $\rightarrow$ Network of nodes, some authoring new blocks, some verifying
* &shy;<!-- element class="fragment" -->🤑 $\rightarrow$ PoW, PoS
* &shy;<!-- element class="fragment" -->⛓️‍💥 $\rightarrow$ Blockchain used to keep track of the correct order 


Note: 

We actually covered this. 

* POW and POS are both ways to ensure economic security

--

### PoS vs. PoS

![Pasted image 20250429161752.png](/img/user/resources/Pasted%20image%2020250429161752.png)


---

## Evolution Of The Blockchain Computer

* From the point of view of the primary developers
* .. Although history tells us this leads to the user experience as well 🤭

--

### Evolution Of The Blockchain Computer

- Bitcoin: Domain-specific. Fixed `code` and `storage`
- 🦖 A lot of other dino-chains are similar

--

### Evolution Of The Blockchain Computer

- Smart Contract! 
	- &shy;<!-- element class="fragment" -->A (limited) way to extend the `code` and `storage` of another blockchain computer
- &shy;<!-- element class="fragment" --> Ethereum, (most) Rollups, and anything else EVM-based
- &shy;<!-- element class="fragment" --> Solana, NEAR, ETH-killers and family

--

### Evolution Of The Blockchain Computer

- How about we have multiple blockchains with different `code` and `storage` each? 
- &shy;<!-- element class="fragment" -->Polkadot / Cosmos
- &shy;<!-- element class="fragment" -->Some Ethereum Rollups

--

### Evolution Of The Blockchain Computer

- How about we don't expose the blockchain to developers?
- &shy;<!-- element class="fragment" -->Polkadot JAM, ICP, AR.IO, with differing properties

---

## Introduction Ends 

Questions? 

---

## Reflection / Discussion

* Not financial advise 😁

---

## What Have We Solved? 

--

### What Have We Solved

- ✅ Commoditization of digital goods
	- Stablecoins, Defi, GameFi, NFTs
	- Computation and Storage

<br>

<iframe width="640px" height="360px" src="https://defillama.com/chart/chain/All?" title="DefiLlama" frameborder="0"></iframe>

--

### What We Might Solve

![Screenshot 2025-08-11 at 10.41.24.png](/img/user/resources/Screenshot%202025-08-11%20at%2010.41.24.png)

Note: 
- RFC 2616 (Hypertext Transfer Protocol -- HTTP/1.1, June 1999)

--

### What Have We Solved

- The ratio of money invested in blockchains vs Products is still very tilted
- &shy;<!-- element class="fragment" -->Why? 
	- &shy;<!-- element class="fragment" -->Some due to lack of scalability 
	- &shy;<!-- element class="fragment" --> Some due to stickiness 
	- &shy;<!-- element class="fragment" -->Some due to lack of PMF

--

### Lack of PMF

- We cannot determine what problem can a technology can solve, if we don't exactly understand what that technology does.
- &shy;<!-- element class="fragment" --> Ask yourself:  When/Why do you I need a truthful computer with the properties mentioned above? 

Note:

* Social interactions, in societies large enough when you cannot trust one another

--

### Why DeFi is Perfect PMF

👉 NOT A COINCIDENCE 👈

- &shy;<!-- element class="fragment" -->✅ Social interaction, needs truthful computer as intermediary
- &shy;<!-- element class="fragment" -->✅ Happens on entirely digital data
- &shy;<!-- element class="fragment" -->✅ Limited computation and storage needs
- &shy;<!-- element class="fragment" -->✅ Publicity is tolerable (thanks not having proper identity and pseudonym accounts)

--

### What Else Is a PMF?

Note: 

Exercise to look at the list of applications that you use, and determine in which: 

1. it is digital
2. You are interacting with other humans

---

## Limitations / Frontier Problems 

- &shy;<!-- element class="fragment" -->The Oracle Problem
	- &shy;<!-- element class="fragment" -->Personhood, Identity
- &shy;<!-- element class="fragment" -->Private Computation
	- &shy;<!-- element class="fragment" -->FHE / ZK-SNARKs / MPC


--

## Limitations: User Experience 

- Blockchain developers tend to expose the underlying infrastructure to users

![Pasted image 20250429161858.png](/img/user/resources/Pasted%20image%2020250429161858.png)

Note:
- User Interface/Experience is the main bottleneck
	- The amount of underlying details that we expose to user is as if: 
		- We asked an email writer to compose the email headers
		- To open a webpage you would have to send a GET request, then paste the results into a separate HTML viewer
			- Then when clicking on a new button you would repeat the same

---

## (Politically Correct) Opinions End

Questions? 

---

## 🌶️ Spicy Opinions 

(DEFINITELY not financial advice)

--

### Speculation 

* Over-speculation in blockchain *as an infrastructure* is..
* &shy;<!-- element class="fragment" --> 100% real

--

### Speculation 

- DotCom bubble, happening 2 months after the internet was invented, with 20 times more capital

--

### Greed / Psychology 

This industry is a unique mixture of 
- A lot of capital
- A lot of potential to empower of individuals to build financial applications 

Note: 

I am sure some behavior scientists will look at our behaviors today as developers and investors in this space and so amazing studies on it

--

### Potential For Good and Bad

* Like any other technology, it is a double-edged sword
* I have spent \~7 years of my life on this, and I ~believe~ can see and understand that it has a great potential for **good**.
 