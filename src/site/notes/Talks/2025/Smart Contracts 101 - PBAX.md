---
{"dg-publish":true,"permalink":"/talks/2025/smart-contracts-101-pbax/","created":"2025-01-13T15:42:59.603+00:00","updated":"2025-12-12T18:58:33.574+00:00"}
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
	max-height: 60vh; /* Limit image height to 70% of the viewport height */ 
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

## Blockchain Models

--

### Blockchain Models
- Database 🤮
- A legacy of Bitcoing, and the (*limited*) UTXO model

![Smart Contracts 101 2025-04-23 15.49.08.png](/img/user/resources/Smart%20Contracts%20101%202025-04-23%2015.49.08.png)

--
### Blockchain Models

- State Machine ♾️
- Legacy of Ethereum, and the [YP](https://ethereum.github.io/yellowpaper/paper.pdf).

![Smart Contracts 101 2025-04-23 15.52.40.png](/img/user/resources/Smart%20Contracts%20101%202025-04-23%2015.52.40.png)


--
### Blockchain Models
- State Machine ♾️
	- State, represented as a list of `key -> value`s
	- State Transition Function

--
### Blockchain Models

- Computer 💻
- Legacy of Ethereum (the "*World Computer*"), Polkadot [JAM's Graypaper](https://graypaper.com/resources/).

![Smart Contracts 101 2025-04-23 16.00.57.png](/img/user/resources/Smart%20Contracts%20101%202025-04-23%2016.00.57.png)

Note: 

Database is utter BS
State Machine is accurate, but a bit to math-y
Computer is accurate, and one that most people relate to, we will use this one

---

## The Blockchain Computer
- &shy;<!-- element class="fragment" -->Computer has `code` and `storage`. 
- &shy;<!-- element class="fragment" -->Users can interact with the `code` (trigger a transfer 💸)
- &shy;<!-- element class="fragment" -->`storage` stores *valuable* information (how much money I own 🤑)
- &shy;<!-- element class="fragment" -->The main novelty of a computer is that it will execute `code` correctly, and therefore you can TRUST the `storage`. 🪄

--

## The Blockchain Computer

- First generation blockchains had a fixed `code`. 
- What is the `code` / `storage` of the Bitcoin computer? 
	- <!-- element class="fragment" --> Transfer of BTC
	- <!-- element class="fragment" -->Is it extensible?

Note: 

First blockchains were computers with a (almost) fixed `code`. Bitcoin's `code` is ONLY how to do transfer of BTC, and therefore the storage of the Bitcoin computer was only user balances. Nothing more. 

--

## The Blockchain Computer

- **Smart Contracts** are the first step into making blockchain computers ***programmable***. 

--
## Blockchain Computer

- **Ethereum** is a programmable blockchain computer
- What is the `code` of the Ethereum computer? 
	- Transfer of ETH <!-- element class="fragment" --> 
	- Upload a contract <!-- element class="fragment" --> 
	- Call into an existing contract, which might alter storage <!-- element class="fragment" --> 

--
## Blockchain Computer

- Execution of these contracts is as secure as the execution of the main blockchain's `code`. 🪄
- <!-- element class="fragment" --> If you can trust Ethereum and its ability to correctly transfer ETH, you should also trust that it can correctly execute whatever is the code of any smart contract. 

---

## What Is A Smart Contract

A way to **add programs** with custom `code` and `storage` to the blockchain computer, making it **extensible**, with the very same **security guarantees**.


---

## Anatomy Of Smart Contracts

A Smart Contract has: 
- code 
- storage
- EVM has an opinion to see contracts exactly like user accounts
	- address (at which it can be invoked)
	- balance: money owned by the contract

Note: 
this is based on Ethereum/Solidity/EVM contracts
Bringing it all together


---

## How to Write a Contract

- Ethereum Contracts are written in a language **Solidity**
	- Part of the Ethereum `code` is to execute **Solidity**
- This happens in a virtual machine known as **EVM**
- `Solc`: Solidity -> EVM Bytecode

Note: 

EVM: Ethereum Virtual Machine

---

## How to Execute a Contract

If Ethereum wants to execute a totally untrusted code, what challenges does it have? 
- &shy;<!-- element class="fragment" -->Deterministic cost (**gas**)
	- &shy;<!-- element class="fragment" -->⏰ Metering!
	- &shy;<!-- element class="fragment" -->⛽️  `gas_limit`!
- &shy;<!-- element class="fragment" -->Deterministic output (**EVM**)
	- &shy;<!-- element class="fragment" -->🫠 We I cannot make an HTTP request in a contract!

--

## Extending Storage

What about the fact that a contract can add more data to its own storage, which in turn bloats the overall blockchain storage? 

- Storage cost needs to be taken into account
	- Part of **gas**
	- **Deposit**
	- **Storage/State Rent**

---

## Lifecycle 

![contracts_compilation.png](/img/user/Excalidraw/contracts_compilation.png)

---

## Case Studies 

--
### Case Study

Simple Escrow Contract

- Buyer deposits funds 
- Both buyer and seller approve
	- Transfer funds to seller
- Timeout
	- Return funds to buyer

--

### Case Study

Web3 Roulette 

- Deposit Phase 
	- Anyone can deposit money into the contract 
- Roulette Phase
	- One participants get nothing back, their money split among everyone else



---

## Advance Topics

--

### Composability ~ Shared Environment 
- VMs on a hardware
	- Ethereum => Hardware 
	- Contracts => VMs
- Synchronous and Asynchronous 

Note: 

Contracts on Ethereum can always call one another

--

### Re-Entrancy Attacks

```[1-100|2|4-6|8-10|12-13|15|1-100]
contract EtherStore {
    mapping(address => uint256) public balances;

    function deposit() {
        balances[msg.sender] += msg.value;
    }

    function withdraw() {
        uint256 bal = balances[msg.sender];
        require(bal > 0);

        (bool sent,) = msg.sender.call{value: bal}("");
        require(sent, "Failed to send Ether");

        balances[msg.sender] = 0;
    }
}
```

--

### Re-Entrancy Attacks

```
contract Attacker {
	// Our interface to EthStore contract
    EtherStore public etherStore;

    receive() external payable {
        etherStore.withdraw();
    }
}
```

- Checks-Effects-Interactions

Note:

[Cyfrin Code Glossary: Re-entrancy Hack in Solidity](https://www.cyfrin.io/glossary/re-entrancy-hack-solidity-code-example)


---

## Smart Contracts in Polkadot 

![polkadot-new-dot-logo.png](/img/user/resources/polkadot-new-dot-logo.png)
---

## Polkadot 

- Computer who's `code` allows ***other Blockchains*** to be executed and validated.
- Polkadot always assumed one of these external blockchains (**Parachains**) would deliver smart contract capability.

---

## Past 

![Smart Contracts 101 2025-04-23 16.24.44.png](/img/user/resources/Smart%20Contracts%20101%202025-04-23%2016.24.44.png)

- A [lot of Polkadot-based blockchains](https://use.ink/chains/) use the above tech stack

Note: 

- Writing smart contracts in Rust: [Ink!](https://use.ink/how-it-works/), executed in a WASM.
- Writing in Solidity, executed in EVM [`pallet-evm`](https://polkadot-evm.github.io/frontier/)

Both of these initiated in Parity, but are pursued as community projects now. 

---

## Now 

- A new, much better virtual machine based on RiskV: [**PolkaVM**](https://forum.polkadot.network/t/announcing-polkavm-a-new-risc-v-based-vm-for-smart-contracts-and-possibly-more/3811)

![Smart Contracts 101 2025-04-23 16.24.44 1.png](/img/user/resources/Smart%20Contracts%20101%202025-04-23%2016.24.44%201.png)

--

## Now

- Outcome: Polkadot will have fast Solidity-compatible Smart Contracts in H2 2025
- [Demo](https://contracts.polkadot.io/)

---

## Open Question

- Smart Contract vs. Multi-Chain Model

---

## Outro

- Smart Contracts are the most basic form of building an application on top of a **secure blockchain computer** 🪄. 
- Battle tested approach that has been used for almost a decade now

---

## Questions 