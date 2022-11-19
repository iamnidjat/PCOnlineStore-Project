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
    let $phonesnav = $("#phonesnav");
    let $wearablesnav = $("#wearablesnav");
    let $purchasesnav = $("#purchasesnav");
    let $aboutusnav = $("#aboutusnav");
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
   
       $currentCategory.on("mouseover", () =>
       {
           $navtreet.slideDown();
       });
   
       $laptopsnav.on("mouseover", () =>
       {
           $navtreel.slideDown();
       });
   
       $wearablesnav.on("mouseover", () =>
       {
           $navtreew.slideDown();
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

    $(window).on("scroll", () => {
      let scrolled = $(window).scrollTop();
  
      if(scrolled > 100) 
      {
          $scrollTopBUtton.fadeIn();
          $navtreep.slideUp();
          $navtreel.slideUp();
          $navtreet.slideUp();
          $navtreew.slideUp();
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

//   let $product1Title = $("#product1Title").val();

//   localStorage.setItem("FirstProduct", JSON.stringify($product1Title));

});