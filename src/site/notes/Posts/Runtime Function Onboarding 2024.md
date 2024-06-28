---
{"dg-publish":true,"permalink":"/posts/runtime-function-onboarding-2024/","hide":true,"created":"2024-06-26T13:16:17.880+03:30","updated":"2024-06-28T11:41:20.837+03:30"}
---


- [[Posts/Runtime Function Onboarding 2024#👋🏻 Intro: Welcome to The Runtime Function\|👋🏻 Intro: Welcome to The Runtime Function]]
	- [[Posts/Runtime Function Onboarding 2024#👋🏻 Intro: Welcome to The Runtime Function\|💊 The Reality of What We Do]]
	- [[Posts/Runtime Function Onboarding 2024#👋🏻 Intro: Welcome to The Runtime Function\|📈 Function Portfolio]]
- [[Posts/Runtime Function Onboarding 2024#📡 Communication\|📡 Communication]]
	- [[Posts/Runtime Function Onboarding 2024#📡 Communication\|📞 Sync]]
	- [[Posts/Runtime Function Onboarding 2024#📡 Communication\|📧 Async]]
		- [[Posts/Runtime Function Onboarding 2024#📧 Async\|😱 Where/How-much to Write?]]
	- [[Posts/Runtime Function Onboarding 2024#📡 Communication\|🤪 Dumb Questions]]
- [[Posts/Runtime Function Onboarding 2024#🧑‍💻 Contributing\|🧑‍💻 Contributing]]
	- [[Posts/Runtime Function Onboarding 2024#🧑‍💻 Contributing\|🛣️ Road to Merging a PR]]
	- [[Posts/Runtime Function Onboarding 2024#🧑‍💻 Contributing\|🔙 After Merging]]
	- [[Posts/Runtime Function Onboarding 2024#🧑‍💻 Contributing\|🧐 Know Your API]]
	- [[Posts/Runtime Function Onboarding 2024#🧑‍💻 Contributing\|🧹 Be The Housemeister]]
- [[Posts/Runtime Function Onboarding 2024#🤓 Keeping Up\|🤓 Keeping Up]]
- [[Posts/Runtime Function Onboarding 2024#📍 Company\|📍 Company]]
	- [[Posts/Runtime Function Onboarding 2024#📍 Company\|🎭 Culture]]
	- [[Posts/Runtime Function Onboarding 2024#📍 Company\|🔬 Resources]]
- [[Posts/Runtime Function Onboarding 2024#💎 Appendix: Principles For Excellence\|💎 Appendix: Principles For Excellence]]
	- [[Posts/Runtime Function Onboarding 2024#💎 Appendix: Principles For Excellence\|Stability Over Chaos]]
	- [[Posts/Runtime Function Onboarding 2024#💎 Appendix: Principles For Excellence\|Information (de)Centralization and Longevity]]
	- [[Posts/Runtime Function Onboarding 2024#💎 Appendix: Principles For Excellence\|Domain Ownership]]
	- [[Posts/Runtime Function Onboarding 2024#💎 Appendix: Principles For Excellence\|Announce Early]]
	- [[Posts/Runtime Function Onboarding 2024#💎 Appendix: Principles For Excellence\|Don't Wait On Decisions]]
	- [[Posts/Runtime Function Onboarding 2024#💎 Appendix: Principles For Excellence\|Measuring Impact]]
	- [[Posts/Runtime Function Onboarding 2024#💎 Appendix: Principles For Excellence\|Liveness Above All]]
	- [[Posts/Runtime Function Onboarding 2024#💎 Appendix: Principles For Excellence\|Resilience Above All]]

## 👋🏻 Intro: Welcome to The Runtime Function

Welcome to Parity, welcome to the Runtime Function, arguably one of the most important teams within Parity and the Polkadot Ecosystem.

What do we do? We build everything that is needed for the _**Runtimes of the Polkadot ecosystem to exist**_. Remember, [the runtime](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/reference_docs/wasm_meta_protocol/index.html) is where the application logic of all of our blockchains live. The runtime function is at the moment divided into 3 teams:
1. **(Substrate +) FRAME + XCM**: Build and maintain the (mostly) un-opinionated frameworks/SDKs that allows us to build blockchains, runtimes and enable communication between them. All of the aforementioned are part of [`polkadot-sdk`](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/index.html). 
2. **Polkadot System Runtimes**: Then, we build applications with Substrate, FRAME and XCM. This includes: The runtime of the Polkadot and Kusama relay chain + all system-chains. The community builds Parachains with all the same tools. 
3. **Bridges**: Given its proximity to FRAME and XCM, the core developers working on trust-less bridges reside in the Runtime Function as well.

> [!info]- Note on Naming 
> In a lot of our communication, we refer to Relay Chain as **RC**, and System Chain as **SC**. Moreover, a lot of the system chains are called “_SomethingHub_”, which is often abbreviated as *_**H**_. For example, AssetHub is referred to as **AH**.

![Screenshot 2024-06-26 at 14.36.11.png](/img/user/resources/Screenshot%202024-06-26%20at%2014.36.11.png)
### 💊 The Reality of What We Do 
Working in the above implies two very important self-evident truths about the type of work we do:
* **We fly low:** The work we do is meant to interact with value-bearing, mission critical systems that are meant to survive the test of time. This implies:
	* Emphasis on testing. 
	* Demand and provide vigilant code review.
	* Nonetheless, mistakes happen, and it is okay. What is *not* okay is to *repeat* a mistake. We maintain a categorical zero-blame mentality, learn from mistakes, make sure it cannot happen again, write a public post mortem, and move on. 

> [!info]- An anecdote about breaking production code @kianenigma
> The main downtime of Polkadot is partially because of my code. Many collaborated to fix the issue, and we learned countless lessons about how to test our code, eventually leading to the creation of `try-runtime-*` set of tools, just to name one.  

![8hsucaxkn5gb1.jpg](/img/user/resources/8hsucaxkn5gb1.jpg)

* **We fly close to end-users/developers**: Most of what we write affects our two major stakeholders: developers (parachains, UIs, and more), and blockchain users. 
	* Always think about: user-facing code, vs. non-user facing code. 
	* Is my feature well documented? can someone else use/understand it? 
	* Is my feature a breaking change? 

We will repeatedly come back to these two points throughout this document. 

![8utsbt.jpg](/img/user/resources/8utsbt.jpg)
### 📈 Function Portfolio

Let’s take a moment and introduce you to a non-exhaustive list of great things that function is currently achieving, in the words of the maintainers themselves:

> [!tldr]- Stability
> Parity has a history of rug-pulling Polkadot builders. The [Stability](https://forum.polkadot.network/t/stabilizing-polkadot/7175) initiative is here to stop this.   By introducing stable releases ([New Release Process](https://github.com/paritytech/polkadot-sdk/blob/master/docs/RELEASE.md)), a no-code Parachain node ([Omni-node](https://forum.polkadot.network/t/polkadot-parachain-omni-node-gathering-ideas-and-feedback/7823)) and focusing generally more on improving existing features instead of adding new ones we are aiming for a smother experience for Polkadot builders.
> 
> Oliver, Liam and Kian

> [!tldr]- People Chain
> The people chain is the place where real world identities are brought onto the blockchain. In other parts of the system (and blockchain in general), a lot of emphasis is put on *anonymity*; you are an account that interacts with other accounts. The people chain is where you can showcase your real world identity by linking your Polkadot account with various off-chain accounts such as Twitter, Discord, GitHub, email and more. 
> 
> This bridges a gap between on-chain and off-chain knowledge and allows users to introduce information from the outside world and securely use it for various on chain activities.
> 
> George

> [!tldr]- Multi-Block Staking
>    Discover Polkadot's innovative validator election method using [NPoS](https://wiki.polkadot.network/docs/learn-phragmen). Dive deeper into our efforts to [scale the number of stakers](https://wiki.polkadot.network/docs/learn-nomination-pools) nominating on Polkadot. Join us as we [migrate staking functionalities](https://github.com/paritytech/polkadot-sdk/issues/491) from the relay chain to a system parachain.
> Ankan and Goncalo
> 

> [!tldr]- XCM v5
> [XCMv5](https://github.com/polkadot-fellows/xcm-format/issues/60) aims to improve developer and user experience for all cross-chain interactions. Its main features are seamless fee integration, facilities for claiming trapped assets and helper instructions for easier cross-chain transfers. This is the latest evolution of the XCM standard via the open RFC process.
> Cisco

> [!tldr]- Coretime Broker Pallet
> This year Kusama and Polkadot transition away from the slot auction model to Agile Coretime. The Coretime Chain is a marketplace where NFTs representing various configurations of blockspace can be bought, manipulated and allocated. Coretime (bulk and on-demand) is now the only way to validate workloads on Polkadot.  The broker pallet contains all the logic for the primary market for blockspace, upon which secondary markets can be built and is the main part of the coretime chain. The specification is contained within [RFC-1](https://polkadot-fellows.github.io/RFCs/approved/0001-agile-coretime.html) and [RFC-5](https://polkadot-fellows.github.io/RFCs/approved/0005-coretime-interface.html), and you can find out more in our [Coretime FAQs](https://polkadot-public.notion.site/Agile-Coretime-FAQ-c930796e8c884011adb1fa24ef22f77c#4044ec0996054c48b3f8dde0eaca4584).
> 
> Donal

## 📡 Communication 

### 📞 Sync 
- Weekly "Runtime Function Hangout"
    - Agenda curated collectively in calendar invite. If you'd like to encourage others to show up, put your item there. 
	- Communicate important decisions in the group chat for those who are not present. 
	- *Optional* in general. Join based on your workload, and the agenda. 
- 1-1 with your team lead. 

> [!tip] Getting To Know Your Teammates  
> Inspired by what Oliver did when he joined in early 2022, I highly encourage you to setup 1-1 intro calls with all other RF members in the first week or two. Get to know them, what they work on and so on! It will help you settle-in, and give you opportunity to also ask any random questions you have about FRAME, XCM, Polkadot, Parity and so on!
### 📧 Async 
- [Parity forum](https://forum.polkadot.network/) [Polkadot forum](https://forum.parity.io/).
    - Prefer accompanying Google docs for discussions that will need lots of revision.
- Github
	- Build a system around notifications, you are expected to reply to your @mentions. 
- Element
	- Everything under `Runtime Function` space. Explore sub-spaces and rooms accordingly 

> [!tip]- More on Element
> * You can always group a number of chats from different spaces (or no space in particular) into a private space, if you'd like to get more visibility 
> * Be mindful of joining too many rooms, if it prevents you from keeping up with notifications that actually matter. 
> * Consider using alternative clients, if it fits you better. 
> * Element supports a very simple to setup **RSS feed**, which can be useful to keep up with things. 
> * **Custom keyword notifications** in Matrix are very useful to keep you up to date with certain topics. 
> * More in the devops wiki. Ask questions in Element Helpdesk if need be. 

TODO: a sentence on why we use element to begin with. I cannot write this as I hate it and genuinely think we should not use it. 

#### 😱 Where/How-much to Write? 

A common question around async communication in chats is how loud you should be. For example, whether you should talk in big chats, as opposed to DM. 

We are a fairly small company. Prefer sharing things in broad element groups where most people can see then, rather than small chats with a handful of people. As an example, we have vibrant chats such as: 
1. Engineering General 
2. FRAME Public 
3. XCM Public 
 
That are used for various topics and Q&As, and using them is highly recommended. 

> .. But what if I am too loud, what it I annoy someone, or ask a stupid question? 

Short answer: **It is not your problem**.

In an async environment, it is much easier to be under-heard and under-share, then the opposite. Therefore, it is safer to optimize for over-sharing than opposite.

If your over-sharing and are actively annoying anyone, it is _their_ responsibly to give you that feedback, and you should adapt if the feedback is reasonable. But if you are *silently* under-sharing, it is much harder to identify it as an issue and recover from it. I suggest always preferring to share something where the _**most broad audience can see it**_, unless you conclude otherwise for some specific reason.

> [!example] Async Communication 101
> * Adjust your workflow (as much as possible) such that you are ***NOT*** blocked by other's not replying to you immediately. 
> * Be concise and to-the-point in conveying your message. [The "no hello" is a good example 😉](https://nohello.net/en/). 
> * Prefer sharing things *where most poeple can see it*. [[Posts/Runtime Function Onboarding 2024#Information Centralization\|#Information Centralization]] 
> * Prefer sharing things where it has the most longevity. [[Posts/Runtime Function Onboarding 2024#Information Longevity\|#Information Longevity]]
### 🤪 Dumb Questions 

Parity has an interesting attitude towards this. We have a room specifically called "*Parity Dumb Questions*", to remind you that there is no such thing as a dumb question[^2]. Let's be honest: Web3 is a super complicated space. Only a few are knowledgeable enough to have a high level understanding of *everything*. Most of us are new in this space. Moreover, this space, and Parity, move really fast. What you know today might need an update in 3 months. 

So, in short: There is a million things to (re)learn, and asking those who know better than you is the most wise thing you can do. As the saying goes: "*The only dumb question is the one you don't ask*". 

But, there is a few notes that you should keep in mind about questions: 

> [!info] Asking Questions 101
> * First, while we assert there is no such thing as dumb questions, there is such a thing as a "lazy question". That is, when you are told to "do `x`" by person `A`, and then you go to person `B` and as "hey, how do I do `x`?". A good question should indicate that you have put some effort into the matter yourself. 
> * Avoid [the xy problem](https://xyproblem.info/).
> * See [[Posts/Runtime Function Onboarding 2024#Information Longevity\|#Information Longevity]] and [[Posts/Runtime Function Onboarding 2024#Information Centralization\|#Information Centralization]]. In short, once you have asked a question, and have received your answer, think about how you can make this knowledge accessible to more people, and for a long time.

## 🧑‍💻 Contributing

> [!info] Public Contributor ~ Parity Employee
> The information in this section is kept at minimum, as majority of what you have to know to contribute inside of Parity also applies to *external contributors*, and is already documented for them. Whatever is not documented, should be added to the same public medium and NOT be exclusive to a private Parity onboarding note. 
### 🛣️ Road to Merging a PR

For your contribution, consider reading everything in our [`docs/contributing`](https://github.com/paritytech/polkadot-sdk/tree/master/docs/contributor) folder. 

What we expect further from you, as an internal developer, is to be *even more conscious* of writing high quality PR description, and expecting it from others. This is directly a function of what we mentioned above in [[Posts/Runtime Function Onboarding 2024#💊 The Reality of What We Do\|#💊 The Reality of What We Do]]: Flying close to users. 

Our changes often affect many (if not hundreds) of down-stream projects. It is therefore important that you precisely explain and highlight any breaking changes in your **PR description**. Try to provide explanation for down-stream teams how this change would affect them and how this can be integrated into their project. Place notes that are only relevant to PR review in a separate `hackmd`. 

Lastly, remember that while we are all obliged to spend a part of our time reviewing each others' code, we are all busy. Opening a PR, yet silently letting it sit stale for a month is your shortcoming, not others'. As noted above, be vocal in making sure you get enough feedback to get your PR merged in time. When asked for, we often review very quickly. 

![Screenshot from 2023-03-16 15-40-07.png](/img/user/resources/Screenshot%20from%202023-03-16%2015-40-07.png)

> [!info] Release and Audit Rooms
> Two critical pieces of information about contributing to `polkadot-sdk` that is gated within Parity is being present in the release and audit Element rooms. These rooms ensure you are up to date with the latest of the two respectively, and can plan accordingly. Ideally, these processes should also move towards being as public as possible. 

> [!tip] Editor Tips 
> Be sure to read [this](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/reference_docs/development_environment_advice/index.html) (and [this](https://github.com/paritytech/devops/wiki/Developer-Resources%3A-Using-the-build-host-&-cargo-remote) private) great guide about what editor setups we often use. 
### 🔙 After Merging

Well, your PR is finally merged. Are we done? More often than not, no. 

Yet again, a lot of this goes back to the dual realities ([[Posts/Runtime Function Onboarding 2024#💊 The Reality of What We Do\|#💊 The Reality of What We Do]]) of our team: Flying low and flying close to end users. This implies that, before kissing and saying goodbye to a merged PR, you need to reflect on the following: 

1. **Test-network Runtime Upgrade**: Fairly soon after your PR is merged, it will be enacted on our test-networks, most notably Westend. This is your best opportunity to do your final round of (live) testing. Ask yourself: Is everything alright in Westend? How can I test my feature further? 
2. **RC/SC Runtime Upgrade**: Days, weeks or months after your PR is merged, it might finally land in in the RC or one of the SCs[^1]. This is another milestone for testing: Did everything go smoothly? 
3. **Developer Community Impact**.
    1. Did any UIs break because of your feature? could we have communicated better with them? 
    2. Are any new documentation pages needed? (easier to forget) Are any of the existing ones outdated now? Maybe one of the most visited StackExchange questions needs being updated? 
    3. Was your PR description good for downstream teams to be able to adopt the feature?
4. **Monitoring and Data**
	1. TODO:
	2. Devops Wiki 
	3. Transparency into when Westend is updated. 
	4. Access to gitlab

### 🧐 Know Your API 

As a final example to cement [[Posts/Runtime Function Onboarding 2024#💊 The Reality of What We Do\|#💊 The Reality of What We Do]], let's consider the difference between two features, in order the highlight how important it is for you to be able to answer one question: 

> Is my code end-user-facing or not?

Consider: 
1. An optimization made to the networking of the parachains protocol. This will improve the performance of parachain networking by 10%, without any action needed by anyone, as soon as the crate is released and updated. In such cases, be my guest, and ignore the majority of this rant. Your work is not directly affecting end-users. You can still demonstrate competence by adhering to everything said here, but is is less critical
2. Contrary, consider the following: 
	- Working on a new major revision of any of the `FRAME` modules used by Polkadot end-users, such as `staking`, `proxy` or `multisig`. 
	- Similarly, working on any feature that is expected to be integrated into wallets, exchanges, or other 3rd party software.
	- Changed an API in FRAME or Substrate Node that might make existing code that compiles no longer compile
		- Even more pesky, existing correct code might still compile, but be incorrect if some upgrade path is not followed.

Our PRDoc system's audience section is a good framework to help you think about the final audience of your code.  

Moreover, new release process, with its emphasis on semantic versioning, will force you to think about this to a high extent, but it does not encapsulate the full magnitude of the above. For example, in your PR, you might be causing major bump to many crates, but only one of the crates is something that actually matters to the main audience, noted in the PRDoc. 

### 🧹 Be The Housemeister

TODO: Clean issues, triage them, put the right label etc. 
## 🤓 Keeping Up 

In reality, you are joining the Polkadot ecosystem, not just Parity. And there is a lot happening in Polkadot! Some links for you to explore based on your interest in various topics: 

- Governance: [Polkassembly](https://kusama.polkassembly.io/), [SubSquare](https://kusama.subsquare.io/), AAG.
- The Kusamarian, SpaceMonkey
- Community Element Chats: 
	- [Watercooler](https://matrix.to/#/#polkadot-watercooler:web3.foundation), [Direction](https://matrix.to/#/#polkadot-direction:matrix.parity.io), and [Validator Lounge](https://matrix.to/#/#polkadotvalidatorlounge:web3.foundation) if you want more exposure
    - And [Kusama Watercooler](https://matrix.to/#/#kusamawatercooler:web3.foundation), [Direction](https://matrix.to/#/#kusama:matrix.parity.io).
- Newsletters:  [DotLeap](https://newsletter.dotleap.com/?triedSigningIn=true). Bill Laboon's Daily Digest. 
- Polkadot Fellowship
	- Public Element Room 1, Room 2. 
    - [Github org, including manifesto.](https://github.com/polkadot-fellows/)
- **Rust**: [This week in Rust](https://this-week-in-rust.org/), [Rust in Blockchain](https://rustinblockchain.org/).
- I personally like to follow these for general crypto stuff:
    - [Decrypt](https://decrypt.co/). 
    - Podcast: [Defiant](https://thedefiant.io/podcasts), Bankless and [Unchained](https://www.youtube.com/c/unchainedpodcast) Podcast.
    - [CoinBureau’s weekly crypto](https://www.coinbureau.com/videos/) update videos every Monday (yes, but it is good to know what the _mainstream_ thinks..)
    - Bloomberg Crypto reports, [Matt Levine Money Stuff](https://newsletterhunt.com/newsletters/money-stuff-by-matt-levine).
- [Official Polkadot Ecosystem Room](https://matrix.to/#/!ysLGVMIyuKKIpwjhAT:matrix.parity.io?via=parity.io&via=matrix.org&via=matrix.parity.io) in Element — a fairly active chat with many parachain teams.

## 📍 Company 
A few high level notes about the company, and not just the RF. 
### 🎭 Culture 
You will learn about the Parity culture in your onboarding, but here’s some old-but-still-relevant material from former culture decks. 

First, here’s a little screenshot of an all-hands talk about vision of Parity in 2019 which I still stand by. You can find the full talk [here](https://drive.google.com/file/d/1yzS_ZoVdyt370hhuHwJaHelftKEH_6Yl/view?usp=sharing) (most of it is not super relevant anymore).

![Screenshot 2024-06-24 at 19.12.10.png](/img/user/resources/Screenshot%202024-06-24%20at%2019.12.10.png)
A [culture talk from Gav](https://drive.google.com/file/d/1owfjrBve9nLPy6TwZyA4qygDCwEwxlgY/view?usp=sharing) in the 2022 Tenerife retreat. This snippet of this talk is among my favorites.

![[GavExcellence.mp4|center]]
You can find the deck itself [here](https://docs.google.com/presentation/d/15-lL1xKAVMt_50X2ri7hsEhU3Z0he04K017mZCIeRZI/edit#slide=id.g26b31d0a78ca97e7_10). If I wanted to name one slide from it that you should think about the most, it would be:

![Screenshot 2024-06-24 at 19.14.33.png](/img/user/resources/Screenshot%202024-06-24%20at%2019.14.33.png)

The majority of the efforts of your team lead, and this document is to help you toward achieving the status mentioned in the above sentence.
### 🔬 Resources 
- All Hands Archive 
- Handbook
- Parity XP Course 
- [Internal Comms in Forum](https://forum.parity.io/c/parity-comms/internal-comms/106)

## 💎 Appendix: Principles For Excellence 

These are things that I believe will help you be excellent, and help others be excellent as well. I also believe most of these are properties of L5+ engineers. 
### Stability Over Chaos 
A theme in Parity, Polkadot in 2024 and beyond has been [Stability](https://forum.polkadot.network/t/stabilizing-polkadot/7175/19?u=xlc). We used to say: "*We write code faster than we can write about it*". Parity has always been a company known for engineering excellence, at the cost of lots of breaking changes. This all used to be cool, but not anymore. The best number of lines of new code to solve a new issue is 0. 
### Information (de)Centralization and Longevity
As noted in [[Posts/Runtime Function Onboarding 2024#🤪 Dumb Questions\|#🤪 Dumb Questions]], we acknowledge that there is a lot to be learned for all of us in this space. The underlying issue is that there is a lot of **information centralization**. Veterans in the space know a lot of things, yet the path for new joiners to learn the same is unclear and bumpy, and the constant evolvement of the space does not help.  

***The rule is: Once you have learned something, think about how you can make sure it is accessible to more people, and for a long time.*** 

The best example of this is something that I personally do: Policing people to move good conversations and Q&As from Element to more permanent places. Every time I see a good technical question answered in Element, I do: 
1. If this question is already asked in StackExchange, then I don't need to rewrite the answer. I will paste a link and move on. 
2. If not asked, and I know the answer, I don't answer the question in chat, but instead ask the person to ask it in StackExchange, and only then answer. 

This is merely one example, but the mentality it demonstrates is applicable to many situations. "*If you had to spend 1h answering a question, how can you make sure no one else has to endure the same*"?

> [!info]- Another Great Example
> In H12024, Liam was one of the FRAME developers working on the release process. There entirety of the acceleration department had constant questions about the status of this work, and how it would affect them. 
> A good behavior in this case would be for those who have questions to ask them publicly, in a large chat room, and for Liam to answer in the same place. 
> A superb behavior is that Liam recorded a video answering FAQs and updates, accompanied by a forum post, and shared it. 

### Domain Ownership 
Take radical and proactive ownership of what you have built, and be proud of it. We highly encourage engineers to grow a vision for what they are working on, and dictate its future. This is great, and it gives you a lot of flexibility and freedom. 

But, freedom always comes with responsibility. What are those: 

- As the owner of a domain, both internally and externally, you need to make yourself known as the owner, so that others can find you. 
- Follow your domain, and participate in conversations around it. For example, if you aspire to be the owner of a domain, you would try to create notifications to be informed about all activity around this topic in the Polkadot forum, SE and twitter, and participate accordingly. 

Proper off-boarding and handover is also an important aspect of ownership. We move companies, teams, or most often, put a stop to initiatives for various reasons. But what happens to the part of the project that is already out there? Should we bring it down? should we archive a repo? Prevent letting initiatives going stale.

Todo: note on choosing your battle
### Announce Early 
In tandem to the above, try and announce what you are working on early, and embrace feedback. When you start an initiative, announce the vision in the public (eg. Parity forum if internal, Polkadot otherwise), then link to an Element room if one exists where one can join for a more in depth discussion about the project. 
### Don't Wait On Decisions
Fail Fast. share your thoughts, what you think is the best answer and should happen, post in forum, if after `x` weeks no response comes, you execute.  
### Measuring Impact 
The impact of what we do, specifically for end-user facing work (as defined in [[Posts/Runtime Function Onboarding 2024#🧐 Know Your API\|#🧐 Know Your API]]), is not how many PRs we can merge into `polkadot-sdk` but rather how much our code is being user by end-users or developers. 
### Liveness Above All 
Parity is a collective contributing to Polkadot. Most of us are part of other collectives that contribute to Polkadot in other ways, such as ChaosDAO or the Polkadot fellowship. 

Making Polkadot successful is, one way or another, our main mission. Thereofre, ongoing bugs and existential issues that might arise should never be be discarded as "it is not the task I am working on, so not my problem". If something important comes up, it is everyone's task. 

### Resilience Above All 
TODO


--- 

Next Steps: 
- [ ] this is a good sign that we *need* an updated function roadmap + public page that introduces projects + members.
- [ ] What is our updated culture deck? should we make one? 

[^1]: This is usually done in two steps: first, a release made by the Polkadot fellowship, and a runtime upgrade being authorized by the community. Parity coordinates these operations, but does not have full control over them. 
[^2]: Because if all questions are dumb questions, then no questions are dumb questions. 