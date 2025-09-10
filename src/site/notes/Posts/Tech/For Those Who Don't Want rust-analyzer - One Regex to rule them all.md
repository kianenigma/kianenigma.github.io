---
{"dg-publish":true,"permalink":"/posts/tech/for-those-who-don-t-want-rust-analyzer-one-regex-to-rule-them-all/","created":"2023-08-31T17:47:27.000+04:00","updated":"2023-08-31T17:47:27.605+04:00"}
---


I was recently emailed by someone who had seen one of my crowdcast seminars on substrate, and asked me to share my Rust setup in `vs-code` for finding symbols and jumping to references. Before answering a simple "I use `rust-analyzer as well`", I looked into the video and I realized that I, indeed, was not using it at the time. A long time before that video was recorded, I had given up on using rust-analyzer for substrate because simply it was such a massive mono-repo that even *without* any `CheckOnSave`, or overwriting the `check` command to use `cargo-remote`, it was too much for my laptop to handle.

At that point, I developed two simple regex-based shortcuts to fill the gap for me, and I want to
use the reply to this email to share it with a broader audience as well, since there could still be
many people out there for whom running rust-analyzer is too expensive because of huge repositories, or limited hardware resources. So, here it goes!

First, we need a regex that can match symbols. You probably know where very that the moment that you have generics in your code, searching for something like `Impl Something for SomethingElse` no longer works, because there are a lot of generics (`<T: ...>`) in the same line. I took the fix for this (which is just adding `<.*?>` to your regex search) and expanded it to match as many type declarations as possible, among a few other things. At the end, I settled on:

```
(macro_rules!|const|enum|struct|fn|trait|impl(<.*?>)?|type)
```

But having to paste/type the regex every time is not super nice, so I found a shortcut that
would have this ready for me in the global search, with regex mode available:

```json
// add this to your `keybindings.json`
{
	"key": "cmd+shift+h", // you can and should use whatever you want here.
	"command": "workbench.action.findInFiles",
	"args": {
		"query": "(macro_rules!|const|enum|struct|fn|trait|impl(<.*?>)?|type) ",
		"isRegex": true,
		"triggerSearch": true,
		// "filesToInclude": "${relativeFileDirname}",  // no variables in findInFiles
		"preserveCase": true,
		"useExcludeSettingsAndIgnoreFiles": false,
		"isCaseSensitive": true,
		// "matchWholeWord": true,
		// "filesToExclude": ""
	}
}
```

This allowed me to quickly go from: I have type name `Foo` in my *head*, I want to find its
definition real quick.

![regex1.gif](/img/user/resources/regex1.gif)

But, one of the greatest magics of any IDE or `rust-analyzer` is that you get that juicy *jump to
definition*, and I could not yet mimic that, but at least tried! The next shortcut will allow you to
do exactly the same thing as the previous shortcut, but do it for the current highlighted keyword:

```json
{
	"key": "cmd+shift+g",
	"command": "search.action.openNewEditor",
	"args": {
		"query": "(macro_rules!|const|enum|struct|fn|trait|impl(<.*?>)?|type) ${selectedText}",
		"isRegexp": true,
		"showIncludesExcludes": true,
		"triggerSearch": true,
		"contextLines": 2,
		"focusResults": true,
	},
	"when": "editorTextFocus"
}
```

And then in the search result page, the default *Jump to Definition* would just work, which you can configure again to be any key that you want.

![regex2.gif](/img/user/resources/regex2.gif)

---

**Bonus: shortcuts to navigate the results**

Over time, I learned that shortcuts to navigate through both local and global search are super
useful. You can already see me use them in the previous gif. Highly recommended to set them to a keyboard shortcut that you can easily remember and readily use. These are the related keyboard shortcuts:

```json
{
	"key": "ctrl+'",
	"command": "editor.action.nextMatchFindAction",
	"when": "editorFocus"
}
{
	"key": "ctrl+.",
	"command": "search.action.focusNextSearchResult",
	"when": "hasSearchResult || inSearchEditor"
},
{
	"key": "ctrl+,",
	"command": "search.action.focusPreviousSearchResult",
	"when": "hasSearchResult || inSearchEditor"
},
{
	"key": "ctrl+c",
	"command": "search.action.clearSearchResults"
},
{
	"key": "ctrl+;",
	"command": "editor.action.previousMatchFindAction",
	"when": "editorFocus"
},
```

