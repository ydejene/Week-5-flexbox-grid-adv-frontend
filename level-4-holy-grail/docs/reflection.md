# Flexbox vs Grid: Level 4 Reflection

When building the Holy Grail layout, we implemented the exact same design using both Flexbox and CSS Grid. Druing the process we indeed face challenges that helped us understand both systems better. Our team worked back and forth to fix several bugs that came up in both versions.

**Which was easier to implement?**  
Flexbox felt a bit easier to start with because we are more used to it. The 1-dimensional flow makes sense for things like the header and navigation, where elements just sit next to each other. However, when we got to the page body with the sidebars, things got tricky. We originally tried to stack the sidebars above and below the main content on small screens, but the UX was terrible and left no space to scroll. We ended up just hiding them completely on mobile screens. Getting the collapse animation to work was also a hassle in Flexbox since `width: 0` removed the toggle button entirely. We fixed it using a `max-width` transition and leaving a 36px strip visible.

When it comes to Grid, it was actually easier for the main page layout once we figured it out, but it confused us at first. We were confused at some point looking at our UI where our `position: fixed` header broke the grid rows. Because the header was removed from the document flow, our main content shrunk to just 44px tall. We fixed this by setting the body to `grid-template-rows: auto 1fr auto` just for the elements that stayed in the normal flow. 

**Which required less code?**  
Well there is singnifcant number of css lines in both line to make the page look beatiful. But Grid required slightly less code when it comes to layouts because it handles 2-dimensional layout constraints automatically without media queries. But if we count the lined of codes in general the flex box has less lines. For the card grid in the main content, we used `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))`. That single line handled all the wrapping and space filling that normally takes extra media queries when using Flexbox. 

**Which was more intuitive?**  
We found CSS Grid to be much more intuitive for the overall page structure (using `max-content 1fr max-content`). But Grid can also be very rigid. For example, when we hid the middle navigation links in the header on mobile screens, our user account button suddenly fell into the middle `1fr` column and stretched out completely. We had to specifically reset the grid columns to `max-content 1fr` to fix that button shape. Flexbox handles missing elements much more fluidly without needing rules to fix proportions. 

**In what scenarios would you prefer one over the other?**  
We would definitely prefer CSS Grid for the macro layout—things like the Holy Grail 3-column structure, footer link groups, or card grids where we want strict row and column control. But we would prefer Flexbox for micro layouts, like the header or navigation menus, where elements just need to sit in a line and easily adjust their spacing if a child element gets hidden.