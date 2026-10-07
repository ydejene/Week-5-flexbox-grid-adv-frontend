# Level 3 – Reflection: Flexbox vs CSS Grid

**Author:** Atigbi Emmanuel Ayomikun  
**Level:** 3 – Complex Layout  
**Word Count:** ~420 words

---

## Which was easier to implement?

Honestly, Grid was easier for the overall page structure. The moment I wrote `grid-template-areas` and gave every section a name, the whole layout clicked into place. I could look at the CSS and immediately picture what the page looked like just from reading the area names. With Flexbox, I had to think in layers — the outer wrapper is a column, then inside that I need another div that becomes a row for the three columns, and then I have to make sure the sidebars don't grow or shrink. It works, but it takes more mental effort to track.

That said, Flexbox was easier for the smaller pieces inside the layout — the nav list, the stats row, the course cards. For those, thinking in one direction at a time felt natural.

## Which required less code?

Grid required noticeably less code for the page-level layout. In the Flexbox version, I needed a separate `.content-wrapper` div just to create the three-column row, and I had to use `flex: 0 0 20%` on the sidebars with explicit `flex-shrink: 0` to stop them from collapsing. In the Grid version, the `.page-wrapper` itself handled everything — no extra div, no flex-basis tricks. The sidebars just sat at 20% because of `grid-template-columns: 20% 1fr 20%`.

The responsive section was also shorter with Grid. On tablet, I only changed `grid-template-columns` and rewrote `grid-template-areas` — two rules. With Flexbox, I needed `flex-wrap: wrap`, `order: -1` on main, and explicit width changes on each sidebar. More lines, more things that could go wrong.

## Which felt more intuitive?

Flexbox felt more intuitive at first because I had used it before for simpler layouts. But for a layout this complex — three columns, a header that spans everything, a footer that sits at the bottom — Grid was more intuitive once I understood named areas. The template just reads like a diagram of the page.

## When would I use one over the other?

I would use Grid for page-level structure — anything where content spans rows and columns at the same time. I would use Flexbox for component-level layouts — nav bars, card rows, button groups, anything that flows in one direction. In practice, the two work best together. This project used both: Grid for the page skeleton, Flexbox for the pieces inside it.