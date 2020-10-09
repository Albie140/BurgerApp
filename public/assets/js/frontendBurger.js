$(document).ready(function () {
    $(".eatBurgerBtn").on("click", function (event) {
        event.preventDefault()
        var  id =$(this).data("id");
        // var devouredburg= $(this).data("devouredburg");

        // var Eaten={
        //     devoured: devouredburg
        // };
        //AJAX calls
        $.ajax({url:"/burgers" + id,  
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
            name: $(".burger_id").val().trim(),
        };
        $.ajax("/burgers", { 
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