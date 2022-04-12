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
    
                // ingredients
                var ingredient1 = data.meals[0].strIngredient1;
                var ingredient2 = data.meals[0].strIngredient2;
                var ingredient3 = data.meals[0].strIngredient3;
                var ingredient4 = data.meals[0].strIngredient4;
                var ingredient5 = data.meals[0].strIngredient5;
                var ingredient6 = data.meals[0].strIngredient6;
                var ingredient7 = data.meals[0].strIngredient7;
                var ingredient8 = data.meals[0].strIngredient8;
                var ingredient9 = data.meals[0].strIngredient9;
                var ingredient10 = data.meals[0].strIngredient10;
                var ingredient11 = data.meals[0].strIngredient11;
                var ingredient12 = data.meals[0].strIngredient12;
                var ingredient13 = data.meals[0].strIngredient13;
                var ingredient14 = data.meals[0].strIngredient14;
                var ingredient15 = data.meals[0].strIngredient15;
                var ingredient16 = data.meals[0].strIngredient16;
                var ingredient17 = data.meals[0].strIngredient17;
                var ingredient18 = data.meals[0].strIngredient18;
                var ingredient19 = data.meals[0].strIngredient19;
                var ingredient20 = data.meals[0].strIngredient20;
    
                // measurements
                var measure1 = data.meals[0].strMeasure1;
                var measure2 = data.meals[0].strMeasure2;
                var measure3 = data.meals[0].strMeasure3;
                var measure4 = data.meals[0].strMeasure4;
                var measure5 = data.meals[0].strMeasure5;
                var measure6 = data.meals[0].strMeasure6;
                var measure7 = data.meals[0].strMeasure7;
                var measure8 = data.meals[0].strMeasure8;
                var measure9 = data.meals[0].strMeasure9;
                var measure10 = data.meals[0].strMeasure10;
                var measure11 = data.meals[0].strMeasure11;
                var measure12 = data.meals[0].strMeasure12;
                var measure13 = data.meals[0].strMeasure13;
                var measure14 = data.meals[0].strMeasure14;
                var measure15 = data.meals[0].strMeasure15;
                var measure16 = data.meals[0].strMeasure16;
                var measure17 = data.meals[0].strMeasure17;
                var measure18 = data.meals[0].strMeasure18;
                var measure19 = data.meals[0].strMeasure19;
                var measure20 = data.meals[0].strMeasure20;
    
                // ingredient array
                ingredientsList = [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, ingredient16, ingredient17, ingredient18, ingredient19, ingredient20]
    
                // measurements array
                measureList = [measure1, measure2, measure3, measure4, measure5, measure6, measure7, measure8, measure9, measure10, measure11, measure12, measure13, measure14, measure15, measure16, measure17, measure18, measure19, measure20]
                
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
    
                // ingredients
                var ingredient1 = data.meals[0].strIngredient1;
                var ingredient2 = data.meals[0].strIngredient2;
                var ingredient3 = data.meals[0].strIngredient3;
                var ingredient4 = data.meals[0].strIngredient4;
                var ingredient5 = data.meals[0].strIngredient5;
                var ingredient6 = data.meals[0].strIngredient6;
                var ingredient7 = data.meals[0].strIngredient7;
                var ingredient8 = data.meals[0].strIngredient8;
                var ingredient9 = data.meals[0].strIngredient9;
                var ingredient10 = data.meals[0].strIngredient10;
                var ingredient11 = data.meals[0].strIngredient11;
                var ingredient12 = data.meals[0].strIngredient12;
                var ingredient13 = data.meals[0].strIngredient13;
                var ingredient14 = data.meals[0].strIngredient14;
                var ingredient15 = data.meals[0].strIngredient15;
                var ingredient16 = data.meals[0].strIngredient16;
                var ingredient17 = data.meals[0].strIngredient17;
                var ingredient18 = data.meals[0].strIngredient18;
                var ingredient19 = data.meals[0].strIngredient19;
                var ingredient20 = data.meals[0].strIngredient20;
    
                // measurements
                var measure1 = data.meals[0].strMeasure1;
                var measure2 = data.meals[0].strMeasure2;
                var measure3 = data.meals[0].strMeasure3;
                var measure4 = data.meals[0].strMeasure4;
                var measure5 = data.meals[0].strMeasure5;
                var measure6 = data.meals[0].strMeasure6;
                var measure7 = data.meals[0].strMeasure7;
                var measure8 = data.meals[0].strMeasure8;
                var measure9 = data.meals[0].strMeasure9;
                var measure10 = data.meals[0].strMeasure10;
                var measure11 = data.meals[0].strMeasure11;
                var measure12 = data.meals[0].strMeasure12;
                var measure13 = data.meals[0].strMeasure13;
                var measure14 = data.meals[0].strMeasure14;
                var measure15 = data.meals[0].strMeasure15;
                var measure16 = data.meals[0].strMeasure16;
                var measure17 = data.meals[0].strMeasure17;
                var measure18 = data.meals[0].strMeasure18;
                var measure19 = data.meals[0].strMeasure19;
                var measure20 = data.meals[0].strMeasure20;
    
                // ingredient array
                ingredientsList = [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, ingredient16, ingredient17, ingredient18, ingredient19, ingredient20]
    
                // measurements array
                measureList = [measure1, measure2, measure3, measure4, measure5, measure6, measure7, measure8, measure9, measure10, measure11, measure12, measure13, measure14, measure15, measure16, measure17, measure18, measure19, measure20]
                
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
        
                    // ingredients
                    var ingredient1 = data.meals[0].strIngredient1;
                    var ingredient2 = data.meals[0].strIngredient2;
                    var ingredient3 = data.meals[0].strIngredient3;
                    var ingredient4 = data.meals[0].strIngredient4;
                    var ingredient5 = data.meals[0].strIngredient5;
                    var ingredient6 = data.meals[0].strIngredient6;
                    var ingredient7 = data.meals[0].strIngredient7;
                    var ingredient8 = data.meals[0].strIngredient8;
                    var ingredient9 = data.meals[0].strIngredient9;
                    var ingredient10 = data.meals[0].strIngredient10;
                    var ingredient11 = data.meals[0].strIngredient11;
                    var ingredient12 = data.meals[0].strIngredient12;
                    var ingredient13 = data.meals[0].strIngredient13;
                    var ingredient14 = data.meals[0].strIngredient14;
                    var ingredient15 = data.meals[0].strIngredient15;
                    var ingredient16 = data.meals[0].strIngredient16;
                    var ingredient17 = data.meals[0].strIngredient17;
                    var ingredient18 = data.meals[0].strIngredient18;
                    var ingredient19 = data.meals[0].strIngredient19;
                    var ingredient20 = data.meals[0].strIngredient20;
        
                    // measurements
                    var measure1 = data.meals[0].strMeasure1;
                    var measure2 = data.meals[0].strMeasure2;
                    var measure3 = data.meals[0].strMeasure3;
                    var measure4 = data.meals[0].strMeasure4;
                    var measure5 = data.meals[0].strMeasure5;
                    var measure6 = data.meals[0].strMeasure6;
                    var measure7 = data.meals[0].strMeasure7;
                    var measure8 = data.meals[0].strMeasure8;
                    var measure9 = data.meals[0].strMeasure9;
                    var measure10 = data.meals[0].strMeasure10;
                    var measure11 = data.meals[0].strMeasure11;
                    var measure12 = data.meals[0].strMeasure12;
                    var measure13 = data.meals[0].strMeasure13;
                    var measure14 = data.meals[0].strMeasure14;
                    var measure15 = data.meals[0].strMeasure15;
                    var measure16 = data.meals[0].strMeasure16;
                    var measure17 = data.meals[0].strMeasure17;
                    var measure18 = data.meals[0].strMeasure18;
                    var measure19 = data.meals[0].strMeasure19;
                    var measure20 = data.meals[0].strMeasure20;
        
                    // ingredient array
                    ingredientsList = [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, ingredient16, ingredient17, ingredient18, ingredient19, ingredient20]
        
                    // measurements array
                    measureList = [measure1, measure2, measure3, measure4, measure5, measure6, measure7, measure8, measure9, measure10, measure11, measure12, measure13, measure14, measure15, measure16, measure17, measure18, measure19, measure20]
                    
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
    
            // ingredients
            var ingredient1 = data.drinks[0].strIngredient1;
            var ingredient2 = data.drinks[0].strIngredient2;
            var ingredient3 = data.drinks[0].strIngredient3;
            var ingredient4 = data.drinks[0].strIngredient4;
            var ingredient5 = data.drinks[0].strIngredient5;
            var ingredient6 = data.drinks[0].strIngredient6;
            var ingredient7 = data.drinks[0].strIngredient7;
            var ingredient8 = data.drinks[0].strIngredient8
            var ingredient9 = data.drinks[0].strIngredient9;
            var ingredient10 = data.drinks[0].strIngredient10;
            var ingredient11 = data.drinks[0].strIngredient11;
            var ingredient12 = data.drinks[0].strIngredient12;
            var ingredient13 = data.drinks[0].strIngredient13;
            var ingredient14 = data.drinks[0].strIngredient14;
            var ingredient15 = data.drinks[0].strIngredient15;
            var ingredient16 = data.drinks[0].strIngredient16;
            var ingredient17 = data.drinks[0].strIngredient17;
            var ingredient18 = data.drinks[0].strIngredient18;
            var ingredient19 = data.drinks[0].strIngredient19;
            var ingredient20 = data.drinks[0].strIngredient20;
            
            // measurements
            var measure1 = data.drinks[0].strMeasure1;
            var measure2 = data.drinks[0].strMeasure2;
            var measure3 = data.drinks[0].strMeasure3;
            var measure4 = data.drinks[0].strMeasure4;
            var measure5 = data.drinks[0].strMeasure5;
            var measure6 = data.drinks[0].strMeasure6;
            var measure7 = data.drinks[0].strMeasure7;
            var measure8 = data.drinks[0].strMeasure8;
            var measure9 = data.drinks[0].strMeasure9;
            var measure10 = data.drinks[0].strMeasure10;
            var measure11 = data.drinks[0].strMeasure11;
            var measure12 = data.drinks[0].strMeasure12;
            var measure13 = data.drinks[0].strMeasure13;
            var measure14 = data.drinks[0].strMeasure14;
            var measure15 = data.drinks[0].strMeasure15;
            var measure16 = data.drinks[0].strMeasure16;
            var measure17 = data.drinks[0].strMeasure17;
            var measure18 = data.drinks[0].strMeasure18;
            var measure19 = data.drinks[0].strMeasure19;
            var measure20 = data.drinks[0].strMeasure20;
                
            // ingredient array
            ingredientsList = [ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7, ingredient8, ingredient9, ingredient10, ingredient11, ingredient12, ingredient13, ingredient14, ingredient15, ingredient16, ingredient17, ingredient18, ingredient19, ingredient20]
    
            // measurements array
            measureList = [measure1, measure2, measure3, measure4, measure5, measure6, measure7, measure8, measure9, measure10, measure11, measure12, measure13, measure14, measure15, measure16, measure17, measure18, measure19, measure20]
                
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
    // "absolutely not" button will randomize another recipe w/user's selected conditions
    // "change selections" button will bring user back to the landing page
    // appetizer = starter; dessert = dessert; entree = !dessert, !starter, !breakfast