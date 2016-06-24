# react-et-al
Testing out React with minimum setup for a d3 charting app (+Node, Express for basic server).

Repo will start with static data and minimal setup, so I can switch gears to a Clojurescript + Express + React + D3 setup with my team.

Might evolve into a test of live API, database, and/or Redux, and a sister Docker setup for a frontend rendering micro-service when I settle on a scalable structure here.

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