import $ from "jquery";

$(function f()
{
    let $currentCategory = $("#nav");
    let $buyButton = $(".submit-button");
    let $switcher = $(".theme-switcher");
    let $scrollTopBUtton = $(".scrolltopButton");
    let $searchBox = $("#search-box").val();
    let $searchingButton = $("#searching-button");
    let $navtreep = $(".navtreep");
    let $navtreel = $(".navtreel");
    let $navtreet = $(".navtreet");
    let $navtreew = $(".navtreew");
    let $laptopsnav = $("#laptopsnav");
    let $tabletsnav = $("#tabletsnav");
    let $phonesnav = $("#phonesnav");
    let $viewProductsButton = $("#viewAllProductsButton");
    let counter: number = 0;

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

       ////////////////////////////////////////////////////////
       $phonesnav.on("mouseover", () =>
       {
           $navtreep.slideDown();
       });
   
       $tabletsnav.on("mouseover", () =>
       {
           $navtreet.slideDown();
       });
   
       $laptopsnav.on("mouseover", () =>
       {
           $navtreel.slideDown();
       });
   
       $currentCategory.on("mouseover", () =>
       {
           $navtreew.slideDown();
       });
   
       $phonesnav.on("mouseleave", () =>
       {
           $navtreep.slideUp();
       });
   
       $tabletsnav.on("mouseleave", () =>
       {
           $navtreet.slideUp();
       });
   
       $laptopsnav.on("mouseleave", () =>
       {
           $navtreel.slideUp();
       });
   
       $currentCategory.on("mouseleave", () =>
       {
           $navtreew.slideUp();
       });
   
       ///////////////////////////////////////////////////

    $switcher.on("click", () => {
      if (counter === 0)
      {
          $switcher.val("Dark theme");
          alert("Dark");
          ++counter;
      }
      else
      {
          $switcher.val("Light theme");
          alert("Light");
          --counter;
      }
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