// app.js

$(document).ready(function(){

    // event handler to update a burger

    $('#change-devoured').on('click', function (event) {

        var data_id = $(this).data('id');
        var devoure = $(this).data('devoured');

        var newBurger = {
            devoured: devoure
        };

        console.log(data_id);

        $.ajax("/api/burgers/" + data_id, {
            type: 'PUT',
            data: newBurger
        }).then(function(err, result){
            console.log("burger devoured!");
            location.reload();
        });
    });

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

    //event handler to delete a burger

    $('#delete-burger').on('click', function (event) {

        var delete_id = $(this).data('id');

        $.ajax("/api/burgers/" + delete_id, {
            type: "DELETE"
        }).then(function(){
            console.log("burger deleted!");
            location.reload();
        })
    });
});