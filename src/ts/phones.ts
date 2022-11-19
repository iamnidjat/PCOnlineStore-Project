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
    let $wearablesnav = $("#wearablesnav");
    let $viewProductsButton = $("#viewAllProductsButton");
    ///////////////////////////////////
    let $mainHeader = $(".main-header");
    let $goodsType = $("#goods-type");
    let $firstproduct = $("#first-product");
    let $secondproduct = $("#second-product");
    let $thirdproduct = $("#third-product");
    let $fourthproduct = $("#fourth-product");
    let $fifthproduct = $("#fifth-product");
    let $sixthproduct = $("#sixth-product");
    let $seventhproduct = $("#seventh-product");
    let $eighthproduct = $("#eighth-product");

    ///////////////////////////////////
    let counter: number = 0;
    let pcounter: number = 0;
    let lcounter: number = 0;
    let tcounter: number = 0;
    let wcounter: number = 0;

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
    $currentCategory.on("mouseover", () =>
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

    $wearablesnav.on("mouseover", () =>
    {
        $navtreew.slideDown();
    });

    // $currentCategory.on("mouseleave", () =>
    // {
    //     $navtreep.slideUp();
    // });

    // $tabletsnav.on("mouseleave", () =>
    // {
    //     $navtreet.slideUp();
    // });

    // $laptopsnav.on("mouseleave", () =>
    // {
    //     $navtreel.slideUp();
    // });

    // $wearablesnav.on("mouseleave", () =>
    // {
    //     $navtreew.slideUp();
    // });

    ///////////////////////////////////////////////////

    $switcher.on("click", () => {
        if (counter === 0)
        {
            $switcher.val("Dark theme");
            alert("Dark");

            $("body").css("background-color", "rgb(47, 47, 47)");
            $mainHeader.css("background-color", "rgb(47, 47, 47)");
            $goodsType.css("color", "white");
            $firstproduct.css("background-color", "rgb(146, 146, 146)");
            $secondproduct.css("background-color", "rgb(146, 146, 146)");
            $thirdproduct.css("background-color", "rgb(146, 146, 146)");
            $fourthproduct.css("background-color", "rgb(146, 146, 146)");
            $fifthproduct.css("background-color", "rgb(146, 146, 146)");
            $sixthproduct.css("background-color", "rgb(146, 146, 146)");
            $seventhproduct.css("background-color", "rgb(146, 146, 146)");
            $eighthproduct.css("background-color", "rgb(146, 146, 146)");

            ++counter;
        }
        else
        {
            $switcher.val("Light theme");
            alert("Light");

            $("body").css("background-color", "white");
            $mainHeader.css("background-color", "white");
            $goodsType.css("color", "black");
            $firstproduct.css("background-color", "rgb(247, 247, 247)");
            $secondproduct.css("background-color", "rgb(247, 247, 247)");
            $thirdproduct.css("background-color", "rgb(247, 247, 247)");
            $fourthproduct.css("background-color", "rgb(247, 247, 247)");
            $fifthproduct.css("background-color", "rgb(247, 247, 247)");
            $sixthproduct.css("background-color", "rgb(247, 247, 247)");
            $seventhproduct.css("background-color", "rgb(247, 247, 247)");
            $eighthproduct.css("background-color", "rgb(247, 247, 247)");

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
    
    $viewProductsButton.on("click", () => {
        
    });
});