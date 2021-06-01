# SmartKitchen
Web app link: https://webdev-group-project.herokuapp.com/

## Features
Provide a platform for people who love cooking to find their favorite recipes, save recipes on their own page.
Admin can publish new recipes, edit and delete their post and explore things by different categories.

### Targeted Users
  - Admin/Premium User
    - Create, login and edit profile page
    - Publish, edit, delete recipes, search posted history
  - Regular User
    - Create and login personal account
    - Search and add favourite recipes to his/her page, follow other users

## Tech Stack
### Frontend
- Tech: React, CSS, JavaScript
  - Login:
  - Navbar: React-Bootstrap API
- Implementation
  - Home Page
    - About: a page that explains our mission and design of the site
    - Sign in
  - Search page
    - search by input text: a page for exploring recipes by different categories (type in auto-fill: ad-...)
    - search by categories: select certain meal type
  - Detail page
    - listed recipes: title, directions, category
  - Profile page
    - personal information, liked recipes
    - Publish: authenticated user may enter recipe description, category and item image url when adding a new post 
    - History: posted recipes

### Backend
- Tech: Node.js, Express, MongoDB
  - Backend business logic: Node.js
  - Server: Express
  - Database: MongoDB
- Implementation
  - Model
    - Post {title, directions, category, img url}
    - Post can be edited, delete, add
  - User
    - Account info
    - User can sign in and out

## About The API

https://www.themealdb.com/api.php

- Search meal by name
  https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

- Lookup full meal details by id
  https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

- List all Categories, Area, Ingredients
  https://www.themealdb.com/api/json/v1/1/list.php?c=list
  https://www.themealdb.com/api/json/v1/1/list.php?a=list
  https://www.themealdb.com/api/json/v1/1/list.php?i=list

## Other Info
**Copyright 2021 © Software**
