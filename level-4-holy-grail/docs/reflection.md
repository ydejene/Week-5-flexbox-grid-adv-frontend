# Level 4 Reflection: Flexbox vs Grid

During this activity, our team built the exact same Holy Grail layout using both Flexbox and Grid. This process has thaught us the unique strengths and pitfalls of both tools.

**Which was easier to implement?**  
Flexbox was easier initially because its 1-dimensional flow is inherently forgiving. However, building the complex page body sidebars became tricky. We struggled with stacking the sidebars on mobile screens—which ruined the UX—and getting the collapse animation to work cleanly.

Grid was harder to start with but ultimately easier for the main layout. We fell into a trap where our `position: fixed` header broke the grid rows because it was removed from the document flow, shrinking our main content area. Setting our body to `grid-template-rows: auto 1fr auto` fixed it.

**Which required less code?**  
While both files share a significant amount of baseline styling, Grid required less code for the complex layout structures. Using `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))` allowed our cards to wrap naturally without any media queries. Flexbox required more explicit media queries and flex-basis math to achieve that same wrapping behavior. Overall, Grid handled 2-dimensional constraints much more cleanly.

**Which was more intuitive?**  
CSS Grid was much more intuitive for defining the overall page structure safely from the parent container. However, Grid proved rigid for missing elements. On mobile, hiding our middle navigation links caused the user account button to fall into the middle `1fr` column and stretch aggressively across the header. We had to patch the grid structure at that breakpoint. Conversely, Flexbox handles missing child elements fluidly without breaking its layout.

**In what scenarios would you prefer one over the other?**  
We would choose Grid for macro layouts—like the Holy Grail structure and 2-dimensional galleries—where strict row and column control is necessary. We prefer Flexbox for micro layouts—like the header and navigation menus—where elements just need to align in a single line and dynamically adapt to available space.