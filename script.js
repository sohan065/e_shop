// Adjust the width of items to display four per row
function adjustItemWidth() {
  var items = $(".collection-list .col-lg-3");
  var containerWidth = $(".collection-list").width();
  var itemWidth = containerWidth / 4; // Divide the container width by 4 to get the width for each item

  items.css("width", itemWidth + "px");
}

// Call the function on page load and window resize
$(document).ready(function () {
  adjustItemWidth();
});

$(window).on("resize", function () {
  adjustItemWidth();
});
$(document).ready(function () {
  var $grid = $(".collection-list").isotope({
    itemSelector: ".col-lg-3",
    layoutMode: "fitRows",
  });

  // Filter items on button click
  $(".filter-button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
});
