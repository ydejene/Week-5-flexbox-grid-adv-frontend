**Author:** Maxime Lilian Hirwa
**Level:** 1 – Basic Layout
**Word Count:** ~470 words

**Reflection: Flexbox vs. Grid (Level 1: Basic Layout)**
**Overview**

For Level 1, I built a page with a fixed-height header, a main area that fills the remaining space, and a footer, first with Flexbox and then with Grid. The HTML is identical in both versions, and I only swap the stylesheet link. Both look the same on desktop and mobile.

**Which was easier to implement?**

Flexbox was easier to start with. The body becomes a column (display: flex; flex-direction: column), the header and footer get fixed heights (80px and 60px), and main gets flex-grow: 1 to absorb the leftover space. Each rule does one visible job. Grid took longer to click because of 1fr, but once I understood that it means "whatever space is left," it was just as quick to write.

**Which required less code?**

Grid. One declaration on the body, grid-template-rows: 80px 1fr 60px, replaced the three separate rules that Flexbox needed (height on the header, height on the footer, flex-grow on main). The difference was clearest in the mobile media query. In Grid, I changed one line to 60px 1fr 50px and adjusted main's padding. In Flexbox, I had to override the header height, the footer height, and the padding in three separate rules.

**Which was more intuitive?**

Grid, for this particular layout. The row template reads like a blueprint of the page: 80px, the rest, 60px. With Flexbox, the sizing logic is spread across three elements, so I had to piece the layout together by reading all of them. Flexbox was still the right tool inside the header and footer, where I used align-items and justify-content to center the text, which is a one-direction alignment job.

**Trade-offs and when I'd choose each**

Grid's strength is also its weakness here. The row template is tied to exactly three children, so if I added a fourth element, it would fall into an implicit row and break my sizing. In Flexbox, an extra child would simply join the column, and main would still grow around it. So Grid is better when I know the structure of the page up front, while Flexbox is better when the number of items can change, such as nav links, buttons, or cards.

My conclusion is that they work best together. I would use Grid to define the overall page skeleton and Flexbox to arrange the content inside each section, which is what I ended up doing in this activity.

**Challenge**

"Stack on mobile" confused me at first, since this layout already stacks vertically at every screen size. I treated it as adapting the layout for small screens, using a max-width: 600px media query to reduce the header and footer heights and tighten the padding.