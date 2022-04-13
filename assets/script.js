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

$( function() {

    var allIngredients = []

    // Ingredients List //
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    .then(function(response){
        return response.json()
    })
    .then(function(data) {

        console.log(data)

        var apiListLimit = data.meals.length

        for (var i = 0; i < apiListLimit; i++) {
            allIngredients.push(data.meals[i].strIngredient)
        }

        console.log(allIngredients)

    })
    .catch(err => console.error(err));

    $( "#restrictions" ).autocomplete({
        source: allIngredients
    });

});

var restriction = $('#restrictions')
var allRestrictions = []

$('#restrictions-btn').click(function(event) {
    event.preventDefault()
    $('#selections').append(`<p>${restriction[0].value}</p>`)
    allRestrictions.push(restriction[0].value)
    console.log(allRestrictions)
});

function recipeGrabber() {

    function appetizer() {

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

                // restricted ingredients check
                for (let i = 0; i < allRestrictions.length; i++) {
                    if (ingredientsList.includes(allRestrictions[i])) {
                        appetizer()
                    }
                }

                // put results on the page
                $('#appetizer-res').append(`
                
                    <img src="${thumbnail}"><img>
                    <h1>${meal}</h1>
    
                `)
    
                for (let i = 0; i < ingredientsList.length; i++) {
                    $('#appetizer-res').append(`<p>${measureList[i]} ${ingredientsList[i]}</p>`)
                }
    
                $('#appetizer-res').append(instructions)
    
            })
            .catch(err => console.error(err));
        })
    }

    if( $("#appetizer").is(":checked") ){
        appetizer()
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

                    // restricted ingredients check
                for (let i = 0; i < allRestrictions.length; i++) {
                    if (ingredientsList.includes(allRestrictions[i])) {
                        entrees()
                    }
                }
                    
                    // put results on the page
                    $('#entree-res').append(`
                    
                        <img src="${thumbnail}"><img>
                        <h1>${meal}</h1>
        
                    `)
        
                    for (let i = 0; i < ingredientsList.length; i++) {
                        $('#entree-res').append(`<p>${measureList[i]} ${ingredientsList[i]}</p>`)
                    }
        
                    $('#entree-res').append(instructions)
                }
            })
    }

    if($("#entree").is(":checked")){
        entrees()
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

                // restricted ingredients check
                for (let i = 0; i < allRestrictions.length; i++) {
                    if (ingredientsList.includes(allRestrictions[i])) {
                        dessert()
                    }
                }

                // put results on the page
                $('#dessert-res').append(`
                
                    <img src="${thumbnail}"><img>
                    <h1>${meal}</h1>
    
                `)
    
                for (let i = 0; i < ingredientsList.length; i++) {
                    $('#dessert-res').append(`<p>${measureList[i]} ${ingredientsList[i]}</p>`)
                }
    
                $('#dessert-res').append(instructions)
    
            })
            .catch(err => console.error(err));
        })
    
        console.log("success")
    
    }

    if($("#dessert").is(":checked") ){
        dessert()
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

            // restricted ingredients check
            for (let i = 0; i < allRestrictions.length; i++) {
                if (ingredientsList.includes(allRestrictions[i])) {
                    cocktails()
                }
            }

            // put results on the page
            $('#cocktails-res').append(`
                
                <img src="${thumbnail}"><img>
                <h1>${drink}</h1>
    
            `)
    
            for (let i = 0; i < ingredientsList.length; i++) {
                if(ingredientsList[i] == null || ingredientsList[i] == undefined){
                    ingredientsList[i] = ""
                } else {
                    $('#cocktails-res').append(`<p>${measureList[i]} ${ingredientsList[i]}</p>`)
                }}
    
            $('#cocktails-res').append(instructions)
        })
        .catch(err => console.error(err));
    }

    if( $("#cocktails").is(":checked") ){
        cocktails()
    }

    if(!($("#appetizer").is(":checked")) && !($("#entree").is(":checked")) && !($("#dessert").is(":checked")) && !($("#cocktails").is(":checked"))){
        appetizer();
        entrees();
        dessert();
        cocktails();
    }

    $("#landing-page").css('display', 'none')
    $("#searchresults").css('display', 'block')

};

$("#surprise").click(function(event){
    event.preventDefault()
    recipeGrabber()
});

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
$('#modal-submit').click(function(event) {
    event.preventDefault();
    modal.style.display = "none";
    recipeGrabber();
});

// show/hide pages based on how many/or options selected
    // show the 3 buttons on the recipe pages

// "clicking print" button will trigger print html on user's computer
function display() {
    window.print();
}

// "absolutely not" button will randomize another recipe w/user's selected conditions
$('#abs-not').click(function(event) {
    event.preventDefault();
    $('#appetizer-res').text("");
    $('#entree-res').text("");
    $('#dessert-res').text("");
    $('#cocktails-res').text("");
    recipeGrabber();
})

// "change selections" button will bring user back to the landing page
$('#change-selections').click(function() {
    window.location.reload();
})