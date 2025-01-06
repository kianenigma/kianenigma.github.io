---
{"dg-publish":true,"dg-permalink":"posts/tech/polkadot-sdk-2024","permalink":"/posts/tech/polkadot-sdk-2024/","hide":true,"created":"2024-11-22T21:43:04.000+00:00","updated":"2025-01-06T14:33:38.129+00:00"}
---


As we close the year 2024, and we have seen great roundup articles from the Polkadot ecosystem, I would like to have the honor to present some of the great work that has been done by the maintainers of `polkadot-sdk` in 2024. Other noteworthy roundups: 
- [Polkadot roundup by Gavin Wood](https://polkadot.com/blog/gavin-wood-polkadot-2024-roundup)
- [Polkadot data roundup by DotLake](https://data.parity.io/eoyr2024)

> [!info] Summary 
> This is a written superset of what I have presented in Sub0 Reset Bangkok in November 2024. See [[Talks/2024/Polkadot-SDK FRAME @ 2024\|Polkadot-SDK FRAME @ 2024]].

## Prelude: `substrate` To `polkadot-sdk` 
### Substrate 
The [original Polkadot white-paper](https://polkadot.com/papers) named 5 key shortcomings in 2016 the contemporary technology stack of blockchains, one of which is: 

> Developability: How well do the tools work? Do the APIs address the developers’ needs? Are educational materials available? Are the right integrations there?

Looking at the direction take by Polkadot within the past (nearly decade), we can see a clear trace of this goal being prioritized by the Polkadot developer community. 

This goal primarily manifested as the inception of [`substrate`](https://github.com/paritytech/substrate) in 2018 as an independent brand next to Polkadot. Substrate *was* and *still is* a generic, modular and extensible blockchain framework that borrows some technical decisions form the needs of Polkadot, yet can be used independent of Polkadot[^3]. It is used and loved by many developers, has collected more than 18,000 stars on GitHub[^2] and has a sizable community in [StackExchange](https://substrate.stackexchange.com/). When looking at the position of Polkadot as the 3rd largest developer community in the recent [Electric Capital Developer Report](https://www.developerreport.com/), most of these developers are in fact Substrate developers. 

[^2]: 8.4k in `substrate`, 614 in `cumulus`, 7.1k in `polkadot`, and finally 2.1k in `polkadot-sdk`, the sum of all the repost that Substrate developers have worked with.
[^3]: See [this PBA Lecture from Hong Kong](https://www.youtube.com/watch?v=-ttmm8gYS04&list=PL-w_i5kwVqbkRmfDn5nzeuU1S_FFW8dDg&index=1) cohort on Substrate, or the slide deck [here](https://polkadot-blockchain-academy.github.io/pba-content/singapore-2024/syllabus/6-Polkadot-SDK/Substrate/1-Intro-to-Substrate-slides.html#/).

Substrate was eventually used to build Polkadot Relay Chain, and with the help of a neighboring framework of `cumulus`, it enabled any Substrate chain to become a Polkadot Parachain. Needless to say, many Polkadot-independent blockchains have also been built with Substrate, such as within the [Cardano Partner Chains](https://forum.polkadot.network/t/cardano-partnerchain-v1-release-built-on-substrate/9548), [Midnight](https://midnight.network/), [Avail](https://github.com/availproject/polkadot-sdk) or [BitTensor](https://github.com/opentensor/subtensor) to name a few[^4].

[^4]: See [here](https://coinmarketcap.com/view/polkadot-ecosystem/) or [here]() for further list of non-Parachain Substrate chains. 
### Polkadot-SDK
In May 2023, `substrate`, `cumulus`, `xcm`, and a few other key infrastructure technologies of Polkadot [migrated to a new mono-repo called `polkadot-sdk`](https://forum.polkadot.network/t/psa-parity-is-currently-working-on-merging-the-polkadot-stack-repositories-into-one-single-repository/2883). This  migration had multiple driving factors, that we can set aside for the sake of time. Yet, it marked an important transition to give more emphasis to the fact that Substrate is a part of `polkadot-sdk`.

![Screenshot 2025-01-03 at 16.02.15.png](/img/user/resources/Screenshot%202025-01-03%20at%2016.02.15.png)

What matters today is:
- *Substrate as a technology framework* remains, with exactly the same motivations and key features as before that made many decision makes decide to build on top of it[^1]. 
- *Substrate as a brand* is now under the umbrella of Polkadot-SDK. 

[^1]: See this reference about the exact position of substrate within polkadot-sdk. 

This has manifested itself in a few places worthy of noting: 
- `substrate.io`, Substrate's branding website, and `docs.substrate.io`, substrate's documentation website both have warning banners about this transition, and are intended to be fully moved to `polkadot.com/sdk` and `docs.polkadot.com` respectively, further centralizing the resources for Polkadot developers. 
- The main substrate template, formerly known as `substrate-node-template` is now called `polkadot-sdk-solochain-template`, emphasizing that this is a *solo-blockchain*, *powered by Substrate*, *part of Polkadot-SDK*, but not a Polkadot Parachain. This is further explained in [[Posts/Tech/Polkadot SDK 2024 Roundup#Templates\|#Templates]] section below. 

> [!tip] Substrate or Polkadot-SDK
> While some discussion has happened around it, the Polkadot community has not decided to fully stop using the word/brand Substrate. To name one example, conferences like Sub0 are curated around technological interoperability of Polkadot with the rest of the blockchain space, and Substrate is a key part of this narrative. 
> 
> That being said, I personally prefer to always prefer to use the phrase "*Substrate, part of Polkadot-SDK*" to appeal to both of our goals. This is also aligned with the Wish For Change Proposal TODO, emphasizing the use of the work "Polkadot" in related technologies. 

> [!info]- `polkadot-sdk` is HUGE
> TODO: some stats on `cloc` of `polkadot-sdk`. 

So, to summarize, Substrate is a part of Polkadot-SDK now, and as a technology framework, remains as-is. It has served builders within and outside of Polkadot, and continues to do so, with only a slight change in the name. 

With this intro setting the foundation of our history thus far, let's look at some of the most major improvements to `polkadot-sdk` that have landed in 2024. These updates can be categorized into: 
- New documentation: [[Posts/Tech/Polkadot SDK 2024 Roundup#docs.polkadot.com\|#docs.polkadot.com]] and [[Posts/Tech/Polkadot SDK 2024 Roundup#docs.rs\|#docs.rs]] 
- Improving your life in `Cargo.toml`: [[Posts/Tech/Polkadot SDK 2024 Roundup#[Stable](https //forum.polkadot.network/t/stabilizing-polkadot/7175) Releases\| Stable Releases]] and [[Posts/Tech/Polkadot SDK 2024 Roundup#☂️ Umbrella Crates\|#☂️ Umbrella Crates]]
- Improving your life in `lib.rs`: Also in [[Posts/Tech/Polkadot SDK 2024 Roundup#☂️ Umbrella Crates\|#☂️ Umbrella Crates]]
- Improving your life in managing node binaries: [[Posts/Tech/Polkadot SDK 2024 Roundup#polkadot-omni-node\|#polkadot-omni-node]]
- A note on [[Posts/Tech/Polkadot SDK 2024 Roundup#Templates\|#Templates]] 
- With a final reflection on role of `polkadot-sdk`, Parachains and Solochains in light of [[Talks/2024/Plaza Polkadot Hub - OpenGiuld Community Call\| Polkadot Hub and Solidity Smart Contracts]]. 
- [[Posts/Tech/Polkadot SDK 2024 Roundup#Work In Progress™️\|#Work In Progress™️]]: A note on the progress of each item, clarifying what stage of maturity they are at. 

## docs.polkadot.com

Little needs to be added here by me, as the [recent article in Polkadot.com says it all](https://polkadot.com/blog/polkadot-dev-docs-hub): After a few years of scattered documentation (which admittedly was partly the consequence of transition from `substrate` to `polkadot-sdk`), Polkadot now has a brand new documentation portal, hosted right at the official website, which also covers numerous `polkadot-sdk` products, such as launching your own Parachain. 

![Screenshot 2025-01-06 at 09.39.26.png](/img/user/resources/Screenshot%202025-01-06%20at%2009.39.26.png)

`docs.polkadot.com` has only seen its initial release in December 2024, so a lot of further improvements are expected to land in 2025. That being said, we can confidently assert: **`docs.polkadot.com` will be the single source of truth for documentation around Polkadot going forward, and all new features will be documented here.**
## [Stable](https://forum.polkadot.network/t/stabilizing-polkadot/7175) Releases

![Screenshot 2024-11-08 at 03.01.45.png](/img/user/resources/Screenshot%202024-11-08%20at%2003.01.45.png)

Some of us were around for long enough to remember the early days where building on Substrate entailed using `git` dependencies in `Cargo.toml`[^5]. 

A bit later, polkadot-sdk crates were being published to `crates.io`, yet without proper semantic versioning and with a system that I like to call *YOLO-MAJOR-BUMP-EVERYTHING*. This meant that updating one dependency always entailed updating all dependencies, and was a particularly good experience for developers either. 

Those days are well passed us now, thanks to the *stable* and *semver-aware* release schedule of (everything in) [`polkadot-sdk`](https://github.com/paritytech/polkadot-sdk). 

Today, all crates in `polkadot-sdk` get a new release every quarter (named `stable-YYYYMM`, for example the last one being `stable-202412`), all crate versions are updated based on exact changes that have happened since the last release[^6], and each stable release will receive bug and security fixes for a **full year**. 

The emergent benefits of this can be broken down into:
- At any given `stable-YYYYMM` release, you are free to avoid dealing with upgrades for a maximum of one year. Further updates might mean missing out on security fixes. 
- You will have more freedom in mixing and matching different high level crates at different versions, such as FRAME Pallets.

[^5]: This was mainly due the fast development pace of Substrate and Polkadot SDK, and the sheer size of the repository, making it exceedingly difficult to have stable releases. 
[^6]: Those who contribute to `polkadot-sdk` via PRs are asked to provide a `prdoc` that encapsulates all changes to crates and respective version bumps, example. 

To learn more about the release process, see [`RELEASE.md`](https://github.com/paritytech/polkadot-sdk/blob/master/docs/RELEASE.md), and the [paritytech/release-registry](https://github.com/paritytech/release-registry/).
## ☂️ Umbrella Crates 
Today, Polkadot-SDK, when not used with umbrella crates, is an aggregate of more than 500 crates. When starting with any of our templates, one typically would work with 80 crates to maintain the node software, and around 50 crates to maintain their runtime and a set of custom pallets[^7]. This degree of modularity is useful for power user, yet a hinderance to new joiners. Moreover, dealing with a larger number of crates also means more complicated dependency upgrades, as noted above. 
[^7]: Numbers are estimated based on an old commit of the polkadot-sdk-parachain-template's [node](https://github.com/paritytech/polkadot-sdk-parachain-template/blob/ecaf71deeb81418b80c69b7a0bf8ce19ff624a76/node/Cargo.toml#L17-L110) and [runtime](https://github.com/paritytech/polkadot-sdk-parachain-template/blob/ecaf71deeb81418b80c69b7a0bf8ce19ff624a76/runtime/Cargo.toml#L20-L77) `Cargo.toml`. 

In 2024, Polkadot-SDK saw two new crates which we like to call umbrella crates: 
1. `polkadot-sdk`
2. `polkadot-sdk-frame`

These crates are crafted to abstract away the immense size and modularity of Polkadot-SDK away from new joiners, in return for less control over exact versions. Let's see how each of them work one by one. 
### [`polkadot-sdk`](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/reference_docs/umbrella_crate/index.html)
This is the umbrella crate that is mainly meant to simplify your `Cargo.toml`. Both in the `node` and  `runtime` component, instead of dealing with all the low level `sc-*` and `sp-*` crates, you can use the single `polkadot-sdk` crate. This crate will then automatically pull all of the relevant dependencies based on the feature flags. 

<div style="overflow:hidden;margin-left:auto;margin-right:auto;border-radius:10px;width:100%;max-width:1190px;position:relative"><div style="width:100%;padding-bottom:60.75630252100841%"></div><iframe width="1190" height="723" title="Simplifying `Cargo.toml`" src="https://snappify.com/embed/3c06e53b-712d-4ba9-ab81-8c403956dbbe?responsive=1&p=1&b=1" allow="clipboard-write" allowfullscreen="" loading="lazy" style="background:linear-gradient(120deg,#f6d365ff,#fda085ff);position:absolute;left:0;top:0;width:100%" frameborder="0"></iframe></div>

### [`polkadot-sdk-frame`](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_frame/index.html)
This is the umbrella crate that is mainly meant to simplify your `.rs` files within FRAME pallets and runtimes. It is a wrapper around all of the common type, trait and functions that are often used within a typical FRAME pallet. 


## [polkadot-omni-node](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/reference_docs/omni_node/index.html)
Taking a step further in the same direction, another realization is that most parachain teams prefer to [not even maintain their node, as they do not customize anything in particular with it](https://forum.polkadot.network/t/polkadot-parachain-omni-node-gathering-ideas-and-feedback/7823). This is where `polkadot-omni-node` steps in: a single binary, now available as a part of `stable-202412` for both Linux and Mac, that can run the runtime of most parachain. 

This essentially allows a parachain team to reduce their code maintenance footprint into just maintaining a `runtime` template, the output of which would be a `runtime.wasm` or a `chainspec.json` file, which can be fed into `polkadot-omni-node` binary both for local development, and for production deployment. 
## [Templates](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/templates/index.html)
Speaking of templates, it is worth noting that `polkadot-sdk` now has a set of 3 un-opinionated templates, replacing the older and unmaintained ones. These templates are originally maintained in [`polkadot-sdk/templates`](https://github.com/paritytech/polkadot-sdk/tree/master/templates) folder, and are automatically synchronized to their corresponding external templates upon each `stable-YYYYMM` release:
- [paritytech/polkadot-sdk-minimal-template: The Minimal (Testing/Learning-Only) Template From Polkadot SDK](https://github.com/paritytech/polkadot-sdk-minimal-template)
- [paritytech/polkadot-sdk-solochain-template: The Solochain-Ready Template From Polkadot SDK](https://github.com/paritytech/polkadot-sdk-solochain-template)
- [paritytech/polkadot-sdk-parachain-template: The Parachain-Ready Template From Polkadot SDK](https://github.com/paritytech/polkadot-sdk-parachain-template)

## docs.rs
Moving on to more low level details, you may have noticed that a lot of the above topics, which are new concepts, are backed by links to Rust's API documentation toolkit, `docs.rs`. Throughout 2024, we have identified that: 
- All of the high level documentation of Polkadot-SDK should be centralized in a single source, which ended up being [[Posts/Tech/Polkadot SDK 2024 Roundup#docs.polkadot.com\|#docs.polkadot.com]]
- Polkadot-SDK, like any other mature Rust framework, should maintain its own API documentation in docs.rs
[^8]: Not to mention they act as great learning material for LLMs.

These API docs are important, as they serve to sit a different audience compared to [[#`docs.polkadot.com`]]: They are the source of truth for day to day troubleshooting, and in the presence of an IDE, provide instant information that can be used by developers[^8]. 

One notable example of this is FRAME macros. Today, they all have extensive API documentation which you can access directly in your IDE, or from `docs.rs`:

TODO: image

All of the released docs are present in `docs.rs` ([e.g.](https://docs.rs/polkadot-sdk-frame/latest/polkadot_sdk_frame/)) with proper versioning in each `stable-YYYYMM`, and the master version is deployed on every commit to `polkadot-sdk` under parity [paritytech.github.io/polkadot-sdk/master/](https://paritytech.github.io/polkadot-sdk/master/). 

## ... And What About Smart Contracts???
All of the above is improvements to the original product of Polkadot-SDK, *the Parachain/Solochain*. While all of the above is a testimony to this product becoming simpler to build with, it is worth noting that Polkadot will soon have a brand new product, being developed under the project codename [Plaza/Hub](https://forum.polkadot.network/t/contracts-on-assethub-roadmap/9513), which will allow Solidity smart contracts to be directly deployed to Polkadot. 

The important point is that Solidity contracts will inevitably be simpler than building a Parachain, no matter what. This features is planned for deployment by Q22025 on Kusama, and by Q42025 on Polkadot. The preliminary documentation for the demo version on the Westend test network is available in [Intro | Contracts](https://contracts.polkadot.io/).
## Appendix

### Work In Progress™️

### Acknowledgment 
While I am the messenger of all of the above features, delivering the above is mainly the work of numerous other Parity engineers and Polkadot fellows. 
