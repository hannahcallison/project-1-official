// setting variables for checkboxes
var appetizer = $("#appetizer");
var entree = $("#entree").val();
var cocktails = $("#cocktails").val();
var desserts = $("#desserts").val();
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var restriction = $('#restrictions')
var allRestrictions = []

$("#search-results").css('display', 'none')

$(function () {

    var allIngredients = []

    // Ingredients List //
    fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {

            console.log(data)

            var apiListLimit = data.meals.length

            for (var i = 0; i < apiListLimit; i++) {
                allIngredients.push(data.meals[i].strIngredient)
            }

            console.log(allIngredients)

        })
        .catch(err => console.error(err));

    $("#restrictions").autocomplete({
        source: allIngredients
    });

});

function addRestriction() {
    if ($('#restrictions').val().trim() === "") {
        return;
    } else if (allRestrictions.includes($('#restrictions').val().trim())) {
        return;
    } else {
        event.preventDefault();
        $('#selections').append(`<p>${restriction[0].value.trim()}</p>`);
        allRestrictions.push(restriction[0].value.trim());
        $('#restrictions').val() = "";
    }
}

$('#restrictions-btn').click(function (event) {
    event.preventDefault();
    addRestriction()
})

$('#restrictions').on("keyup", function (event) {

    if (event.keyCode === 13) {
        addRestriction()
    }

});

$('#selections').click(function (event) {
    event.preventDefault();
    event.target.remove();
})

function recipeGrabber() {

    for (let n = 1; n < 8; n++) {

        function appetizer() {

            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=starter`)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    var i = Math.floor(Math.random() * data.meals.length)
                    var id = data.meals[i].idMeal

                    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                        .then(function (response) {
                            return response.json()
                        })
                        .then(function (data) {

                            var meal = data.meals[0].strMeal;
                            var thumbnail = data.meals[0].strMealThumb;
                            var instructions = data.meals[0].strInstructions;

                            var apiListLimit = 20;
                            // ingredients, consolidated ingredientsList
                            var ingredientsList = [];
                            for (var i = 1; i <= apiListLimit; i++) {
                                ingredientsList.push(data.meals[0][`strIngredient${i}`]);
                            };

                            // measurements, consolidated measureList
                            var measureList = [];
                            for (var i = 1; i <= apiListLimit; i++) {
                                measureList.push(data.meals[0][`strMeasure${i}`]);
                            };

                            // restricted ingredients check
                            for (let i = 0; i < allRestrictions.length; i++) {
                                if (ingredientsList.includes(allRestrictions[i])) {
                                    appetizer();
                                    return;
                                };

                            };

                            // put results on the page
                            $(`#day${n}-appetizer`).append(`<img src="${thumbnail}"></img>`);
                            $(`#day${n}-app-content`).append(`<h1>${meal}</h1>`);

                            for (let i = 0; i < ingredientsList.length; i++) {
                                if (ingredientsList[i] == null || ingredientsList[i] == undefined || measureList[i] == null || measureList[i] == undefined) {
                                    ingredientsList[i] = "";
                                    measureList[i] = "";
                                } else {
                                    $(`#day${n}-app-content`).append(`<p>${measureList[i]} ${ingredientsList[i]}</p>`);
                                };
                            };

                            $(`#day${n}-app-content`).append(`<p>${instructions}</p>`);
                            $(`#day${n}-app-content`).parent().attr('class', 'card block' )

                           //isEmpty();

                        })
                        .catch(err => console.error(err));
                })
        }

        if ($("#appetizer").is(":checked")) {
            appetizer()
        };

        function entrees() {

            fetch('https://www.themealdb.com/api/json/v1/1/random.php')
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {

                    var category = data.meals[0].strCategory
                    if (category === "Dessert" || category === "Starter") {
                        entrees()
                    } else {

                        var meal = data.meals[0].strMeal;
                        var thumbnail = data.meals[0].strMealThumb;
                        var instructions = data.meals[0].strInstructions;

                        var apiListLimit = 20;
                        // ingredients, consolidated ingredientsList
                        var ingredientsList = []
                        for (var i = 1; i <= apiListLimit; i++) {
                            ingredientsList.push(data.meals[0][`strIngredient${i}`]);
                        };

                        // measurements, consolidated measureList
                        var measureList = []
                        for (var i = 1; i <= apiListLimit; i++) {
                            measureList.push(data.meals[0][`strMeasure${i}`]);
                        };

                        // restricted ingredients check
                        for (let i = 0; i < allRestrictions.length; i++) {
                            if (ingredientsList.includes(allRestrictions[i])) {
                                entrees();
                                return;
                            };
                        };

                        // put results on the page
                        $(`#day${n}-entree`).append(`<img src="${thumbnail}"></img>`);
                        $(`#day${n}-entree-content`).append(`<h1>${meal}</h1>`);

                        for (let i = 0; i < ingredientsList.length; i++) {
                            if (ingredientsList[i] == null || ingredientsList[i] == undefined || measureList[i] == null || measureList[i] == undefined) {
                                ingredientsList[i] = "";
                                measureList[i] = "";
                            } else {
                                $(`#day${n}-entree-content`).append(`<p>${measureList[i]} ${ingredientsList[i]}</p>`);
                            };
                        };

                        $(`#day${n}-entree-content`).append(`<p>${instructions}</p>`);
                        $(`#day${n}-entree-content`).parent().attr('class', 'card block' )

                    }

                })

        };

        if ($("#entree").is(":checked")) {
            entrees()
        };

        function dessert() {

            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert`)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {

                    console.log(data)
                    var i = Math.floor(Math.random() * data.meals.length)
                    var id = data.meals[i].idMeal

                    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                        .then(function (response) {
                            return response.json()
                        })
                        .then(function (data) {

                            var meal = data.meals[0].strMeal;
                            var thumbnail = data.meals[0].strMealThumb;
                            var instructions = data.meals[0].strInstructions;

                            var apiListLimit = 20;
                            // ingredients, consolidated ingredientsList
                            var ingredientsList = [];
                            for (var i = 1; i <= apiListLimit; i++) {
                                ingredientsList.push(data.meals[0][`strIngredient${i}`]);
                            };

                            // measurements, consolidated measureList
                            var measureList = [];
                            for (var i = 1; i <= apiListLimit; i++) {
                                measureList.push(data.meals[0][`strMeasure${i}`]);
                            };

                            // restricted ingredients check
                            for (let i = 0; i < allRestrictions.length; i++) {
                                if (ingredientsList.includes(allRestrictions[i])) {
                                    dessert();
                                    return;
                                };
                            };

                            // put results on the page
                            $(`#day${n}-dessert`).append(`<img src="${thumbnail}"></img>`);
                            $(`#day${n}-dessert-content`).append(`<h1>${meal}</h1>`);

                            for (let i = 0; i < ingredientsList.length; i++) {
                                if (ingredientsList[i] == null || ingredientsList[i] == undefined || measureList[i] == null || measureList[i] == undefined) {
                                    ingredientsList[i] = "";
                                    measureList[i] = "";
                                } else {
                                    $(`#day${n}-dessert-content`).append(`<p>${measureList[i]} ${ingredientsList[i]}</p>`);
                                };
                            };

                            $(`#day${n}-dessert-content`).append(`<p>${instructions}</p>`);
                            $(`#day${n}-dessert-content`).parent().attr('class', 'card block' )

                        })
                        .catch(err => console.error(err));
                })

            console.log("success")

        };

        if ($("#dessert").is(":checked")) {
            dessert()
        };

        function cocktails() {

            fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {

                    var drink = data.drinks[0].strDrink;
                    var thumbnail = data.drinks[0].strDrinkThumb;
                    var instructions = data.drinks[0].strInstructions;
                    console.log(instructions);

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
                            cocktails();
                            return;
                        }
                    }

                    // put results on the page
                    $(`#day${n}-cocktails`).append(`<img src="${thumbnail}"></img>`);
                    $(`#day${n}-cocktails-content`).append(`<h1>${drink}</h1>`);

                    for (let i = 0; i < ingredientsList.length; i++) {
                        if (ingredientsList[i] == null || ingredientsList[i] == undefined || measureList[i] == null || measureList[i] == undefined) {
                            ingredientsList[i] = "";
                            measureList[i] = "";
                        } else {
                            $(`#day${n}-cocktails-content`).append(`<p>${measureList[i]} ${ingredientsList[i]}</p>`);
                        };
                    };
                    $(`#day${n}-cocktails-content`).append(`<p>${instructions}</p>`);
                    $(`#day${n}-cocktails-content`).parent().attr('class', 'card block');
                })
                .catch(err => console.error(err));
        };

        if ($("#cocktails").is(":checked")) {
            cocktails()
        // } else {
        //     $(".card").addClass("hidden")
        };

        if (!($("#appetizer").is(":checked")) && !($("#entree").is(":checked")) && !($("#dessert").is(":checked")) && !($("#cocktails").is(":checked"))) {
            appetizer();
            entrees();
            dessert();
            cocktails();
        }


        $("#landing-page").css('display', 'none')
        $("#search-results").css('display', 'block')
    }
};

function isEmpty(){
    for (let i = 0; i < $('.recipe-content').length; i++) {
        
        // console.log($($('.recipe-content')[i]).is(":empty"))
        // console.log($('.recipe-content')[i].textContent)
        if ($($('.recipe-content')[i]).is(":empty")){
           $($('.recipe-content')[i]).parent().attr("class", "hidden")
        }
    }
}
isEmpty();

$("#surprise").click(function (event) {
    event.preventDefault()
    recipeGrabber()
});

// submit button function for search//
$("#submit-btn").click(function (event) {
    event.preventDefault();
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block"
});
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// "submit" button -> take selected parameters, trigger customization modal, on submission of modal, add include/exclude selections to the original parameters and randomize based on that
$('#modal-submit').click(function (event) {
    event.preventDefault();
    modal.style.display = "none";
    recipeGrabber();
});

// "clicking print" button will trigger print html on user's computer
function display() {
    window.print();
}

// "absolutely not" button will randomize another recipe w/user's selected conditions
$('#abs-not').click(function (event) {
    event.preventDefault();
    $('.card').children('img').remove();
    $('.recipe-content').text("");
    recipeGrabber();
})

// "change selections" button will bring user back to the landing page
$('#change-selections').click(function () {
    window.location.reload();
});

// daily planner tabs
$('#day-tabs').click(function () {

    console.log('success');

    for (let i = 1; i < 8; i++) {

        if ($(`#day${i}-radio`).is(':checked')) {
            $(`#day${i}`).removeClass('hidden')
        };

        if (!($(`#day${i}-radio`).is(':checked'))) {
            $(`#day${i}`).addClass('hidden')
        };

    }

});


$('header').click(function (){
    window.location.reload();
})

$('#day3-tab').append(moment().add(2, 'days').format('dddd'))
$('#day4-tab').append(moment().add(3, 'days').format('dddd'))
$('#day5-tab').append(moment().add(4, 'days').format('dddd'))
$('#day6-tab').append(moment().add(5, 'days').format('dddd'))
$('#day7-tab').append(moment().add(6, 'days').format('dddd'))
