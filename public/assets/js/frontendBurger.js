$(document).ready(function () {
    $(".eatBurgerBtn").on("click", function (event) {
        event.preventDefault()
        var  burgerData= {
            id: $(this).attr('data-id')	
        }

        //AJAX calls
        $.ajax({
            method: "PUT",
            url: burgerData
        }).then(function () {
            console.log("Looks delicious!");

            window.location = "/";
        });

    });
    $(".devour-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#newBurger_name").val().trim(),
            
        };
        $.ajax("/burgers/create", {
            method: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("That was yummy!");
                // Reload the page to get the updated list
                window.location = "/";
            });
        });
})