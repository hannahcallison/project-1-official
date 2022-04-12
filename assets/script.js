// $(document).ready(function() {}

var APIKey = "1"
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
		'X-RapidAPI-Key': '069f91721dmsh71fe55c80edbb00p16c0b0jsnfef0228f163d'
	}
};

fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

//Lookup a random cocktail
//www.thecocktaildb.com/api/json/v1/1/random.php

fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(function(response){
        return response.json()
     })    
    .then(response => console.log(response))
    .catch(err => console.error(err));

// TODO functions
    // landing page 
    // "feeling lazy" button -> google page
    // "feelin' lucky" button ->
        // based on selected checkboxes, randomize parameters
        // think of a new name later
    // link to uber eats - open a new tab 
    // "submit" button -> take selected parameters, trigger customization modal, on submission of modal, add include/exclude selections to the original parameters and randomize based on that
    // show/hide pages based on how many/or options selected
        // show the 3 buttons on the recipe pages
    // "clicking print" button will trigger print html on user's computer
    // "absolutely not" button will randomize another recipe w/user's selected conditions
    // "change selections" button will bring user back to the landing page
    // appetizer = starter; dessert = dessert; entree = !dessert, !starter, !breakfast
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(function(response){
        return response.json()
     })    
    .then(response => console.log(response))
    .catch(err => console.error(err));

// setting variables for checkboxes
var appetizer = $("#appetizer"); 
var entree = $("#entree").val();
var cocktails = $("#cocktails").val();
var desserts = $("#desserts").val();

// submit button function for search
$("#submit-btn").click(function(event) {
    event.preventDefault();
    if (appetizer.checked == true) {
        console.log("success");
    }
    });
    
    // console.log(appetizer.val(), entree, cocktails, desserts)
// console.log(appetizer, entree, cocktails, desserts)


    // function foo(param1){
    //     // do xyz
    //     return;
    // }

    // //let or const

    // var foo = function(param1){
    //      // do xyz
    //      return;
    // }

    // var foo = (param1) =>{
    //     return;
    // }
    // var foo = param1 =>{
    //     return;
    // }
    // var foo = param1 => console.log();
    
