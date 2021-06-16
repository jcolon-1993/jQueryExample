$(function ()
{
  var $list, $newitemForm, $newItemButton;
  // Empty String
  var item = "";
  // Cahce the unordered list
  $list = $("ul");

  // Cache the form to add new items
  $newitemForm = $("#newItemForm");

  // Cache button to show form.
  $newItemButton = $("#newItemButton");

  //Hide List items
  $("li").hide().each(function(index)
  {
    //fade them in.
    $(this).delay(450 * index).fadeIn(1600);;
  });

  // Item Counter
  // Declare Function.
  function updateCount()
  {
    // Number of items in list.
    var items = $("li[class!=complete]").length;

    // Added into counter circle.
    $("#counter").text(items);
  }
  // Call the function
  updateCount();

  //Setup for new items
  //Show the button
  $newItemButton.show();

  // Hide the form
  $newitemForm.hide();

  // When new item clicked
  $("#showForm").on("click", function()
  {
    // Hide the button
    $newItemButton.hide();

    // Show the form
    $newitemForm.show();
  });

  // Adding a new list item
  // When a new list item is submitted
  $newitemForm.on("submit", function(e)
  {
    // Prevent form being submitted
    e.preventDefault();

    // Get value of text input
    var text = $("input:text").val();

    // Add item to end of the list.
    $list.append("<li>" + text + "</li>");

    // Empty the text input
    $("input:text").val("");

    //Update the counter
    updateCount();
  });

  // Click handling - uses delegation on <ul> element
  $list.on("click", "li", function()
  {
    // Cache the element in a jQuery object.
    var $this = $(this);

    // Is item complete
    var complete = $this.hasClass("complete");

    // Check if item is complete
    if (complete === true)
    {
      // If so, animate opacity + padding
      $this. animate(
        {
          opacity: 0.0,
          paddingLeft: "+=180"

          // Use callback when animation completes.
        }, 500, "swing", function()
        {

          //Then completely remove item.
          $this.remove();
        });
    }
    // Otherwise indicate it is complete
    else
    {
      // Get the text from the list item
      item = $this.text();

      // Remove the list item
      $this.remove();

      // Add back to end of list as complete
      // Hide it so it can be faded in.
      $list.append("<li class=\'complete\'>" + item + "</li>")
      .hide().fadeIn(300);
      updateCount();

      // End of else option
      // End of event handler
    }
  });
});
