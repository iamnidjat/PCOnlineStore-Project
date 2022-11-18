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


    ///////////////////////////////////
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

    $currentCategory.on("mouseleave", () =>
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

    $wearablesnav.on("mouseleave", () =>
    {
        $navtreew.slideUp();
    });

    ///////////////////////////////////////////////////

    $switcher.on("click", () => {
        if (counter === 0)
        {
            $switcher.val("Dark theme");
            alert("Dark");

            $("body").css("background-color", "rgb(47, 47, 47)");
            $mainHeader.css("background-color", "rgb(47, 47, 47)");
            $goodsType.css("color", "white");

            ++counter;
        }
        else
        {
            $switcher.val("Light theme");
            alert("Light");

            $("body").css("background-color", "white");
            $mainHeader.css("background-color", "white");
            $goodsType.css("color", "black");

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