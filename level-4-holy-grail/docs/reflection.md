# Level 4 Reflection: Flexbox vs Grid

During this activity, our team built the exact same Holy Grail layout using both Flexbox and Grid. This process has thaught us the unique strengths and pitfalls of both tools.

**Which was easier to implement?**  
Flexbox was easier initially because its 1-dimensional flow is inherently forgiving. However, building the complex page body sidebars became tricky. We realized hiding the sidebars and navigation on mobile completely ruined the UX, so we had to build an off-canvas slide-out menu using `position: absolute`. Getting the collapse animation to work cleanly was a hassle in Flexbox since `width: 0` removed the toggle button, so we had to apply a `max-width` transition on a 36px strip.

Grid was harder to start with but ultimately easier for the main layout. We fell into a trap where our `position: fixed` header broke the grid rows because it was removed from the document flow, shrinking our main content area. Setting our body to `grid-template-rows: auto 1fr auto` fixed it.

**Which required less code?**  
While both files share a significant amount of baseline styling, Grid required less code for the complex layout structures. Using `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))` allowed our cards to wrap naturally without any media queries. Flexbox required more explicit media queries and flex-basis math to achieve that same wrapping behavior. Overall, Grid handled 2-dimensional constraints much more cleanly.

**Which was more intuitive?**  
CSS Grid was much more intuitive for defining the overall page structure safely from the parent container. However, Grid proved rigid for missing elements. On mobile, hiding our middle navigation links caused the user account button to fall into the middle `1fr` column and stretch aggressively across the header. We had to patch the grid structure at that breakpoint. Conversely, Flexbox handles missing child elements fluidly without breaking its layout.

**In what scenarios would you prefer one over the other?**  
We would choose Grid for macro layouts—like the Holy Grail structure and 2-dimensional galleries—where strict row and column control is necessary. We prefer Flexbox for micro layouts—like the header and navigation menus—where elements just need to align in a single line and dynamically adapt to available space. In fact, we ended up using Flexbox specifically to sort out the navigation inside our Grid stylesheet. We tried again and again to force CSS Grid to wrap the header items seamlessly, but it kept giving us trouble. Honestly, Flexbox was just far more suitable for this specific purpose; forcing it in Grid would have introduced unnecessary complexity and long lines of CSS that we didn't even need.