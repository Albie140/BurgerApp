$(document).ready(function () {
    $(".eatBurgerBtn").on("click", function (event) {
        event.preventDefault()
        var  id =$(this).data("id");
        // var devouredburg= $(this).data("devouredburg");

        // var Eaten={
        //     devoured: devouredburg
        // };
        //AJAX calls
        $.ajax({url:"/api/burgers" + id,  
            method: "PUT",
            
        }).then(function (data) {
            console.log(data);
            window.location = "/";
        });

    });
    $(".devour-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $(".burger_name").val().trim(),
        };
        $.ajax("/api/burgers", { 
            method: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Looks yummy!");
                // Reload the page to get the updated list
                window.location = "/";
            });
        });
})