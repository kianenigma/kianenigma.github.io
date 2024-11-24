---
{"dg-publish":true,"dg-permalink":"talks/frame-2024","permalink":"/talks/frame-2024/","created":"2024-11-06T17:33:56.750+00:00","updated":"2024-11-24T11:21:14.976+00:00"}
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
	max-height: 70vh; /* Limit image height to 70% of the viewport height */ 
	width: auto; /* Maintain aspect ratio */ 
	 border-bottom: 1px dashed rgba(0, 0, 0, 0.5);
	 border-radius: 50px;
	 padding: 20px;
}
</style>

## Polkadot SDK and FRAME

- in 2024
- blog.kianenigma.com/talks/frame-2024

Note: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/dEFaEgg8Em4?si=UVLzXUict6Lzo9KU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Stable + Meaningful Releases

--
## Past 
- `substrate`, `cumulus`, `polkadot` (which contained `xcm`)
- Git based dependency
- YOLO-major bump everything at all times. 

--
## Now 

![Screenshot 2024-11-08 at 03.01.45.png](/img/user/resources/Screenshot%202024-11-08%20at%2003.01.45.png)

--
## Now 

- `stableYYMM` 
	- Every 3 month, maintained for 1 year with a monthly patching schedule. 
	- PRs need to specify `major`/`minor`/`patch` on the crates they alter. 
	- No change? no bump 👆
- [paritytech/release-registry](https://github.com/paritytech/release-registry/)

---
## Getting Started

![Screenshot 2024-11-08 at 03.07.23.png](/img/user/resources/Screenshot%202024-11-08%20at%2003.07.23.png)

--
### Templates 
- Maintained by Parity as part of `polkadot-sdk`, always updated with our stable releases. 
	- [`polkadot-sdk-parachain-template`](https://github.com/paritytech/polkadot-sdk-parachain-template/)
	- [`polkadot-sdk-solochain-template`](https://github.com/paritytech/polkadot-sdk-solochain-template/)
	- [`polkadot-sdk-minimal-template`](https://github.com/paritytech/polkadot-sdk-minimal-template/)
	- All updated automatically after each `stableYYMM` release. 
	- Un-opinionated
- External opinionated templates also listed, open to more suggestions. 
	- PoP
	- OpenZeppelin

Notes: 
- [Make \`polkadot-sdk\` templates OMNI and GREAT again -- part 2 · Issue #5242 · paritytech/polkadot-sdk · GitHub](https://github.com/paritytech/polkadot-sdk/issues/5242)

---

- We notice a cunning simplification in the template's `Cargo.toml` for the runtime.. 🤔

--
## Umbrella Crates 

```toml[1-100|3-6]
[dependencies]
codec = { workspace = true }
scale-info = { workspace = true }
polkadot-sdk = { version = "x.y.z", features = [
	"pallet-balances", "pallet-sudo", "pallet-timestamp", "runtime"] 
}

[features]
default = ["std"]
std = [
	"codec/std",
	"scale-info/std",
	
	"polkadot-sdk/std",
]
```

--
## `polkadot-sdk` Crate

- Umbrella crate to declutter your `Cargo.toml`
- Less confusion with which version to use
	- And enablement of features like `std`, `runtime-benchmark`, `try-runtime`

--
## `polkadot-sdk` Crate

- Will it kill my compile time? 
- Migration: `use polkadot_sdk::*`, the rest of your code remains as-is. 

Note: 
- Compile time: A bit, but not too bad. `feature = node`, `feature = runtime`
- [polkadot\_sdk\_docs::reference\_docs::umbrella\_crate - Rust](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/reference_docs/umbrella_crate/index.html)

--
- Then, if we look at the `runtime/lib.rs`, we also notice less clutter 🤔
--
## `polkadot-sdk-frame` Crate

```rust[1-100|6-100]
#![cfg_attr(not(feature = "std"), no_std)]

extern crate alloc;
use alloc::{vec, vec::Vec};

use polkadot_sdk::{polkadot_sdk_frame as frame, *};
use frame::{
	prelude::*,
	runtime::{apis, prelude::*},
};
```

--
## `polkadot-sdk-frame` Crate

- `polkadot-sdk` simplifies your `Cargo.toml`
- `polkadot-sdk-frame` simplifies your runtime and pallet `lib.rs` by providing sensible preludes. 

Note:
[polkadot\_sdk\_frame - Rust](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_frame/index.html)
[Fetching Title#nysy](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/index.html)


--

## Past (`substrate-node-template`)

--
 ![Screenshot 2024-11-08 at 03.50.38.png](/img/user/resources/Screenshot%202024-11-08%20at%2003.50.38.png)
--

![Screenshot 2024-11-08 at 03.51.50.png](/img/user/resources/Screenshot%202024-11-08%20at%2003.51.50.png)

---
## API Documentation 
- Simple, underrated, important enabler.
- Fundamental types and macros now all have API documentation, with correct and extensive examples
	- `pallet::call`, `pallet::storage`

--

![Screenshot 2024-11-08 at 03.56.40.png](/img/user/resources/Screenshot%202024-11-08%20at%2003.56.40.png)

--

![Screenshot 2024-11-08 at 04.03.39.png](/img/user/resources/Screenshot%202024-11-08%20at%2004.03.39.png)

Note: 
- [frame\_support::pallet\_macros - Rust](https://paritytech.github.io/polkadot-sdk/master/frame_support/pallet_macros/index.html)
- [storage in frame\_support::pallet\_macros - Rust](https://paritytech.github.io/polkadot-sdk/master/frame_support/pallet_macros/attr.storage.html)
--
## API Documentation: 
- all released crates: `docs.rs`
- master: https://paritytech.github.io/polkadot-sdk/
	- ⚠️ One doc-only crate cannot yet be published and is only visible in the latter. 

Note: 
- [polkadot\_sdk\_docs - Rust](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/index.html)

--

## API Documentation: 
- These docs are tightly integrated with polkadot-sdk
- THEY CANNOT GET OUTDATED!

---

## Reflection 

All of this, *releases*, *stable* and *well-documented API*, is to say `polkadot-sdk` is a **step closer to a mature mono-repo**.

> and we shall keep it that way. 

---
## FRAME Updates 
- Easier getting started: [`dev_mode`](https://paritytech.github.io/polkadot-sdk/master/frame_support/attr.pallet.html#dev-mode-palletdev_mode)
- Easier test setup: [`[config(with_default)]`](https://paritytech.github.io/polkadot-sdk/master/frame_support/pallet_macros/attr.config.html#optional-with_default) and [`#[derive_impl()]`](https://paritytech.github.io/polkadot-sdk/master/frame_support/attr.derive_impl.html)
- Syntax: [`#[runtime]`](https://paritytech.github.io/polkadot-sdk/master/frame_support/attr.runtime.html) macro
- Advanced: [`#[pallet::task]`](https://paritytech.github.io/polkadot-sdk/master/frame_support/pallet_macros/attr.tasks_experimental.html)
- Advanced: [`#[pallet::feeless_if]`](https://paritytech.github.io/polkadot-sdk/master/frame_support/pallet_macros/attr.feeless_if.html)
- Advanced: [`#[pallet::view_function]`](https://github.com/paritytech/polkadot-sdk/pull/4722) Soon™️

All of this is opt-in. 

--

## Before 

```rust
impl frame_system::Config for Test {
	type BaseCallFilter = ();
	type BlockWeights = ();
	type BlockLength = ();
	type DbWeight = ();
	type RuntimeOrigin = RuntimeOrigin;
	type RuntimeCall = RuntimeCall;
	type Nonce = u64;
	type Block = Block;
	type Hash = sp_core::H256;
	type Hashing = sp_runtime::traits::BlakeTwo256;
	type AccountId = AccountId;
	type Lookup = IdentityLookup<Self::AccountId>;
	type RuntimeEvent = RuntimeEvent;
	type Version = ();
	type PalletInfo = PalletInfo;
	type AccountData = ();
	type OnNewAccount = ();
	type OnKilledAccount = ();
	type SystemWeightInfo = ();
	type SS58Prefix = ();
	type OnSetCode = ();
	type MaxConsumers = ConstU32<16>;
}
```

--

## After 

```rust 
#[derive_impl(frame_system::config_preludes::TestDefaultConfig)]
impl frame_system::Config for Test {
	type Block = frame_system::mocking::MockBlock<Test>;
}
```

Or 

```rust
#[derive_impl(frame_system::config_preludes::TestDefaultConfig)]
impl frame_system::Config for Test {
	type Block = frame_system::mocking::MockBlock<Test>;
	type AccountData = pallet_balances::AccountData<u64>;
}
```

---
## Node 

- How cool would it be to download a node that could run any wasm runtime? 
	- No need to maintain it, update it, etc.
	- No need to compile it 🫠

--
## Omni Node 
- Capable of running (most) parachains, and a local dev chain.
- [Early docs](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/reference_docs/omni_node/index.html)
- First iteration will be released with `stable2412`

---
## Closing Remarks 

- A lot of what I have said are initiatives that need contributors to push through the finish line! 
	- Mentor-able, tip-able issues in the speaker notes
- Developing a blockchain with Polkadot-SDK has gotten even simpler now, but..
	- Contracts will always be easier!

Note: 

- All good-first issues: [Issues · paritytech/polkadot-sdk · GitHub](https://github.com/paritytech/polkadot-sdk/issues?q=is:issue+is:open+label:C2-good-first-issue)
- All mentor issues: [Issues · paritytech/polkadot-sdk · GitHub](https://github.com/paritytech/polkadot-sdk/issues?q=is:issue+is:open+label:C1-mentor)
