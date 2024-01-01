---
title: "From Scratch"
description: "My best lessons have come from building a complex piece of software by myself. When you implement something, you hold a better understanding of how it works, and how you can apply that knowledge to other systems."
pubDate: 2023-05-26
updatedDate: 2023-06-03
archived: false
---

My best lessons have come from building a complex piece of software by myself. When you implement something, you hold a better understanding of how it works, and how you can apply that knowledge to other systems.

If you've never written an HTTP server, do it. If you've never written a database, do it. If you've never created a basic frontend framework, do it.

## Ground Rules
There are a few important things to keep in mind when doing this:

- Strive for a clean-room implementation where possible (avoid just copying someone else's code)
- Comment thoroughly
- Don't be afraid to simplify the task (ex. use a HTTP parsing library), focus on the things you want to learn about

## Why?

When you create something from scratch, you go through all of the same forks in the road that past developers have. Maybe you'll solve problems the same, or maybe you'll do it differently; either way, you've learned more about the domain and why things work the way they do.

Even if this knowledge isn't directly applicable to your line of work, it can still help you. For example, knowing how an operation like `.map` works under the hood can help you decide when it's the right choice. Over time, these small bits and pieces of knowledge can add up to a better intuition about software.

### All the Way Down

One computer science question I'm quite fond of is:

> What happens under the hood when you type in a URL to your browser and press enter?

I like this question because it's a ridiculously deep rabbit hole to go down. Off of my head, I can think of these steps, which just process your input:

- Electrical impulse from keyboard switch goes to microcontroller
- Keyboard firmware sends USB packets to OS
- Operating System decodes these signals using a USB driver
- The signals are now raw keypress data
- OS cleans and processes up raw keypress data (ex. key repeat)
- OS sends input to display server (ex. X11 or Wayland)
- Display server delegates input to Window manager
- Window manager sends input to focused window
- GUI framework sends input to focused field
- UI is updated after each keystroke

**And all this, just for processing input.** After this, there's still DNS resolution, HTTP connection, laying out the HTML/CSS, rendering the page, parsing JavaScript, etc. Like I said, the rabbit hole goes DEEP. **For pretty much every step of this process, thousands of lines of code (at least) are written to handle this process.** A very large book could be written on just this subject alone.

The point isn't that you should implement every step of this chain, rather focus on the things you're curious about, and write those. If you want to learn about how window managers like i3 or Sway work, write one! Follow your curiosity and build what you want to build.

