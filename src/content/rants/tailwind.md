---
title: "Tailwind Is CSS"
description: ""
pubDate: 2023-12-09
updatedDate: 2023-12-09
archived: false
draft: true
---

It's a suprisingly common thing to see people online talk about how TailwindCSS is bad for begineers. The argument is that you should be learning CSS instead of some special variant. They seem to have confused Tailwind with Bootstrap. Say it with me, "TAILWIND IS CSS."

## What is CSS?

CSS, as I'll be referring to it, is a language used to describe the presentation of a website. This includes layout, typography, colors, animations, and more. CSS is one of many langauges[^1] [specified]() by the World Wide Web Consortium.

In combination with HTML and JavaScript, CSS is a core web technology. In case you've been living under a rock, CSS looks like this:

```html
<button class="bg-transparent rounded-md inline-block px-2 py-4 border-none">
   Click me!
</button>
```

**_Oh no!_** There appears to have been some kind of mix of. CSS actually looks like this:

```javascript
export const button = style({
    backgroundColor: "transparent",
    borderRadius: "4px",
    display: "inline-block",
    padding: "0.5rem 1rem",
    border: "none",
})
```

Uhhh... this is getting embarassing. That's still not CSS! Here is what CSS actually looks like (_because this bit gets stale rather quickly_):

```css
button {
    background-color: transparent;
    border-radius: 4px;
    display: inline-block;
    padding: 0.5rem 1rem;
    border: none
}
```

The other two I listed are "alternatives" to CSS (quoted because it's CSS all the way down, [until you get to the turtles](https://en.wikipedia.org/wiki/Turtles_all_the_way_down)). They abstract away some of the hairy bits of dealing with CSS. Speaking of...

### CSS: The Bad Parts

- Selector specificity is confusing and difficult (can lead to cascading `!important`)
- Ad-hoc values can create inconsistencis across the UI (especially before custom properties)
- Nearly impossible to delete dead code because it's difficult to tell what's unused (and deleting the wrong thing means death), leading to bloat

These problems (and more) have created a treasure trove of solutions. From CSS Modules, `styled-components`, and of course, Tailwind, there's variety in implmentation, performance, developer experience, and even idealogy. 

## Tailwind: The Bad Parts (_allegedly_)

The _supposed_ down-sides of Tailwind are pretty bad:

1. Breaks separation of concerns, styles are co-located with markup
2. Clutters your markup, making it harder to read and edit
3. It's difficult to remember abbreviations like `px-4` or `space-y-5`
4. **Learning Tailwind doesn't help you learn CSS**

Let's tackle these one at a time

### 1. Separation of Concerns

Brought down by our holy lord, Edsger W. Dijkstra, separation of concerns is a fairly simple concept-- **split your application in modules/layers, so that these modules can move independently**. But calling out Tailwind in this case is a bit... *how do I say wrong without saying wrong...* misguided.

CSS, while separate from HTML, is inherently connected to it. Without any content, the styles are useless. CSS exposes it's external API as classes, IDs, etc. **The argument here is that Tailwind doesn't separate its concerns, as it combines HTML and CSS**. But this assumes that HTML and CSS is a sensible split, and is the only valid split. Instead, you can split your application into components; You probably do this already. 

But with this framing, the traditional CSS way starts making less sense. Having a single stylesheet makes your compoonents rigid, and you run into all the issues mentioned above. Having a stylesheet for every component means more duplication, compression is less effective, and more network requests. Not to mention that you need to manage loading all of these stylesheets, which is a whole mess[^2]. 

Compare that to Tailwind-- ship only the classes you use, as one static CSS file. Importantly, your styles are right next to your markup, all logically grouped under a component (concerns are still separated).

### 2. Cluttered markup

Yeah uh... this one is kinda true. Tailwind in your markup *can* make it harder to read and edit. Take the example I showed before:

```html
<button class="bg-transparent rounded-md inline-block px-2 py-4 border-none">
   Click me!
</button>
```

Compared to the other examples, this is the only one that requires you to scroll. But, it's also the most concise. Once you understand the abbreviations (trust me we'll get there), it's easy to read and process. Also, it's kind of unfair to compare just the CSS to HTML and CSS. So here's a full pure-CSS example:

```html
<button>Click me!</button>
<style>
button {
    background-color: transparent;
    border-radius: 4px;
    display: inline-block;
    padding: 0.5rem 1rem;
    border: none
}
</style>
```

The horizontal scrolling or wrapping (_due to a narrow `max-width`_) is unfortunate, but I'd prefer the first example over the second any day. The markdown is marginally more cluttered, but it prevents a whole other section of the page from existing.

The point 

### 3. Abbreviations



### 4. Learning Tailwind isn't Learning CSS
### Bonus Round

> Tailwind requires a bunch of additional tools to get going (compared to CSS-in-TS)

Technically this is true. 


## Syntax vs Semantics

[^1]: Technically CSS isn't specified soley as one language, but rather as several independent modules.
[^2]: You could use a style tag in every component, but that's not ideal for performance and has the same issues with duplication.
