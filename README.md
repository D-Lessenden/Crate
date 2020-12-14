# Crate 👕👖📦

> A Full-Stack Project by: 

[Bret Merritt](https://github.com/bretm9),

[Daniel Lessenden](https://github.com/D-Lessenden),

[Hashim Gari](https://github.com/#5hashmaster3k),

[Logan Riffel](https://github.com/#4lkriffell),

[Matthew Lane](https://github.com/GreyMatteOr),

and [Michael Walker](https://github.com/MichaelEWalker87)
<!-- [Link to deployed website](https://example.herokuapp.com/) -->


## Contents

1. [Technologies](#technologies)
1. [Overview](#overview)
1. [Setup](#setup)
1. [How To Use Our New Feature](#how-to-use-our-new-feature)
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

> [Back to the top](#crate)


## How To Use Our New Feature

* Navigate to our feature:

  * Once the front-end and back-end servers are up and running visit `localhost:3000` in your browser
  * Go to the `Create An Account` page by clicking the sign-up button in the top right of the page
  * Create a new user using the input fields
  * Login using your new credentials.
  * Navigate to the `Crates` page by clicking the `Crates` button on the navigation bar
  * Once on the `Crates` page, click the `subscribe` button under a crate that sounds appealing to you
  * You will now be brought to the `Survey` page! Welcome to our feature!
  
* Using our feature:

  * On the `Survey` page you are presented with various clothing items. Click as many or as few as you find appealing. Your choices will determine your style result!
  * Once you’re happy with your selection on the first page, click the `Next` button. You will be brought to another portion of the survey, with the same functionality.
  * Navigate through the rest of the survey, selecting clothes that you enjoy until you come to the last page, where the `Next` button is replaced with `View Your Result`.
  * Click the `View Your Result` button to be brought to the `Survey Result` page. 
  * This page indicates your calculated style based on your clothing choices in the survey. Your style can be anything from `Classic and Casual` to `Modern and Formal`.
  * Now click the `Subscriptions` button to navigate to the `Subscriptions` page, where you can view your new subscription!


## Design

  For our survey feature, We have two types of pages. A survey page, which is repeated several times until the survey is complete (populated with new items), and a result page.

  Each survey page lists several clothing items to choose from. Each item has a style attribute associated with it that our application keeps track of. The user can select as many or as few items as they like, and after navigating through several different survey pages the "Next" button will read "View Results"

 <img width="1024" alt="Screen Shot 2020-12-14 at 8 57 39 AM" src="https://user-images.githubusercontent.com/65369751/102110773-6e790a80-3dea-11eb-8218-027f19641ed0.png">

  Upon clicking "View Results" The user is brought to the result page where they see their style title, and images that match that style. 

<img width="1024" alt="Screen Shot 2020-12-14 at 9 00 14 AM" src="https://user-images.githubusercontent.com/65369751/102111082-cca5ed80-3dea-11eb-95d2-9767225b80b7.png">

> [Back to the top](#crate)


## Evolution

  For this project we used a [GitHub Project Board](https://github.com/GreyMatteOr/Crate/projects/1) to plan out our course-of-action, as well as [excalidraw.com](https://excalidraw.com/) to map out our data-flow, and wireframes to visualize our design.
  
  Data-flow:

  <img width="840" alt="User Stories" src="https://user-images.githubusercontent.com/14350203/102021632-5481ee00-3d3e-11eb-89c3-4f38c5938168.png">

  Wireframes:
  
* Survey Page 


  <img width="420" alt="Wireframe of the survey page" src="https://i.imgur.com/oiB5Esd.png">
  

* Overview Page (to be added) 


  <img width="420" alt="Wireframe of the the overview page" src="https://i.imgur.com/vt2nXTu.png">

  
* Final Result Page  


  <img width="420" alt="Wireframe of the the final page" src="https://i.imgur.com/oiB5Esd.png">


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
