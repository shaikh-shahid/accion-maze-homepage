!(function ($) {
  "use strict";

  // Toggle scrolled class when page is scrolled
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#maze_header").addClass("scrolled");
    } else {
      $("#maze_header").removeClass("scrolled");
    }
  });
})(jQuery);
