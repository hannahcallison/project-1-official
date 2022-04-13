var APIKey = "1"
// Cocktail //
fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(function(response){
        return response.json()
     })    
    .then(response => console.log(response))
    .catch(err => console.error(err));



// Random Food //
$("#searchresults").css('display', 'none')


function recipeGrabber() {
    function appetizer () {

        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=starter`)
        .then (function(response){
        return response.json()
        })
        .then(function(data){
        console.log(data)
        var i = Math.floor(Math.random() * data.meals.length)
        var id = data.meals[i].idMeal
    
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(function(response){
                return response.json()
            })    
            .then(function(data) {
    
                console.log(data)
                
                var meal = data.meals[0].strMeal;
                var thumbnail = data.meals[0].strMealThumb;
                var instructions = data.meals[0].strInstructions;
    
                var apiListLimit = 20
                // ingredients, consolidated ingredientsList
                var ingredientsList = []
                for (var i = 1; i <= apiListLimit; i++) {
                    ingredientsList.push(data.meals[0][`strIngredient${i}`])
                }

                // measurements, consolidated measureList
                var measureList = []
                for (var i = 1; i <= apiListLimit; i++) {
                    measureList.push(data.meals[0][`strMeasure${i}`])
                }
                // put results on the page
                $('#results').append(`
                
                    <img src="${thumbnail}"><img>
                    <h1>${meal}</h1>
    
                `)
    
                for (let i = 0; i < ingredientsList.length; i++) {
                    $('#results').append(`<p>${measureList[i]} ${ingredientsList[i]}</p>`)
                }
    
                $('#results').append(instructions)
    
            })
            .catch(err => console.error(err));
        })
    }  
    if( $("#appetizer").is(":checked") ){
        appetizer()
    }
    function dessert () {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert`)
        .then (function(response){
        return response.json()
        })
        .then(function(data){
        console.log(data)
        var i = Math.floor(Math.random() * data.meals.length)
        var id = data.meals[i].idMeal
    
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(function(response){
                return response.json()
            })    
            .then(function(data) {
    
                console.log(data)
                
                var meal = data.meals[0].strMeal;
                var thumbnail = data.meals[0].strMealThumb;
                var instructions = data.meals[0].strInstructions;
                
                var apiListLimit = 20
                // ingredients, consolidated ingredientsList
                var ingredientsList = []
                for (var i = 1; i <= apiListLimit; i++) {
                    ingredientsList.push(data.meals[0][`strIngredient${i}`])
                }

                // measurements, consolidated measureList
                var measureList = []
                for (var i = 1; i <= apiListLimit; i++) {
                    measureList.push(data.meals[0][`strMeasure${i}`])
                }
                // put results on the page
                $('#results').append(`
                
                    <img src="${thumbnail}"><img>
                    <h1>${meal}</h1>
    
                `)
    
                for (let i = 0; i < ingredientsList.length; i++) {
                    $('#results').append(`<p>${measureList[i]} ${ingredientsList[i]}</p>`)
                }
    
                $('#results').append(instructions)
    
            })
            .catch(err => console.error(err));
        })
    
        console.log("success")
    
    }
    if($("#dessert").is(":checked") ){
        dessert()
    }
    function entrees (){
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then (function(response){
            return response.json()
            })
            .then(function(data){
             var category = data.meals[0].strCategory
             if (category === "Dessert" || category === "Starter"){
                 entrees()
                } else{
                    var meal = data.meals[0].strMeal;
                    var thumbnail = data.meals[0].strMealThumb;
                    var instructions = data.meals[0].strInstructions;
        

                    var apiListLimit = 20
                    // ingredients, consolidated ingredientsList
                    var ingredientsList = []
                    for (var i = 1; i <= apiListLimit; i++) {
                        ingredientsList.push(data.meals[0][`strIngredient${i}`])
                    }
    
                    // measurements, consolidated measureList
                    var measureList = []
                    for (var i = 1; i <= apiListLimit; i++) {
                        measureList.push(data.meals[0][`strMeasure${i}`])
                    }
                    
                    // put results on the page
                    $('#results').append(`
                    
                        <img src="${thumbnail}"><img>
                        <h1>${meal}</h1>
        
                    `)
        
                    for (let i = 0; i < ingredientsList.length; i++) {
                        $('#results').append(`<p>${measureList[i]} ${ingredientsList[i]}</p>`)
                    }
        
                    $('#results').append(instructions)
                }
            })
    }

    if($("#entree").is(":checked")){
        entrees()
    }

    function cocktails () {

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then (function(response){
            return response.json()
        })
        .then(function(data) {
    
            console.log(data)
                
            var drink = data.drinks[0].strDrink;
            var thumbnail = data.drinks[0].strDrinkThumb;
            var instructions = data.drinks[0].strInstructions;
    
            var apiListLimit = 20
            // ingredients
            var ingredientsList = []
            for (var i = 1; i <= apiListLimit; i++) {
                ingredientsList.push(data.drinks[0][`strIngredient${i}`])
            }

            // measurements
            var measureList = []
            for (var i = 1; i <= apiListLimit; i++) {
                measureList.push(data.drinks[0][`strMeasure${i}`])
            }
            // put results on the page
            $('#results').append(`
                
                <img src="${thumbnail}"><img>
                <h1>${drink}</h1>
    
            `)
    
            for (let i = 0; i < ingredientsList.length; i++) {
                if(ingredientsList[i] == null || ingredientsList[i] == undefined){
                    ingredientsList[i] = ""
                } else {
                    $('#results').append(`<p>${measureList[i]} ${ingredientsList[i]}</p>`)
                }}
    
            $('#results').append(instructions)
        })
        .catch(err => console.error(err));
    }


    if( $("#cocktails").is(":checked") ){
        cocktails()
    }

    $("#landing-page").css('display', 'none')
    $("#searchresults").css('display', 'block')
}

$("#surprise").click(function(event){
    event.preventDefault()
    recipeGrabber()
})



// setting variables for checkboxes
var appetizer = $("#appetizer"); 
var entree = $("#entree").val();
var cocktails = $("#cocktails").val();
var desserts = $("#desserts").val();
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


// submit button function for search//
$("#submit-btn").click(function(event) {
    event.preventDefault();
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    if( $(".checkbox").is(":checked") ){
        console.log("success")
        alert("Checkbox Is checked");
        // Pushes value to filter//
    }
    else{
        alert("Checkbox Is not checked");
        // Do nothing//
    }

    modal.style.display = "block"
    });
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// "submit" button -> take selected parameters, trigger customization modal, on submission of modal, add include/exclude selections to the original parameters and randomize based on that

// show/hide pages based on how many/or options selected
    // show the 3 buttons on the recipe pages

// "clicking print" button will trigger print html on user's computer
function display() {
    window.print();
}

    // "absolutely not" button will randomize another recipe w/user's selected conditions
    // "change selections" button will bring user back to the landing page
    // appetizer = starter; dessert = dessert; entree = !dessert, !starter, !breakfast