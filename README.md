## Project 1: Wikileeks Recipe Grabber

<p>&nbsp;</p>

---

<p>&nbsp;</p>

## **Table of Contents**

1. Project Description
2. Technologies Used
3. User Story
4. Web Application/Screenshots
5. Challenges
6. Direction for Future Development
7. Resources
8. Contributors

<p>&nbsp;</p>


## 1. **Project Description**

Ever wanted to create something new and unique in the kitchen, but needed a little inspiration or help with finding novel dinner ideas? It doesn't matter how much you love to cook, deciding what to have for dinner every day can feel like a chore. Moreover, scouring the internet for ideas can induce the paradox of choice and elicit feelings of anxiety at the overwhelming number of options available. The Wikileeks Recipe Grabber application takes this weight off your shoulders and makes the decisions for you, either by allowing you to choose which part of the meal you are craving, or if you're feeling **extra** spontaneous, curate random food or cocktail recipes based on rpeferences, all with the simple click of a few buttons.

Wikileeks Recipe Grabber is a web application that utilizes two external APIs (TheMealDB, TheCocktailDB) in order to generate the recipes. Additionally, the user is able to filter ingredients based on dietary restrictions/preferences to create a list of meals and assign them to each day of the week. If the user doesn't like the recipes presented, they can either generate a new recipe or, as a last resort, click a button that redirects them to the UberEats application.

<p>&nbsp;</p>

## 2. **Technologies Used**

* TheMealDB API
* TheCocktailDB API
* HTML
* CSS
* Bulma CSS Framework
* JavaScript
* Jquery
* JSON
* Moment.js
  
<p>&nbsp;</p>

## 3. **User Story**

As a person who likes to cook, I want to randomly generate creative recipes when I need inspiration so that I can try new food and cocktails.

Given I want a new recipe when I click on one of the course buttons I am selecting what kind of dish I am looking for and/or if I a cocktail recipe. I can also select none of the criteria, which selects all of them. I can also hit the **Restrictions** button and enter ingredients that I want to exclude from the recipe(s).

When I hit the **Submit** button...
* My new random recipes are generated on the screen and I can tab through days of the week to meal plan with numerous randomized recipes

When I click the **Print** button...
* I can print out the recipes

When I click the **Absolutely Not** button...
* The recipes are regenerated with my previously selected bounds
  
When I click the **Change Selections** button...
* The website takes me back to the beginning to reselect preference

Back on the homepage, when I click the **Surprise Me** button...
* A collection of recipes based on dish selections are displayed on the page with the daily meal planning option

Back on the homepage, when I click on the **Feelin’ Lazy** button...
* I am directed to UberEats

<p>&nbsp;</p>

## 4. **Web-Application/Screenshots**

**[Application Link](https://hannahcallison.github.io/project-1-official/)**

**Screenshots**

_Main Page_

![Main-Page](./assets/images/Main%20Page%20Screenshot.JPG)

_Recipe-Info-Example_

![Recipe-Info](./assets/images/Recipe%20Example%20Screenshot.JPG)

**GIFs**

_Restriction Filtering_

![Restrictions GIF](./assets/images/Restrictions%20GIF.gif)

_Surprise-Me_

![Surprise-Me GIF](./assets/images/Surprise%20Me%20GIF.gif)

_Weekly Planner and Print Function_

![Weekly-Planner, Print GIF](./assets/images/Meal%20Planner%20+%20Print%20GIF.gif)

_Feelin' Lazy_

![Feelin'-Lazy GIF](./assets/images/Feelin'%20Lazy%20GIF.gif)

_Absolutely Not and Change Selection_

![Absolutely-Not, Change-Selection GIF](./assets/images/Absolutely%20Not%20+%20Change%20Selection%20GIF.gif)

_Full Application Functionality_

![Full-App-Functionality GIF](./assets/images/Full%20Functionality%20GIF.gif)


<p>&nbsp;</p>

## 5. **Challenges**

- Multiple nesting JavaScript functions
- Fetching specific info nested deep within the external APIs
- Creating the JavaScript functions to filter by ingredients
- Including the different recipes within the date tabs for the weekly planner

<p>&nbsp;</p>

## 6. **Direction for Future Development**

- Add menu planning to a calendar
- Print button prints all 7 recipes
- Filter based on ingredients available to user
- Adding price range function to assist with budgeting and managing costs
- Creating a function to save the recipes to a 'favorites' link for future reference
- Integrating a video link (e.g. YouTube) as an additional guide, when available

<p>&nbsp;</p>

## 7. **Resources**

[TheMealDBAPI](https://www.themealdb.com/api.php)

[TheCocktailDBAPI](https://www.thecocktaildb.com/api.php)

[Moment.js](https://www.momentjs.com)

[JQuery](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js)

[Bulma-CSS-Framework](https://www.bulma.io)

<p>&nbsp;</p>

## 8. Contributors:

* Hannah Callison
* Eli Wood
* Jonathan Tran
* Joe Choe
