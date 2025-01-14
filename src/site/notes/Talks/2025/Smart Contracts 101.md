---
{"dg-publish":true,"permalink":"/talks/2025/smart-contracts-101/","created":"2025-01-13T15:42:59.603+00:00","updated":"2025-01-14T14:30:42.653+00:00"}
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

# Polkadot Smart Contracts

---

## About Me

![Screenshot 2023-11-01 at 21.21.06.jpeg|300](/img/user/resources/Screenshot%202023-11-01%20at%2021.21.06.jpeg)

- Kian Paimani aka. `@kianenigma`
- Engineering Lead @ Parity Technologies 
- Polkadot Core Fellow
- blog.kianenigma.com (<-- slides)

---

## What is a Smart Contract


Blockchain models that we can think of:

- Database 🤮
- State Machine ♾️
- Computer 💻

Note: 

First is utter BS
Second is accurate, but a bit to math-y
Third one is accurate, and one that most people relate to, we will use this one

--

## What is a Smart Contract

- Computer has `code` and `memory`. 
- Users can interact with the `code` (trigger a transfer)
- In a blockchain, we call these the `stf`/`runtime`, and `state` respectively. 

> Aside: The main novelty of a computer is that it will execute `code` correctly, and therefore you can TRUST the `memory`. 🪄

--

## What is a Smart Contract

- First generation blockchains had a fixed `code`. 
- What is the `code` of the Bitcoin computer? 
	- Transfer of BTC <!-- element class="fragment" -->

Note: 

First blockchains were computers with a (almost) fixed `code`. Bitcoin's `code` is ONLY how to do transfer of BTC, and therefore the State of the Bitcoin computer was only user balances. Nothing more. 

--

## What is a Smart Contract

- Smart Contracts are the first step into making blockchain computers ***programmable***. 

--

## What is a Smart Contract

- **Ethereum** is a programmable blockchain
- What is the `code` of the Ethereum computer? 
	- Transfer of ETH <!-- element class="fragment" --> 
	- Upload a contract <!-- element class="fragment" --> 
	- Call into an existing contract, which might alter state <!-- element class="fragment" --> 


--

## What is a Smart Contract

![contracts_compilation.png](/img/user/Excalidraw/contracts_compilation.png)

--

## What is a Smart Contract

- Given: blockchains are computers with `code` and `memory`
- Smart contracts are essentially a way to ***extend*** the `code` *and* `memory`

--

## What is a Smart Contract

- Execution of these contracts is as secure as the execution of the main blockchain's `code`. 🪄
- If you can trust Ethereum and its ability to correctly transfer ETH, you should also trust that it can correctly execute whatever is the code of any smart contract. <!-- element class="fragment" --> 

---

## Ethereum Contracts
A Smart Contract has: 
- code 
- address (at which it can be invoked)
- state/memory
- balance: money owned by the contract

Note: 

Bringing it all together

---

## Case Study

Simple Escrow Contract

- Buyer deposits funds 
- Both buyer and seller approve
	- Transfer funds to seller
- Timeout
	- Return funds to buyer

--

## Case Study

Web3 Roulette 

- Deposit Phase 
	- Anyone can deposit money into the contract 
- Roulette Phase
	- One participants get nothing back, their money split among everyone else

---

## How to Write a Contract

- Ethereum Contracts are written in a language **Solidity**. 
- Part of the Ethereum `code` is to execute **Solidity** code.
- This happens in a virtual machine known as **EVM**

Note: 

EVM: Ethereum Virtual Machine

---

## How to Execute a Contract

If Ethereum wants to execute a totally untrusted code, what challenges does it have? 

- Deterministic cost (**gas**)
- Deterministic output (**EVM**)

--

## How to Execute a Contract

- Ability to **meter** ⏰ the cost of the execution of a contract is an important requirement
- This is why when interacting with any contract, you specify `gas_limit`


--

## Extending Memory

What about the fact that a contract can add more data to its own memory, which in turn bloats the overall blockchain memory? 

- State cost needs to be taken into account
	- Part of **gas**
	- **Deposit**
	- **State Rent**

--

## Other Properties of Contracts

- Atomic
- Immutable 

---

## Smart Contracts in Polkadot 

---

## Polkadot 

- Computer who's `code` allows ***other Blockchains*** to be executed and validated.
- Polkadot always assumed one of these external blockchains (**Parachains**) would deliver smart contract capability.

---

## Past 

- Polkadot's `code` is **WASM** bytecode (not EVM or similar).
- An experiment to compile Rust to WASM as a smart Contract
	- `pallet-contracts` and [Ink!](https://use.ink/how-it-works/).
- Execute EVM compatible Smart Contracts as well
	- [`pallet-evm`](https://polkadot-evm.github.io/frontier/)

Note: 

Both of these initiated in Parity, but are pursued as community projects now. 

---

## Now 

- A new, much better virtual machine based on RiskV: [**PolkaVM**](https://forum.polkadot.network/t/announcing-polkavm-a-new-risc-v-based-vm-for-smart-contracts-and-possibly-more/3811)
- Fork `pallet-contracts` to execute any Smart Contract that compiles to PolkaVM.
- Compiler to compile Solidity to PolkaVM bytecode

--

## Now

Outcome: Polkadot will have fast Solidity-compatible Smart Contracts in H2 2025

---

## Outro

- Smart Contracts are the most basic form of building an application on top of a **secure blockchain computer** 🪄. 
- Battle tested approach that has been used for almost a decade now

---

## Questions 