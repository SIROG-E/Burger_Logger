// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // Add new Burger
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
        burger_name: $("#newburger").val().trim(),
        devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      //   validate: async (input) => {
      //     if (input == "") {
      //         return "Please enter a burger name.";
      //     }
      //     return true;
      // }
    }).then(function() {
        console.log("Added a new burger");
        // Reload the page to get the updated burger list.
        location.reload();
    });
});
  
    $(".eat-burger").on("click", function(event) {
      event.preventDefault();

      var id = $(this).data("id");
      var devouredState = {
          devoured: 1
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: devouredState
      }).then(function() {
          console.log("Burger devoured");
          location.reload();
      });
  });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
      });
    });
  });