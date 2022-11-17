import $ from "jquery";

$(function f()
{
    let $resetButton = $("#resetButton");
    let $confirmButton = $("#confirmButton");
    let $switcher = $(".theme-switcher");
    let $scrollTopBUtton = $(".scrolltopButton");
    let $buyingForm = $(".buyingForm");

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

    $resetButton.on("click", () => {
        
    });

    $buyingForm.on("submit", () => 
    {
        $.ajax({
            url: ``,
            success: (data) =>
            {

            },
            method: "GET",
            crossDomain: true,
        });
    });
});