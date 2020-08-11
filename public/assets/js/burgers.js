// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevouredBurger = {
      devour: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredBurger
    }).then(
      function() {
        console.log("devoured that burger quick, boiii", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burgerName").val().trim(),
      burger: $("[name=burger]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("We have a new burger...");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
