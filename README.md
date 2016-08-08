# react-et-al
Testing out React with d3 charting methods + a basic server.

At first I jumped from some blog posts that suggested using JSDOM, but that wasn't ideal with React so I moved to [suggestions in this article](http://blog.scottlogic.com/2015/09/03/d3-without-d3.html), where we use select functions of d3 and lean on React in place of using entirely d3 syntax/API.

I'm not a fan of JSX right now, so I started with translating his bar chart example to regular React. In the end - JSX might be more readable.

Next I'm working on a line chart and an interactive visual with React logic.

#### Instructions

1. Install dependencies from package.json:

   ```
   $ npm install
   ```

   (Install gulp globally if you've never done it before:

   ```
   $ npm install --global gulp
   ```

   )
2. Run gulp to compile React files to a script that can be called from html file.

   ```
   $ gulp
   ```
3. Start server:
   
   ```
   $ node server.js
   ```
4. Head to localhost:3000 to test out functionality.