import $ from "jquery";

$(function f()
{
    let $currentCategory = $("#nav");
    let $buyButton = $(".submit-button");
    let $switcher = $(".theme-switcher");
    let $scrollTopBUtton = $(".scrolltopButton");
    let $searchBox = $("#search-box").val();
    let $searchingButton = $("#searching-button");

    $searchingButton.on("click", () => 
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

    $currentCategory.on("mouseover", () =>
    {
      //  alert("Hello");
    });

    $switcher.on("click", () => {
        $switcher.val("Dark theme");
        alert("Hello");
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

  $buyButton.on("submit", () => 
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