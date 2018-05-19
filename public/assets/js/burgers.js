// app.js

$(document).ready(function(){


    //event handler to create a burger

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        console.log('burger name: ' + $("#bu").val().trim());
        console.log('devoured: ' + $("[name=devoured]:checked").val());
        var newBurger = {
            burger_name: $("#bu").val().trim(),
            devoured: $("[name=devoured]:checked").val()
        };

        // Send the POST request.
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    //event handler to update a burger
});