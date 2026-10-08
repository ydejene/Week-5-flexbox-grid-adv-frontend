# Level 3 – Reflection: Flexbox vs CSS Grid

**Author:** Atigbi Emmanuel Ayomikun
**Level:** 3 – Complex Layout

## Which was easier to implement?

Honestly, Grid was easier for the overall page structure. The moment I wrote `grid-template-areas` and named every section, the whole layout clicked into place. I could immediately picture the page just from reading the area names. With Flexbox, I had to think in layers — the outer wrapper is a column, then inside that I need another div that becomes a row for the three columns, and make sure the sidebars don't grow or shrink.

That said, Flexbox was easier for the smaller pieces inside the layout — the nav list, the stats row, and the course cards. Thinking in one direction at a time felt natural.

## Which required less code?

Grid required less code for the page-level layout. In the Flexbox version, I needed a separate `.content-wrapper` div to create the three-column row, and I had to use `flex: 0 0 20%` on the sidebars to stop them from collapsing. In the Grid version, the `.page-wrapper` handled everything with `grid-template-columns: 20% 1fr 20%`.

On tablet, I changed `grid-template-columns` and rewrote `grid-template-areas`. With Flexbox, I needed `flex-wrap: wrap`, `order: -1` on main, and width changes on each sidebar. More lines, more things that could go wrong.

## Which felt more intuitive?

Flexbox felt more intuitive at first because I had used it before. But for a layout this complex — three columns, a header that spans everything, and a footer at the bottom — Grid was more intuitive once I understood named areas. The template reads like a page diagram.

## When would I use one over the other?

I would use Grid for page-level structure — anything where content spans rows and columns. I would use Flexbox for component-level layouts — nav bars, card rows, button groups, and anything that flows in one direction. This project used both: Grid for the page skeleton, Flexbox for the pieces inside it.

## Problem Encountered and How I Fixed It

When I first tested the Grid version, the content was squeezed into the left side of the page with the middle and right sections empty.

The problem was where I applied the grid. I had `grid-template-areas` on `.page-wrapper`, but the sidebars and main content are not direct children of `.page-wrapper` — they sit inside `.content-wrapper`. CSS Grid only controls its direct children, so it could not see the sidebars.

The fix was moving the grid declaration from `.page-wrapper` to `.content-wrapper`, which is the parent of the three columns. Once I did that, `grid-template-columns: 20% 1fr 20%` and the named areas left, main, right worked as expected.

This taught me something important: Grid only works one level deep. Before applying Grid, you have to ask yourself — who is the direct parent of the elements I want to arrange? That is the element that gets `display: grid`, not any ancestor above it.
