# Level 2 Reflection - Multi-Column Layout

In Level 2, I learned how to create a responsive multi-column webpage using both CSS Flexbox and CSS Grid. The goal was to create a layout containing a full-width header, navigation bar, main content area, sidebar, and footer. I also learned how to make the layout responsive so that it works on both desktop and mobile screens.

I found Flexbox easier to understand when I first started creating the layout. Flexbox is useful for arranging elements in one direction, either in a row or a column. In my project, I used Flexbox to place the main content and sidebar next to each other on larger screens. The main content takes approximately 70% of the available space while the sidebar takes 30%. I also used Flexbox for the navigation links. When the screen becomes smaller, I used a media query to change the layout direction to a column so that the main content and sidebar stack vertically.

CSS Grid was also useful for creating the same multi-column layout. Grid makes it easier to define columns and control their sizes. For this project, I used `grid-template-columns: 7fr 3fr` to create the 70/30 relationship between the main content and sidebar. On smaller screens, the Grid changes to one column using a media query. This makes the page easier to view on mobile devices.

Compared with Flexbox, Grid required fewer layout rules for defining the two main columns. Flexbox felt more intuitive for arranging items in a single direction, while Grid felt more appropriate for controlling the overall page structure. I would use Flexbox when I need to arrange items in a row or column, such as navigation links, buttons, or cards. I would use Grid when I need to create a structured page layout with multiple rows and columns.

Overall, this level helped me understand that Flexbox and Grid can achieve similar visual results but are designed for different layout needs. I also learned the importance of responsive design and testing a webpage on different screen sizes.
