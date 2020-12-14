# Crate 👕👖📦

> A Full-Stack Project by: 

[Bret Merritt,](https://github.com/bretm9) 

[Daniel Lessenden,](https://github.com/D-Lessenden) 

[Hashim Gari,](https://github.com/#5hashmaster3k) 

[Logan Riffel,](https://github.com/#4lkriffell) 

[Matthew Lane,](https://github.com/GreyMatteOr) 

and [Michael Walker](https://github.com/MichaelEWalker87)
<!-- [Link to deployed website](https://example.herokuapp.com/) -->


## Contents

1. [Technologies](#technologies)
1. [Overview](#overview)
1. [Setup](#setup)
1. [multi Package Automation](#multi-package-automation)
1. [Design](#design)
1. [Evolution](#evolution)
1. [Challenges](#challenges)
1. [Successes](#successes)


 ## Technologies

  - Javascript
  - React
  - Redux
  - Node
  - Express
  - Postgress
  - GraphQL
  - Sequelize (MySQL)
  - Jest
  - Axios
  - Server Side Rendering
  - Git
  - Written in ES6+ using Babel + Webpack

> [Back to the top](#crate)


## Overview

  This application is a full-stack project for Module 4 at Turing School of Software and Design. This repo was forked from [atulmy's open source repo.](https://github.com/atulmy/crate) Our goal was to plan, design, and implement a new feature into an unfamiliar code-base. We had 2 weeks to complete the task. The first week we spent getting to know the code-base, drawing out our data-flow, and designing wireframes. The second week we spent coding in our new feature.
  
  Our feature was a style survey that appears for the user when they first subscribe to a monthly crate subscription. This survey is built with the intent to refine the user's subscription to best fit their personal style. 

> [Back to the top](#crate)


## Setup

- Prerequisites
  - Node
  - MySQL (or Postgres / Sqlite / MSSQL)
- Clone repo `git clone git@github.com:GreyMatteOr/crate.git crate`
- Navigate to the `code` directory `cd code`
- Configurations
  - Modify `/api/src/config/database.json` for database credentials
   - `"username"` is `"postgres"` or your pg username
   - `"database"` is `"crate"`
   - `"dialect"` is `"postgres"`
- Setup
  - API: Install packages and database setup (migrations and seed) `cd api` and `npm run setup`
  - Webapp: Install packages
   - Navigate to `code/web/` directory and `npm install`
- Development
  - Run API `cd api` and `npm start`, browse GraphiQL at http://localhost:8000/
  - Run Webapp `cd web` and `npm start`, browse webapp at http://localhost:3000/
- Production

> [Back to the top](#crate)


## Design

  For our survey feature, We have two types of pages. A survey page, which is repeated several times until the survey is complete (populated with new items), and a result page.

  Each survey page lists several clothing items to choose from. Each item has a style attribute associated with it that our application keeps track of. The user can select as many or as few items as they like, and after navigating through several different survey pages the "Next" button will read "View Results"

  <!-- Survey Page screenshot goes here -->

  Upon clicking "View Results" The user is brought to the result page where they see their style title, and images that match that style. 

  <!-- Result screenshot goes here -->

> [Back to the top](#crate)


## Evolution

  For this project we used a [GitHub Project Board](https://github.com/GreyMatteOr/Crate/projects/1) to plan out our course-of-action, as well as [excalidraw.com](https://excalidraw.com/) to map out our data-flow, and wireframes to visualize our design.
  
  Data-flow:

  <img width="840" alt="Screen Shot 2020-12-06 at 3 49 37 PM" src="https://user-images.githubusercontent.com/14350203/102021632-5481ee00-3d3e-11eb-89c3-4f38c5938168.png">

  Wireframes:

<!-- Insert wireframes here -->

> [Back to the top](#crate)


## Challenges  
 
  One challenge the front-end faced was testing redux-connected components with Jest. Mocking the right redux functionality to make tests run, while also maintaining functionality that we could test proved to be quite time-consuming, but ended up being an excellent learning experience. 
 
> [Back to the top](#crate)


## Successes
 
  We learned we all could become familiar with a new code-base with unknown techs in a matter of days! The necessity of understanding the ways various technologies that were implemented in order to be able to add our new feature  was a great way to force us to become fluent in the code-base quickly. 
  
  The fact that Redux was previously integrated into this repo in a somewhat unconvential way made it so that we had to understand the ins and outs of Redux in order to understand the code. 
  
> [Back to the top](#crate)


## Original Author

- Atul Yadav - [GitHub](https://github.com/atulmy) · [Twitter](https://twitter.com/atulmy)


## Original Contributors

- Ebou Jobe - [GitHub](https://github.com/ebouJ)
- Nenad Radovanovic - [GitHub](https://github.com/nrcloud) · [Twitter](https://twitter.com/publicshone)
- Nicholas Drew - [GitHub](https://github.com/nickdrew)
- Mateus Abdala - [GitHub](https://github.com/mateusabdala)
- Hossein Nedaee - [GitHub](https://github.com/hosseinnedaee)
- Mohammad Afzal - [GitHub](https://github.com/afzalex)


## License

Copyright (c) 2018 Atul Yadav http://github.com/atulmy

The MIT License (http://www.opensource.org/licenses/mit-license.php)
