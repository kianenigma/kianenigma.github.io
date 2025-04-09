---
{"dg-publish":true,"permalink":"/posts/tech/sharded-and-non-sharded-tps-in-blockchains/","created":"2025-02-11T15:13:00.000+01:00","updated":"2025-02-22T16:18:47.020+01:00"}
---

> Originally posted in [x.com](https://x.com/kianenigma/status/1889350322016973306).

The argument of a sharded and non-sharded TPS differing is valid. But the answer is not as simple as @Justin_Bons's "any sharded system can achieve millions TPS". 

First, what is valid about it: When you evaluate a CPU, you ofc look at both single core and multi-core performance. 

Then, you look at the quality of the sharding:

1. Is each shard's isolated progress secure? 
2. How fast shards can communicate with one another? 
3. Because we are in Web3, the security of this communication is also important. Are messages final? Can the sender and recipient trust one another? 

What often gets lost in translation is that Polkadot's sharded architecture achieves 5/6 figure TPS with all the 3 above criteria uncompromised.

Most, if not all, of the "1m TPS sharded systems" are butchering those 3 criteria to increase TPS, while @polkadot decided not to, and this is why it is different.

@rphmeier put it best that TPS is not just a quantitative measure, it also has qualitative. And when comparing TPS, sharded or non-sharded, it should be taken into account.

The assertion then is: Polkadot has the best combination of abundant, and high quality blockspace/TPS, because it doesn't compromise on the above criteria.

Last but not least, everything said above is the existing Polkadot architecture, which Ethereum and others are converging into. 

JAM upgrade is a realization that even @Polkadot's uncompromising solution to sharding is not enough -- we also need flexible boundaries among shards, allowing them to  synchronously compose, should they wish to communicate. 

This novel property is phrased as semi-coherence in the title of the graypaper.com: A system that is coherent (synchronous) for a subset of shards/rollups/contracts that often communicate, and incoherent (asychronous) for others.

This adds a 4th qualify to our list of qualitative metrics for blockspace, and Polkadot, through JA upgrade, is the sole project inventing its way into providing it. 
