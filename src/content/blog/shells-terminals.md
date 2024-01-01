---
title: "WTF is a Terminal Emulator"
description: ""
pubDate: 2023-10-11
updatedDate: 2023-10-11
archived: false
draft: true
---

As a person in tech, I get annoyed when somebody calls Google a web browser. Or when someone says Google Chrome is a search engine. It's understandable how someone could get confused, but it still bothers me. I guess it's a pet peeve. But if you asked me 1-year-ago the difference between a terminal and a shell,  I would've shrugged and said "I don't know." My current answer would be this:

- A terminal emulator is a piece of software that emulates old-school hardware terminals. It renders stdout and stderr, and uses *escape sequences* to change color, cursor, position, etc.
- A shell is a <abbr>DSL</abbr> (*domain-specific language*) that runs from a terminal. It's main function is running command-line programs, but they usually support scripting too.

But explanation this leaves many open questions: **How does it emulate a hardware terminal? What does an escape sequence even look like? How does a terminal know what to render?** In time, we'll answer all of these. But first, we need a terminal to analyze... a simple one, but one that's feature complete.

I was originally planning on using [st]() for this purpose, but it's code is dense and difficult to read. So instead, I implemented my own (very very simple) terminal emulator.

<!-- Luckily, there's a terminal named [st](), made by the lovely folks at [Suckless](). Calling it feature complete would be a bit of a stretch, but it's good enough for our purposes. Every code snippet here is derived from this project (*woo open source!*) -->

## What is a Hardware Terminal?

> In the olden days of mainframes, from the mid 1970's to the mid 1980's, most people used real text-terminals to communicate with large computers. These real text-terminals were neither computers nor emulated text-terminals. They consisted only of a screen, keyboard, and only enough memory to store a screenfull or so of text (a few kilobytes). Users typed in programs, ran programs, wrote documents, issued printing commands, etc. A cable connected the terminal to the computer (often indirectly). It was called a terminal since it was located at the terminal end of this cable. Some text-terminals were called "graphic" but the resolution was poor and the speed slow by today's standards due to the high cost of memory and the limited speed of the conventional serial port, etc.
>
> — <cite>[David S. Lawyer](https://linux.die.net/HOWTO/Text-Terminal-HOWTO-1.html#ss1.7)</a></cite>

## Terminal Emulation 101

It's time for a crash course in UNIX and TTYs.

## Resources Used

- [Text-Terminal-HOWTO](https://linux.die.net/HOWTO/Text-Terminal-HOWTO.html)