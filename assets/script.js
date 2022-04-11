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
    
