(function ($) {
  "use strict";

  $("html").smoothScroll();

  $(".hero-slider").slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    appendArrows: $(".hero-controller"),
    appendDots: $(".hero-controller"),
    prevArrow:
      '<button type="button" class="nav-arrow prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="nav-arrow after"><i class="fas fa-chevron-right"></i></button>',
  });

  $(".hero-controller .play-pause").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("playing")) {
      $(this).removeClass("playing").addClass("paused");
      $(this).html("<i class='fas fa-play'></i>Play");
      $(".hero-slider").slick("slickPause");
    } else if ($(this).hasClass("paused")) {
      $(this).removeClass("paused").addClass("playing");
      $(this).html("<i class='fas fa-pause'></i>Pause");
      $(".hero-slider").slick("slickPlay");
    }
  });

  // //initialize niceslelct js
  $(".nice-select").niceSelect();

  // //initialize wow js
  new WOW({}).init();
})(jQuery);
