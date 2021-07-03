# Frontend Test

Frontend Developer Clement Creusat test

## Table of contents

-   [Install](#install)
-   [Deployed Test](#deployed)
-   [My process](#my-process)
-   [Performance](#performance)

This project was done in two complete days and half :going on vacation without any internet connection :-)
It was fun !

It was deployed and committed and cloned again without zero error (to install, run and build it)

## Install

### Dev

-   You can find the repo here https://github.com/ccreusat/front-end-clement-creusat-test
-   First, clone the repo : git@github.com:ccreusat/front-end-clement-creusat-test.git
-   In the directory repo, `npm install` to install the project
-   To run it locally, `npm start`
-   You get access to the page through [http://localhost:3000](http://localhost:3000)

### Build

-   To make a build of this project, you have to run `npm run build`
-   You can test the build locally running this command in the directory root : `npm run test-build`. It will go to the public folder and launch serve.
-   You get access to the page through [http://localhost:5000](http://localhost:5000)

## Deployed Test

You can visualize a deployed version on this test here:

-   TEST URL: [Test Url](https://frontend-developer-ubisoft.vercel.app)

## My process

-   Project was created WITHOUT Create-React-App.
-   I thought about this project as scalable (but without all information, not easy to imagine beyond ;))
-   I splitted the code into `pages`, `containers`, `components`
-   Having Pages comp. helped to have less code in files and create a Layout Component that can received a CSS Class for example and a Page Title to pass to Header Comp.
-   I saw the App.js as a simple "container" of the Router and have the logic outside (pages and components).
-   I created two custom Hooks to simulate Fetching Data of Games and Platforms JSON files.

## Bonus

-   404 page when no match page found (\* 404 page is replaced by `serve` Vercel 404 when test Build App locally)
-   Styled-components was used to style HTML elements.
-   Typescript (basic knowledge) to type the code.
-   I added a switch theme for fun, using React Context Hooks and a Local Storage Hook.
-   There are Skeleton Components when Loading takes too long.

## Performance

I ran a Lighthouse Report on the deployed test. Desktop and Mobile. Screenshots are visible in the /public folder or in this README.md

### Desktop

![](https://frontend-developer-ubisoft.vercel.app/images/desktop-performance.png)

### Mobile

![](https://frontend-developer-ubisoft.vercel.app/images/mobile-performance.png)

For both, Accessibility issue is a problem of contrast (colors)
In mobile, Performance issue is due to Bundle.js > Not implemented but thinking about compression, gzip, etc...

I hope you will enjoy my test and look forward to your feedback!
