
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer',
  isAnimated: true,
});

$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  

$(".filters .btn").click(function(e) {
  e.preventDefault();

  var filter = $(this).attr("data-filter");

  $grid.masonryFilter({
      filter: function () {
          if (!filter) return true;
          return $(this).attr("data-filter") == filter;
      }
  });
});

var btnContainer = document.getElementById("btn-container");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}