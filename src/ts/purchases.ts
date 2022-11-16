import $ from "jquery";

$(function f()
{
    let $switcher = $(".theme-switcher");
    let $scrollTopBUtton = $(".scrolltopButton");

    $switcher.on("click", () => {
        $switcher.val("Dark theme");
        alert("Hello");
    });

    $scrollTopBUtton.on("click", () => {
      $('body,html').animate({ scrollTop: 0}, 1500);
    });
  
    $(window).on("scroll", () => {
      let scrolled = $(window).scrollTop();
  
      if(scrolled > 100) 
      {
          $scrollTopBUtton.fadeIn();
      } 
      else 
      {
          $scrollTopBUtton.fadeOut();
      }
  });
});