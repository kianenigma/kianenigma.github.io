---
{"dg-publish":true,"dg-permalink":"/multichain-api","permalink":"/multichain-api/","tags":["polkadot"],"created":"2024-09-04T16:46:04.790+07:00","updated":"2024-10-25T16:00:58.042+07:00"}
---

A quick brain-dump around what I would describe as an API for the "Polkadot Network". 

This is mostly a summary of the `PAPI` discussions [here](https://github.com/polkadot-api/polkadot-api/issues/666#issuecomment-2321095016) and [here](https://github.com/polkadot-api/polkadot-api/issues/689), but I have posted the meat here as it might be relevant to all SDKs such as [polkadot-js-api](https://github.com/polkadot-js/api) and [paritytech/subxt](https://github.com/paritytech/subxt), not just `PAPI`.
## What is Polkadot Network

Going forward, the Polkadot network is not the Polkadot relay chain anymore, and it is not AssetHub. It a combination of system chains that might fluidly decide to scatter themselves further (example: Staking functionality moving to a different system parachain), or unify to achieve synchrony (example: Coretime chain merging into AH).

So, Polkadot Network is **not the relay chain**, and it is **not a specific system chain**. It is the combination thereof. In this view, a proper SDK is one that abstracts away over, not a pallet, not a single chain, but rather over the entire network, the red dashed circle below. 

![Pasted image 20240904110357.png](/img/user/resources/Pasted%20image%2020240904110357.png)
## API For The Polkadot Network

With that definition in mind, let's consider: 

The "Polkadot Network" (!= relay chain) as a whole always provides the following list of functionalities: 

1. Query and transfer of the DOT token. 
2. Staking the DOT token 
3. Ability to vote on a referendum with the DOT token

The goal should be to provide an API that is abstract over "*on which chain each of these functionalities reside*", but rather the mere fact that "*They exist somewhere in the Polkadot network*".

```javascript 
dotApi = await new PolkadotNetwork(); 
{ transferrable, reserved } = dotApi.balance_of("kian");

// options for staking, such as who you want to supprot. 
opts = {}
result = dotApi.stake(transferrable / 2, opts);
```

Notice in the above, I do not specify a network, or a pallet. I merely ask the "*Polkadot Network*, please tell me how much DOT I have in your entirety. 
## Easier Said Than Done

The above basically suggests: *Let's make life very very very hard for a few JS API teams, in return for all other builder teams having an easier time*. 

This is a worthwhile tradeoff, and is aligned with making Polkadot more accessible: As a novice Application developer, you are not thrown in the pitfalls of a multi-chain, asynchronous, XCM-riddled ecosystem. 

> [!info] Projects like [`txwrapper`](https://github.com/paritytech/txwrapper-core) and [`api-sidecar`](https://github.com/paritytech/substrate-api-sidecar) are, in some sense, the same thing, yet since they are not vertically integrated into `polkadot-sdk` and/or `PAPI`/`PJS`, I am not sure if they get the attention they deserve. 

Instead, you have the option to start with the "Polkadot Network API", and then graduate into using low level APIs that let you deal with chains and pallets from the get go. 

That being said, one major technique that can be used while building this infrastructure to prevent it from becoming a maintenance snowball: Using `RuntimeAPIs`. That is, refraining from reading the direct pallet storage for as much as possible, and instead rely on more high level queries that the runtime exposes in the form of raw runtime-apis and/or view-function[^1]. 

[^1]: [Wasm view functions - Tech Talk - Polkadot Forum](https://forum.polkadot.network/t/wasm-view-functions/1045)

This moves at least a part of the complexity of implementing the above into the runtime, which has a few advantages: 

1. It is the responsibility of the polkadot-sdk maintainers to update them, not you. Of course, these APIs are meant to have a super stable interface, and only their implementation might change. 
2. It remains backwards compatible and upgrade-able by nature: If the `:code` changes, the implementation might changes. 
