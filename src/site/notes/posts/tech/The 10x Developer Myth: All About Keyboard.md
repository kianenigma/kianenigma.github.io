---
{"dg-publish":true,"permalink":"/posts/tech/the-10x-developer-myth-all-about-keyboard/"}
---


## Theory

Recently, I engaged in a few discussions about optimal use of editors and keyboard shortcuts with new team members. It eventually inspired me to write this short article, asserting that while this ["10x developer"](https://medium.com/ingeniouslysimple/the-origins-of-the-10x-developer-2e0177ecef60) idea is for the most part about keyboard shortcuts. In other words, while I think developers also vary in terms of how they think about problems, and their cognitive abilities, 90% of the time, the ones that stood out among others, and are sometimes as much as 10 time more "*productive*", are simply better at the *craft*. Any I think 99% of the craft of programming revolves around the relationship between you and your keyboard.

I am already expressing my first thesis implicitly. **Keyboard**. Not your mouse, not your trackpad. **Keyboard**. Those are inefficient alternatives put there for the times where the programmer fails to use the keyboard (I use my trackpad often, like most others, sadly). As I will demonstrate later, every instance where you use the trackpad your are already losing a little bit of time. So, focus on learning more about how to efficiently use your keyboard, rather than dragging things out with your mouse.

A little story about how I came to be so dogmatic about this: The first laptop I had as a programmer was [this piece of history](https://en.wikipedia.org/wiki/Acer_Aspire_laptops), and for whatever reason I didn't have an external mouse. The trackpad on these machines is a joke. It is so small that you barely can move it from one corner of the screen to the other. Instead od trying to fight it, I learned from a very early stage of my career as a programmer to hyper utilize the keyboard. Over time, this became a blessing. Nowadays, having had multiple generations of MacBooks, even though I appreciate the trackpad for other tasks and am happy to not need to brows my file system anymore using keyboard, I happily hold the same habit *while I am coding* and try to avoid the trackpad as much as I can.

Second, and main part of the thesis: In general, as a programmer, your attention is disrupted in generally one instance: **when your hands over the keyboard fail to keep up what it in your mind in a timely manner**. Let's consider this both when you are reading and writing code.

In writing, you want to be able to quickly prototype different approaches, and put words on the screen. Imagine you have to do a refactor, where, for example, you have to unwind a few loops and change their indentation real quick, duplicate a few lines etc. If you manage to do this almost as fast as your brain is unpacking it, while you are in the creative process, you can continue, and your attention is not disrupted. If you delay doing this for multiple minutes (probably your damn mouse, hitting copy and paste and moving the cursor with it) you have most probably lost the train of thought that led you to want to do this anyway. Moreover, I frequently see people finding doing such code writings as "annoying", which is understandable because it is being done in a very poor way. This can sadly lead to a decline in general interest in programming as whole.

> Ideally, you want your hands on the keyboard to be so agile that even mundane refactors are actually fun to do, because you get to practice all the cool tricks you know.

In reading, I think this is even more visible. Imagine you want to follow a train of types and traits that relate to one another, trying to demystify them. If it takes you too long to jump from the file where you see the symbol `Foo` to where `Foo` is defined or used, then this process becomes mighty ANNOYING, and again can be demotivating to experience, other than being unproductive as well. And this is assuming you know where `Foo` is defined. If not, you have two tasks at hand: where is `Foo` (which is mostly solved for you if you have a language server), and how can I get there in the most efficient way (and the most efficient way never involves using a trackpad).

This is where my whole rant about not using the mouse is coming from. I think if you are really bad in the above, there is a long way that you can go while using a mouse. But sooner or later, you will reach a point where you realize that point of "losing the attention" is every time your hands must leave the keyboard, because you want to perform an action that you cannot do while your hands are already on the keyboard.

So all in all, in theory: **you want your hands, on the keyboard, to be able to keep up with your head while it is thinking**. This is the main message, and how you achieve can vary. But the important point is to keep **improving**. Every time you face that annoying moment of not being able to do something easily, go the Google, and the documentation of whatever editor you are using, and see if/how you can improve this. Don't cope with such micro-inefficiencies, as they accumulate over time. To the contrary, once you start fixing them, you will learn your editor in much greater depth, which has a compounding positive effect.

Your editor is of choice is very important here. It is like the brush to the painter. Make sure you become a strong fanboy of it by following all the releases, seeing what is new etc.

With all of that, I will list some of the settings, configurations, and shortcuts that help me achieve the above.

## Practice

The assumption here is that like most programmers, you have a few desktops, in which you have separated at least 3 main tools: An editor, a terminal, and a browser (and perhaps more).

### Operating System Level

1. The absolute first step is learn your cursor. The involves a few settings:
   * Increasing its speed significantly. The default cursor speed is way too slow.
   * Learning how to jump by word rather than character.
   * Learning how to jump the beginning and end of the line.

2. Learning to move between the few desktops you have open via keyboard.
   * In my linux days, the shortcut to move the active application to another desktop but was rather easy, but is rather dodgy to setup right in MacOs. I have mostly forgotten about this

3. Lastly, you want to be able to easily split your screen into two, left and right. I personally find anything more than this to be an overkill, but most apps that allow you to do one allow you to do all of them, such as [rectangle](https://rectangleapp.com/).


There's a lot more here, but I presume you can figure out what else can help you achieve the above principles better.

### Editor Level

I personally use VSCode with Rust analyzer. But almost everything here should be applicable to any language and editor.

#### Finding The Right File

First, you want to be able to easily **find the file that you are looking for**. There are typically two ways to find a file:

1. Find it by **location** in the sidebar, file-tree list thingy.
2. Find it by **name**.

The find a file by its **location**, you want a keyboard shortcut that can quickly move the focus of your editor from the code you are editing to the the file-tree (remember, no touching the damn mouse for any of this!).

![switch focus to sidebar](/posts/10x-1.gif)

The keyboard shortcut config name for this is "**View: Show Explorer**" in Vscode.

Sometimes, you have the file that is already of interest open in a different tab, and you know that tab is nearby. For this, you need a shortcut to move to the next/previous tab real quick.

> I personally end up having a million tabs open at all times. Sometimes I happily disable tabbing with Vscode zen mode and call it a day. The two ways mentioned above are good enough to find any file quickly.

> If you use the integrated terminal in vscode (I don't) you probably want shortcuts to switch focus to/from it as well.

If you want to use a file by **location**, the way to do it is the fuzzy finder. I don't know what editor you use, but it must have a fuzzy finder. A fuzzy finder is one that more or less does it best to match the string you are inserting to anything in the path of the final file. For example, if you are looking for a file that is located in `/foo/bar/prettyUniquePart/src/mod.rs` it is not wise to try and find it in the fuzzy finder with the `mod.rs` part, but rather inserting `pretty` might be enough.

![fuzzy](/posts/10x-6-cmdp.gif)

The fuzzy search can be opened by Vscode using `cmd+p` by default, and it can do a lot more than fuzzy search!


#### Navigating The Right File.

Now, assuming you are the master of opening files, you want to be able to navigate it in a skillful way.

First, you want to have ways to scroll the file real quick. Similar to the cursor speed, where the default speed is super super slow, the default scroll speed might also be very slow. You want to know the keyboard shortcuts that let you:

1. Jump a page up or down (shortcut name: `cursorPageDown`).
2. Jump to end and beginning of the file (shortcut name: `cursorBottom`).

As a backup, should you fail and need to use your trackpad, VSCode can be configured to have a [fast-scroll](https://www.youtube.com/watch?v=iZP1cfAI_rY) next to the normal scroll, which is pretty useful.

![fuzzy](/posts/10x-8-scroll.gif)

Then, you want to be able to find some symbols. If you have a language server, you will get a lot of information related to this in your screen already, but there's still a few tips to be added.

Firstly, if you have a proper language server, you better be apt at using it. This involves knowing the keyboard shortcut for super useful operations such as: "Jump To Definition", "Peek Definition", "Find References" and such.

![fuzzy](/posts/10x-peek-def.gif)

Then, two additions to the fuzzy search `cmd+p`. If you open the same, and prefix it with `@`, then it turns into a local symbol search. If you prefix it with `#` it turns into a global symbol search (might not work on large projects). If you prefix it with `:` it will help you jump to a file with a specific line number.

> Lastly, if you put `>` it will allow you to execute internal commands, such as "format document" etc.

> There is also a fuzzy (or more intelligent) suggestion shortcut in most editors, that you can just use to ask for suggestions from the editor. The shortcut for this mostly involves something with space (cmd+space) and is called "Trigger Suggest" in Vscode.

> With or without Rust analyzer, I have a [few regex-based custom commands](https://hello.kianenigma.nl/posts/for-those-who-don-t-want-rust-analyzer-one-regex-to-rul-them-all/) that I find vastly useful in large Rust Mono-repos, to find symbols quickly.

Then, let's talk about the (much underrated) `cmf+f` and `cmf+shift+f`. You know what they do: they invoke local file search, and global search. They are okay as they are, but what are you going to do with the results, without needing to use the cursed mouse? that's right, you need shortcuts to navigate the results. This is really powerful, and turns these mundane shortcuts into super tools.

![fuzzy](/posts/10x-search.gif)

The keyboard shortcut for these is called "`Find Next/Previous`", "`Search: Focus Next/Previous Search Result`".

#### Editing The Right File.

Lastly, let's talk a bit about edit editing files. Writing code is mostly easy if you are only adding words. It mostly gets hard if you want to do bulk edits, or if you want to do more complicated things. Here are a few things that I find important, but my suggestions here are really non-exhaustive.

* indent/de-indent

![fuzzy](/posts/10x-2-indent.gif)

* duplicate line

![fuzzy](/posts/10x-3-duplicate.gif)

* move line(s)

![fuzzy](/posts/10x-4-move.gif)

* some knowledge of how to do multi-cursor operations.

![fuzzy](/posts/10x-7-multi-1.gif)

![fuzzy](/posts/10x-7-multi-2.gif)



## Terminal Level

I won't get into details here because this has already gotten long, but be aware that you can also optimize your use of terminal by quite a lot as well. The single most useful thing I can suggest for coding is the ability to jump right from your editor into the file path where some error has occurred (sadly, using your trackpad). I believe ITerm2 and Vscode's internal terminal support this out of the box.

![fuzzy](/posts/10x-terminal.gif)

---

All in all, there's not much new that I am saying here. Most of these shortcuts and operations are already known. The main argument is: "Use the keyboard!" 😅.
