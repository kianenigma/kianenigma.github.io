---
{"dg-publish":true,"dg-permalink":"posts/tech/polkadot-sdk-2024","permalink":"/posts/tech/polkadot-sdk-2024/","hide":true,"created":"2024-11-22T21:43:04.000+00:00","updated":"2025-01-03T17:22:13.757+00:00"}
---


As we close the year 2024, and we have seen great roundup articles from the Polkadot ecosystem, I would like to have the honor to present some of the great work that has been done by the maintainers of `polkadot-sdk` in 2024. Other noteworthy roundups: 
- Polkadot roundup by Gavin Wood
- Polkadot data roundup by DotLake

> [!info] Summary 
> This is a written superset of what I have presented in Sub0 Reset Bangkok in November 2024. [[Talks/2024/Polkadot-SDK FRAME @ 2024\|Polkadot-SDK FRAME @ 2024]]

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
### `polkadot-sdk` 
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

So, to summarize, Substrate is a part of Polakdot SDK now, and as a technology framework, remains as-is. It has served builders within and outside of Polkadot, and continues to do so, with only a slight change in the name. 

With this intro setting the foundation of our history thus far, let's look at some of the most major improvements to `polkadot-sdk` that have landed in 2024. These updates can be categorized into: 
- New documentation: [[#`docs.polkadot.com`]] and [[#`docs.rs`]] 
- Improving your life in `Cargo.toml`: [[#[`stable`](https //forum.polkadot.network/t/stabilizing-polkadot/7175) Releases| Stable Releases]] and [[Posts/Tech/Polkadot SDK 2024 Roundup#☂️ Umbrella Crates\|#☂️ Umbrella Crates]]
- Improving your life in `lib.rs`: Also in [[Posts/Tech/Polkadot SDK 2024 Roundup#☂️ Umbrella Crates\|#☂️ Umbrella Crates]]
- Improving your life in managing node binaries: [[#`polkadot-omni-node`]]
- Misc: [[Posts/Tech/Polkadot SDK 2024 Roundup#Templates\|#Templates]] and [[Posts/Tech/Polkadot SDK 2024 Roundup#Repository Cleanup\|#Repository Cleanup]]
- With a final reflection on role of `polkadot-sdk`, Parachains and Solochains in light of [[Talks/2024/Plaza Polkadot Hub - OpenGiuld Global Community Call\| Polkadot Hub and Solidity Smart Contracts]]. 

## `docs.polkadot.com`

Little needs to be added here by me, as the recent article in Polkadot.com says it all: After a few years of scattered documentation (which admittedly was partly the consequence of transition from `substrate` to `polkadot-sdk`), Polkadot now has a brand new documentation portal, hosted right at the official website, which also covers numerous `polkadot-sdk` products, such as launching your own Parachain. 

`docs.polkadot.com` has only seen its initial release in December 2024, so a lot of further improvements are expected to land in 2025. That being said, we can confidently assert: **`docs.polkadot.com` will be the single source of truth for documentation around Polkadot going forward, and all new features will be documented here.**
## [`stable`](https://forum.polkadot.network/t/stabilizing-polkadot/7175) Releases

Some of us were around for long enough to remember the early days where building on Substrate entailed using `git` dependencies in `Cargo.toml`[^5]. 

A bit later, polkadot-sdk crates were being published to `crates.io` yet without proper semantic versioning and with a system that I like to call YOLO-MAJOR-BUMP-EVERYTHING. This meant that updating one dependency always entailed updating all dependencies, and was a particularly good experience either. 

Those days are well passed us now, thanks to the *stable* and *semver-aware* release schedule of (everything in) `polakdot-sdk`. 

Today, all crates in `polkadot-sdk` get a new release every quarter (named `stable-YYYYMM`, for example the last one being `stable-202412`), all crate versions are updated based on exact changes that have happened since the last release[^6], and each stable release will receive bug and security fixes for a **full year**. 

The emergent benefits of this can be broken down into:
- At any given `stable-YYYYMM` release, you are free to avoid dealing with upgrades for a maximum of one year. Further updates might mean missing out on security fixes. 
- You will have more freedom in mixing and matching different high level crates at different versions, such as FRAME Pallets.

[^5]: This was mainly due the fast development pace of Substrate and Polkadot SDK, and the sheer size of the repository, making it exceedingly difficult to have stable releases. 
[^6]: Those who contribute to `polkadot-sdk` via PRs are asked to provide a `prdoc` that encapsulates all changes to crates and respective version bumps, example. 

TODO: image 

## ☂️ Umbrella Crates 

## `polkadot-omni-node`

## Templates

## `docs.rs`

## Repository Cleanup 

## ... And What About Smart Contracts???
## Appendix

###  `flite` A Demonstration of Power of Rust Generics

### Work In Progress™️
