---
{"dg-publish":true,"permalink":"/posts/runtime-function-onboarding-2024/","hide":true,"created":"2024-06-26T11:46:17.880+02:00","updated":"2024-08-30T13:45:19.803+02:00"}
---

> [!info]- Collaboration 
> If you would like to collaborate on this article and/or leave feedback, consider opening a Pull Request [here](https://github.com/kianenigma/kianenigma.github.io/blob/main/src/site/notes/Posts/Runtime%20Function%20Onboarding%202024.md). 

## 👋🏻 Intro: Welcome to The Runtime Function

Welcome to Parity, welcome to the Runtime Function, arguably one of the most important teams within Parity and the Polkadot Ecosystem.

What do we do? We build everything that is needed for the _**Runtimes of the Polkadot ecosystem to exist**_. Remember, [the runtime](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/reference_docs/wasm_meta_protocol/index.html) is where the application logic of all of our blockchains live. The runtime function is at the moment divided into 3 teams:
1. **(Substrate[^3] +) FRAME + XCM**: Build and maintain the (mostly) un-opinionated frameworks/SDKs that allows us to build blockchains, runtimes and enable communication between them. All of the aforementioned are part of [`polkadot-sdk`](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/index.html). 
2. **Polkadot [System Runtimes](https://wiki.polkadot.network/docs/learn-system-chains)**: Then, we build applications with Substrate, FRAME and XCM. This includes: The runtime of the Polkadot and Kusama relay-chain, plus all system-chains. The community of Polkadot builds Parachains with all the same tools. 
3. **[Bridges](https://wiki.polkadot.network/docs/learn-bridges)**: Given its proximity to FRAME and XCM, the core developers working on trust-less bridges reside in the Runtime Function as well.

> [!info]- Note on Naming 
> In a lot of our communication, we refer to Relay Chain as **RC**, and System Chain as **SC**. Moreover, a lot of the system chains are called “_SomethingHub_”, which is often abbreviated as *_**H**_. For example, AssetHub is referred to as **AH**.

![Screenshot 2024-06-26 at 14.36.11.png](/img/user/resources/Screenshot%202024-06-26%20at%2014.36.11.png)
### 💊 The Reality of What We Do 
Working in the above implies two very important self-evident truths about the type of work we do:
1. *We fly low:** The work we do is meant to interact with value-bearing, mission critical systems that are meant to survive the test of time. This implies:
	* Emphasis on testing. 
	* Demand and provide vigilant code review.
	* Nonetheless, mistakes happen, and it is okay. What is *not* okay is to *repeat* a mistake. We maintain a categorical zero-blame mentality, learn from mistakes, make sure it cannot happen again, write a public post mortem, and move on. 

![8hsucaxkn5gb1.jpg](/img/user/resources/8hsucaxkn5gb1.jpg)

2. *We fly close to end-users/developers**: Most of what we write affects our two major stakeholders: developers (parachains, UIs, and more), and blockchain users. 
	* Always think about: user-facing code, vs. non-user facing code. 
	* Is my feature well documented? can someone else use/understand it? 
	* Is my feature a breaking change? 

![8vjgdz.jpg](/img/user/resources/8vjgdz.jpg)

We will repeatedly come back to these two points throughout this document. 

> [!info]- An anecdote about breaking production code @kianenigma
> The [main downtime of Polkadot](https://polkadot.network/blog/a-polkadot-postmortem-24-05-2021/) is partially because of my code. Many collaborated to fix the issue, and we learned countless lessons about how to test our code, eventually leading to the creation of [`try-runtime-*`](https://github.com/paritytech/try-runtime-cli) set of [tools](https://forum.polkadot.network/t/testing-complex-frame-pallets-discussion-tools/356), just to name one.  
### 📈 Function Portfolio

Let’s take a moment and introduce you to a non-exhaustive list of great things that function is currently working on, in the words of the maintainers themselves:

> [!tldr]- Stability
> Parity has a history of rug-pulling Polkadot builders with new technology one after the other 🙈 The [Stability](https://forum.polkadot.network/t/stabilizing-polkadot/7175) initiative is here to stop this. By introducing stable releases ([New Release Process](https://github.com/paritytech/polkadot-sdk/blob/master/docs/RELEASE.md)), a no-code Parachain node ([Omni-node](https://forum.polkadot.network/t/polkadot-parachain-omni-node-gathering-ideas-and-feedback/7823)) and focusing generally more on improving existing features instead of adding new ones we are aiming for a smother experience for Polkadot builders.
> 
> Oliver, Liam and Kian

> [!tldr]- XCM v5
> [XCMv5](https://github.com/polkadot-fellows/xcm-format/issues/60) aims to improve developer and user experience for all cross-chain interactions. Its main features are seamless fee integration, facilities for claiming trapped assets and helper instructions for easier cross-chain transfers. This is the latest evolution of the XCM standard via the open RFC process.
> 
> Cisco

> [!tldr]- Coretime Broker Pallet
> This year Kusama and Polkadot transition away from the slot auction model to Agile Coretime. The Coretime Chain is a marketplace where NFTs representing various configurations of blockspace can be bought, manipulated and allocated. Coretime (bulk and on-demand) is now the only way to validate workloads on Polkadot.  The broker pallet contains all the logic for the primary market for blockspace, upon which secondary markets can be built and is the main part of the coretime chain. The specification is contained within [RFC-1](https://polkadot-fellows.github.io/RFCs/approved/0001-agile-coretime.html) and [RFC-5](https://polkadot-fellows.github.io/RFCs/approved/0005-coretime-interface.html), and you can find out more in our [Coretime FAQs](https://polkadot-public.notion.site/Agile-Coretime-FAQ-c930796e8c884011adb1fa24ef22f77c#4044ec0996054c48b3f8dde0eaca4584).
> 
> Donal

> [!tldr]- People Chain
> The people chain is the place where real world identities are brought onto the blockchain. In other parts of the system (and blockchain in general), a lot of emphasis is put on *anonymity*; you are an account that interacts with other accounts. The people chain is where you can showcase your real world identity by linking your Polkadot account with various off-chain accounts such as Twitter, Discord, GitHub, email and more. 
> 
> This bridges a gap between on-chain and off-chain knowledge and allows users to introduce information from the outside world and securely use it for various on chain activities.
> 
> George

> [!tldr]- Multi-Block Staking
>    Discover Polkadot's innovative validator election method using [NPoS](https://wiki.polkadot.network/docs/learn-phragmen). Dive deeper into our efforts to [scale the number of stakers](https://wiki.polkadot.network/docs/learn-nomination-pools) nominating on Polkadot. Join us as we [migrate staking functionalities](https://github.com/paritytech/polkadot-sdk/issues/491) from the relay chain to a system parachain.
> 
> Ankan and Goncalo

## 📡 Communication 

### 📞 Sync 
- Weekly "Runtime Function Hangout" call.
    - Agenda curated collectively in calendar invite. If you'd like to encourage others to show up, put your item there. 
	- Communicate important decisions in the group chat for those who are not present. 
	- *Optional* in general. Join based on your workload, and the agenda. 
- 1-1 with your team lead. 

> [!tip] Getting To Know Your Teammates  
> Inspired by what Oliver did when he joined in early 2022, I highly encourage you to setup 1-1 intro calls with all other RF members in the first week or two. Get to know them, what they work on and so on! It will help you settle-in, and give you opportunity to also ask any random questions you have about FRAME, XCM, Polkadot, Parity and so on!
### 📧 Async 
- [Parity forum](https://forum.polkadot.network/) [Polkadot forum](https://forum.parity.io/).
    - Prefer accompanying Google Docs for discussions that will need lots of revision.
- GitHub
	- Build a system around notifications, you are expected to reply to your @mentions. 
- Element
	- Everything under `Runtime Function` space. Explore sub-spaces and rooms accordingly 

> [!info]- The Runtime Function Element Space 
> This is an example of who the spaces and sub-spaces in our Element space looks like. 
> ![Screenshot 2024-07-01 at 10.08.20.png](/img/user/resources/Screenshot%202024-07-01%20at%2010.08.20.png)

> [!tip]- More on Element
> * **Pro tip**: You can always group a number of chats from different spaces (or no space in particular) into a private space, if you'd like to group chats together and avoid the "Other Rooms" or "Favorites" to bloat.
> * Be mindful of joining too many rooms, if it prevents you from keeping up with notifications that actually matter. 
> * Consider using alternative Matrix clients, if it fits you better. 
> * Element supports a very simple to set up **RSS feed**, which can be useful to keep up with things. 
> * **Custom keyword notifications** in Element/Matrix are very useful to keep you up to date with certain topics that you feel responsible for. 
> * More in the [devops wiki](https://github.com/paritytech/product-engineering/tree/main/docs). Ask questions in Element/Devops Helpdesk if need be. 
> * [Doc](https://docs.google.com/document/d/1WTLx1k46g0WeB6Afp02XS682SUFbqJUVp4bKhXksYFo/edit#heading=h.v9anig8niu5f) for our last round of element revamp.

Why do we use element to begin with? 

> Privacy-preserving, semi-redundant due to connectivity with other homeservers (so even if ours goes down, people on other homeservers can still interact with the channels they're in). Interoperable (with other chat protocols, due to bridges), customizable/programmable and control over our data.
> 
> Erin
#### 😱 Where/How-much to Write? 

A common question around async communication in chats is how "loud" you should be. For example, whether you should talk in big chats, as opposed to DM. 

We are a fairly small company. Prefer sharing things in broad element groups where most people can see them, rather than small chats with a handful of people. As an example, we have vibrant chats such as: 
1. [Engineering General](https://matrix.to/#/#engineering-general:parity.io)
2. [FRAME Public](https://matrix.to/#/#frame:parity.io)
3. [XCM Public](https://matrix.to/#/#xcm:parity.io) 
4. [`polkadot-sdk-docs`](https://matrix.to/#/#documentation-team:parity.io)
 
That are used for various discussion topics, requesting reviews and Q&As, and using them is highly recommended.

> .. But what if I am too loud, what if I annoy someone, or ask a [[Posts/Runtime Function Onboarding 2024#🤪 Dumb Questions\| dumb question]]? 

Short answer: **It is not your problem**.

In an async environment, it is much easier to be under-heard and under-share, than the opposite. Therefore, it is safer to optimize for over-sharing, and only adjust if necessary.

If you're over-sharing and are actively annoying anyone, it is _their_ responsibly to give you that feedback, and you should adapt if the feedback is reasonable. But if you are *silently* under-sharing, it is much harder to identify it as an issue and recover from it. I suggest always preferring to share something where the _**most broad audience can see it**_, unless you conclude otherwise for some specific reason.

> [!example] Async Communication 101
> * Adjust your workflow (as much as possible) such that you are ***NOT*** blocked by other's not replying to you immediately. Explore a reasonable degree of multi-tasking. 
> * Be concise and to-the-point in conveying your message. [The "no hello" is a good example 😉](https://nohello.net/en/). 
> * Prefer sharing things *where most poeple can see it*. 
> * Prefer sharing things where it has the most longevity.
> 	* (See [[Posts/Runtime Function Onboarding 2024#Information (de)Centralization and Longevity\|Information (de)Centralization and Longevity]])
### 🤪 Dumb Questions 

Parity has an interesting attitude towards this. We have a room specifically called "*Parity Dumb Questions*", to remind you that there is no such thing as a dumb question[^2]. 

Let's be honest: Web3 is a complicated space, for both engineers and non-engineers. Only a few are knowledgeable enough to have a high level understanding of *everything*. Most of us are new in this space. Moreover, this space (and Parity) move really fast. What you know today might need an update in 6 months. 

So, in short: There are a million things to (re)learn, and asking those who know better than you is the wisest thing you can do. As the saying goes: "*The only dumb question is the one you don't ask*". 

But, there are a few notes that you should keep in mind about questions: 

> [!info] Asking Questions 101
> * First, while we assert there is no such thing as dumb questions, there is such a thing as a *lazy question*. That is, when you are told to "do `x`" by person `A`, and then you go to person `B` and as "hey, how do I do `x`?" This might be seen as a lazy question, and not so cool to do it often. A good question should indicate that you have put some effort into the matter yourself, and are now seeking validation of your progress. 
> * Avoid [the xy problem](https://xyproblem.info/).
> * See [[Posts/Runtime Function Onboarding 2024#Information (de)Centralization and Longevity\|Information (de)Centralization and Longevity]]. In short, once you have asked a question, and have received your answer, think about how you can make this knowledge accessible to more people, and for a long time.

## 🧑‍💻 Contributing

> [!info] Public Contributor ~ Parity Employee
> The information in this section is kept at minimum, as majority of what you have to know to contribute inside of Parity also applies to *external contributors*, and is already documented for them. Whatever is not documented, should be added to the same public medium and NOT be exclusive to a private Parity onboarding note. 
### 🛣️ Road to Merging a PR

For your contribution, consider reading everything in our [`docs/contributing`](https://github.com/paritytech/polkadot-sdk/tree/master/docs/contributor) folder. What you do here is more or less what we expect external contributors to do: 
1. Proper PR description, as per `PULL_REQUEST_TEMPLATE`.
2. Adhering to everything in `CONTRIBUTING.md`. 

> [!info] The stale PR issue
A common issue that might arise is for you to open a PR, and for it to not receive the reviews you hoped for. While we are all obliged to spend a part of our time reviewing each others' code, we all tend to be busy as well. Opening a PR, yet silently letting it sit stale for a month is your foremost your shortcoming, not others'. Be vocal, both in public and with your manager/TL to ensure your PRs get the amount of review they deserve. 
 > 
 > ![Screenshot from 2023-03-16 15-40-07.png](/img/user/resources/Screenshot%20from%202023-03-16%2015-40-07.png)

> [!info] Release and Audit Rooms
> Two critical pieces of information about contributing to `polkadot-sdk` that is gated within Parity is being present in the release and audit Element rooms. These rooms ensure you are up to date with the latest of the two respectively, and can plan accordingly. Ideally, these processes should also move towards being as public as possible. 

> [!tip] Editor Tips 
> Be sure to read [this](https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/reference_docs/development_environment_advice/index.html) (and [this](https://github.com/paritytech/devops/wiki/Developer-Resources%3A-Using-the-build-host-&-cargo-remote) private) great guide about what editor setups we often use. 
### 🔙 After Merging

Well, your PR is finally merged. Are we done? More often than not, no. 

Yet again, a lot of this goes back to the dual realities ([[Posts/Runtime Function Onboarding 2024#💊 The Reality of What We Do\|💊 The Reality of What We Do]]) of our team: Flying low and flying close to end users. This implies that, before kissing and saying goodbye to a merged PR, you need to reflect on the following: 

1. **Test-network Runtime Upgrade**: Fairly soon after your PR is merged, it will be enacted on our test-networks, most notably Westend. This is your best opportunity to do your final round of (live) testing. Ask yourself: Is everything alright in Westend? How can I test my feature further? 
2. **RC/SC Runtime Upgrade**: Days, weeks or months after your PR is merged, it might finally land in the RC or one of the SCs[^1]. This is another milestone for testing: Did everything go smoothly?  The release process of RC runtimes, and their enactment, is fully public and managed by the Polkadot fellowship, so you can easily tag along.
3. **Developer Community Impact**.
    1. Did any UIs break because of your feature? Could we have communicated better with them? 
    2. Are any new documentation pages needed? (easier to forget:) Are any of the *existing ones outdated now*? Maybe one of the most visited StackExchange questions needs being updated? 
    3. Was your PR description good for downstream teams to be able to adopt the feature?
4. **Monitoring and Data**
	* [Devops Wiki](https://github.com/paritytech/product-engineering/tree/main/docs/devops) A lot of great resources about our infra, and how to do monitoring of parity run nodes, validators, logs, and more! 
	* [DotLake](https://x.com/dotlake_xyz) (public)
	* [Metabase](https://metabase.data.paritytech.io/) (private)

### 🧐 Know Your API 

As a final example to cement [[Posts/Runtime Function Onboarding 2024#💊 The Reality of What We Do\|💊 The Reality of What We Do]], let's consider the difference between two features, in order to highlight how important it is for you to be able to answer one question: 

> Is my code end-user-facing or not?

Consider: 
1. An optimization made to the networking of the parachains protocol. This will improve the performance of parachain networking by 10%, without any action needed by anyone, as soon as the crate is released and updated. In such cases, be my guest, and ignore the majority of this rant. Your work is not directly affecting end-users. You can still demonstrate competence by adhering to everything said here, but a lot of it is not relevant.
2. Contrary, consider the following: 
	- Working on a new major revision of any of the `FRAME` modules used by Polkadot end-users, such as `staking`, `proxy` or `multisig`. 
	- Working on any feature that is expected to be integrated into wallets, exchanges, or other 3rd party software.
	- Changed an API in FRAME or Substrate that might make existing code that compiles no longer compile.
		- Even more pesky, existing correct code might still compile, but be incorrect if some upgrade path is not followed.

Our [PRDoc system's audience section](https://raw.githubusercontent.com/paritytech/polkadot-sdk/master/prdoc/schema_user.json) is a good framework to help you think about the final audience of your code.  

Moreover, the new release process, with its emphasis on semantic versioning, will force you to think about this to a high extent, but it does not encapsulate the full magnitude of the above. For example, in your PR, you might be causing a major bump to many crates, but only one of the crates is something that actually matters to the main audience, noted in the PRDoc. 
### 🧹 Be The Housemeister

We are a true open-source project, and our entire issue-tracking system is what we publicly have in GitHub. While our issue list has grown very large, and it is unlikely that our team can clean it up, we can keep *issues that are relevant to our team* tidy, well described and properly labeled.  Practically: 
1. Keep the issues that you have created tidy.
2. Keep an eye on the issues opened by external contributors (they are auto-labeled as `unconfirmed`) and see if you can triage them. We sometimes get important bug reports from external users and the only way to do so
3. Similarly, you can have some degree of supervision upon areas of our StackExchange.
4. Keeping a good list of mentor

> Needless to say, most of this is not relevant to you at day-0, but it will become as you grow to be an expert in some domains. 
## 🤓 Keeping Up 

In reality, you are joining the Polkadot ecosystem, not just Parity. And there is a lot happening in Polkadot! Some links for you to explore based on your interest in various topics: 

- Governance: [Polkassembly](https://kusama.polkassembly.io/), [SubSquare](https://kusama.subsquare.io/), AAG.
- The [Kusamarian](https://x.com/TheKusamarian)
- Community Element Chats: 
	- [Watercooler](https://matrix.to/#/#polkadot-watercooler:web3.foundation), [Direction](https://matrix.to/#/#polkadot-direction:matrix.parity.io), and [Validator Lounge](https://matrix.to/#/#polkadotvalidatorlounge:web3.foundation) if you want more exposure
    - And [Kusama Watercooler](https://matrix.to/#/#kusamawatercooler:web3.foundation), [Direction](https://matrix.to/#/#kusama:matrix.parity.io).
- Newsletters:  [DotLeap](https://newsletter.dotleap.com/?triedSigningIn=true). 
- [Bill Laboon](https://x.com/BillLaboon)'s [Daily Digest](https://x.com/hashtag/PolkadotDigest?src=hashtag_click). 
- Polkadot Fellowship
	- Public Element [Room 1](https://matrix.to/#/#fellowship-open-channel:parity.io), [Room 2](https://matrix.to/#/#fellowship-members:parity.io). 
    - [Github org, including manifesto.](https://github.com/polkadot-fellows/)
- **Rust**: [This week in Rust](https://this-week-in-rust.org/), [Rust in Blockchain](https://rustinblockchain.org/).
- I personally like to follow these for general crypto stuff:
    - [Decrypt](https://decrypt.co/). 
    - Podcast: [Defiant](https://thedefiant.io/podcasts), [Bankless](https://podcast.banklesshq.com/) and [Unchained](https://www.youtube.com/c/unchainedpodcast).
    - [CoinBureau’s weekly crypto](https://www.coinbureau.com/videos/) update videos every Monday (yes, but it is good to know what the _mainstream_ thinks..)
    - Bloomberg Crypto reports, [Matt Levine Money Stuff](https://newsletterhunt.com/newsletters/money-stuff-by-matt-levine).
- [Official Polkadot Ecosystem Room](https://matrix.to/#/!ysLGVMIyuKKIpwjhAT:matrix.parity.io?via=parity.io&via=matrix.org&via=matrix.parity.io) in Element — a fairly active chat with many parachain teams.
## 📍 Company 
A few high level notes about the company, and not just the RF. 
### 🎭 Culture 
You will learn about the Parity culture in your onboarding, but here’s some old-but-still-relevant material from former culture decks. 

First, here’s a little screenshot of an all-hands talk about vision of Parity in 2019 which I still stand by. You can find the full talk [here](https://drive.google.com/file/d/1yzS_ZoVdyt370hhuHwJaHelftKEH_6Yl/view?usp=sharing) (most of it is not super relevant anymore).

![Screenshot 2024-06-24 at 19.12.10.png](/img/user/resources/Screenshot%202024-06-24%20at%2019.12.10.png)
A [culture talk from Gav](https://drive.google.com/file/d/1owfjrBve9nLPy6TwZyA4qygDCwEwxlgY/view?usp=sharing) in the 2022 Tenerife retreat. This snippet of this talk is among my favorites:

<iframe width="560" height="315" src="https://www.youtube.com/embed/k9ArOU_QK8M?si=bCGu8WpYqeZJoRGu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

You can find the culture deck from 2022 [here](https://docs.google.com/presentation/d/15-lL1xKAVMt_50X2ri7hsEhU3Z0he04K017mZCIeRZI/edit#slide=id.g26b31d0a78ca97e7_10). If I wanted to name one slide from it that you should think about the most, it would be:

![Screenshot 2024-06-24 at 19.14.33.png](/img/user/resources/Screenshot%202024-06-24%20at%2019.14.33.png)

The majority of the efforts of your team lead, and this document is to help you toward achieving the status mentioned in the above sentence.
### 🔬 Parity XP 
- [Parity XP](https://www.parity.io/login) contains links to everything else that is part of the internal org-wide onboarding.

## 💎 Appendix: Principles For Excellence 

> Personal opinion of @kianenigma follows. 

**These are ideas that I believe will help you be excellent, and help others be the same**. This is an opinionated re-iteration of some competencies that are noted in our CultureAmp. 
### Stability Over Chaos 
A theme in Polkadot in 2024 has been [Stability](https://forum.polkadot.network/t/stabilizing-polkadot/7175/19?u=xlc). We used to say: "*We write code faster than we can write about it*". Parity has always been a company known for *engineering excellence*, at the cost of lots of breaking changes. This all used to be cool, but not anymore. The best number of lines of new code to deliver a new feature is 0. The simpler, less-breaking a solution, the more elegant it is.  
### Information (de)Centralization and Longevity
As noted in [[Posts/Runtime Function Onboarding 2024#🤪 Dumb Questions\|🤪 Dumb Questions]], we acknowledge that there is a lot to be learned for all of us in this space. The underlying issue is that there is a lot of **information centralization**. Veterans in the space know a lot of things, yet the path for new joiners to learn the same is unclear and bumpy, and the constant evolvement of the space does not help.  

***The rule is: Once you have learned something, think about how you can make sure it is accessible to more people, and for a long time.*** 

The best example of this is something that I personally do: Policing people to move good conversations and Q&As from a small Element room to more permanent places. Every time I see a good technical question asked in our Element: 
1. If this question is already asked in StackExchange, or in any of our docs, then I don't need to rewrite the answer. I will paste a link and move on. 
2. If not asked, and I know the answer, I don't answer the question in chat, but instead ask the person to ask it in StackExchange, and only then answer. 

This is merely one example, but the mentality it demonstrates is applicable to many situations. "*If you had to spend 1h answering a question, how can you make sure the next time someone has the same question, it takes them 1m?*"?

> [!info]- A Great Example
> In H12024, Liam was working on the release process. There entirety of the acceleration department had constant questions about the status of this work, and how it would affect them. 
> Keeping an eye on chats and answering question promptly would have been a responsible thing to do by Liam, but he even went a step further and recorded a quick Loom + FAQ and posted it in the forum. This ensures a lot of questions are answered all at once + it is not list in the history of some chat. This is a great example of working towards [[Posts/Runtime Function Onboarding 2024#Information (de)Centralization and Longevity\|Information (de)Centralization and Longevity]].
### Domain Ownership 
Take radical and proactive ownership of what you have built, and be proud of it. We highly encourage engineers to grow a vision for what they are working on, and influence its future. This gives you a high degree of freedom to not only have a say on *how* some feature is implemented, but also *which* features are worthwhile.

But, **freedom comes with responsibility**: 
- As the owner of a domain, both internally and externally, you need to make yourself known as the owner, so that others can find you. 
- Follow your domain carefully, participate in conversations around it, answer questions.
- You need to interact with experts and higher level leaders both in Parity and the community to share your ideas and come to a conclusion about the future

>[!example]- 
>For example, if you aspire to be the owner of a domain, you would try to create notifications to be informed about all activity around this topic in the Polkadot forum, SE and twitter, and participate accordingly. 

> [!info] Not For Everyone 
> Of course this attitude of wanting a higher level of ownership and responsibility is not what everyone wishes, and is generally expected for an L5+ engineer. 

Proper off-boarding and handover is also an important aspect of **ownership**. We move companies, teams, or sometimes, put a stop to an initiatives for various reasons. But what happens to the part of the project that is already out there? Should we bring it down? should we archive a repo? Prevent letting initiatives going stale. 
### Announce Early 
In tandem to the above, try and announce[^4] what you are working on early, and embrace feedback. When you start an initiative, announce the vision, then link to a public Element room if one exists where one can join for a more in depth discussion about the project. 
### Don't Be Blocked On Decisions
Sometimes it is hard to come up with an answer to an decision. Unless if it is a very irreversible one, you can do the following: Share what you think is the best approach, and if after `x` weeks no objections comes, you execute. 
### Measuring Impact 
The impact of what we do, specifically for end-user facing work (as defined in [[Posts/Runtime Function Onboarding 2024#🧐 Know Your API\|🧐 Know Your API]]), is NOT how many PRs we manage can merge into `polkadot-sdk`, but rather how much our code is being user by end-users or developers. 
### Liveness Above All 
Parity is a collective contributing to Polkadot. Most of us are part of other collectives that contribute to Polkadot in other ways, such as ChaosDAO or the Polkadot fellowship. 

**Making Polkadot successful is, one way or another, our main mission**. Therefore, important bugs and existential issues that might arise should never be discarded as "it is not the task I am working on, so not my problem". If something important comes up that is possibly an existential threat to Polkadot, it is everyone's first priority. 
### Resilience Above All 
We proudly consider ourselves as one of the (few) companies that is "*doing blockchain right*". In that, we are not in this for a short term profit, for capturing a hype or anything other than making the [true](https://gavwood.com/web3lt.html) [Web3 vision](https://www.reddit.com/r/ethereum/comments/23beb3/insights_into_a_modern_world_%C3%B0apps_what_web_30/) come to fruition. 

And what is that Web3 vision: That we need to build the tools necessary to be able to build resilient systems that can survive the test of time. Blockchains are one important type of such systems. 

We are also proud to be on the forefront of scalability of Blockchains, without sacrificing Resilience, something that we think other blockchain systems have deliberately opted to sacrifice. 

With all that said, what is practically means for us, is that when we are developing runtimes and blockchains, making sure the system is sound, secure and sybil resistance is non-negotiable. 

> [!Info]- But What About UX? 
> Historically, we have also sacrifices a lot of UX for resilience. We do wish to put a stop to that, and build more user-friendly systems going forward. That being said, we should similarly openly explore ways to improve UX without sacrificing resilience. 

## Learning Resources 

-  Polkadot Blockchain Academy
	- [Recordings](https://www.youtube.com/@polkadotblockchainacademy/playlists)
	- [slides](https://github.com/Polkadot-Blockchain-Academy/pba-content)
- [[Posts/Tech/Polkadot's Build Horizon\|Polkadot's Build Horizon]]: Contains some up-to-date learning resources
## Wrapping Up 

Okay, this was long! thank you for reading! for any feedback, reach out to @kianenigma. 

[^1]: This is usually done in two steps: first, a release made by the Polkadot fellowship, and a runtime upgrade being authorized by the community. Parity coordinates these operations, but does not have full control over them. 
[^2]: Because if all questions are dumb questions, then no questions are dumb questions. 
[^3]: Notionally part of another team called `node-sdk`, but we contribute to the node side of Substrate as well.
[^4]: Announcements should generally be done in the Polkadot forum, unless if for some reason it needs to be private, in which case it can be done in the Parity Forum. 