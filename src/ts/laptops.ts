import $ from "jquery";

$(function f()
{
    let $currentCategory = $("#nav");
    let $buyButton = $(".submit-button");
    let $switcher = $(".theme-switcher");
    let $scrollTopBUtton = $(".scrolltopButton");
    let $searchBox = $("#search-box");
    let $searchingButton = $("#searching-button");
    let $navtreep = $(".navtreep");
    let $navtreel = $(".navtreel");
    let $navtreet = $(".navtreet");
    let $navtreew = $(".navtreew");
    let $phonesnav = $("#phonesnav");
    let $tabletsnav = $("#tabletsnav");
    let $wearablesnav = $("#wearablesnav");
    let $purchasesnav = $("#purchasesnav");
    let $aboutusnav = $("#aboutusnav");
    let $viewProductsButton = $("#viewAllProductsButton");

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
    let $productTitle = $(".product-title");
    let $productDesc = $(".product-desc");
    let $productPrice = $(".product-price");

    let counter: number = 0;

    localStorage.setItem("bodyDarkColor", JSON.stringify($("body").css("background-color", "rgb(47, 47, 47)")));
    localStorage.setItem("mainHeaderDarkColor", JSON.stringify($mainHeader.css("background-color", "rgb(47, 47, 47)")));
    localStorage.setItem("goodsTypeDarkColor", JSON.stringify($goodsType.css("color", "white")));
    localStorage.setItem("firstProductDarkColor", JSON.stringify($firstproduct.css("background-color", "rgb(146,146,146)")));
    localStorage.setItem("secondProductDarkColor", JSON.stringify($secondproduct.css("background-color", "rgb(146,146,146)")));
    localStorage.setItem("thirdProductDarkColor", JSON.stringify($thirdproduct.css("background-color", "rgb(146,146,146)")));
    localStorage.setItem("fourthProductDarkColor", JSON.stringify($fourthproduct.css("background-color", "rgb(146,146,146)")));
    localStorage.setItem("fifthProductDarkColor", JSON.stringify($fifthproduct.css("background-color", "rgb(146,146,146)")));
    localStorage.setItem("sixthProductDarkColor", JSON.stringify($sixthproduct.css("background-color", "rgb(146,146,146)")));
    localStorage.setItem("seventhProductDarkColor", JSON.stringify($seventhproduct.css("background-color", "rgb(146,146,146)")));
    localStorage.setItem("eighthProductDarkColor", JSON.stringify($eighthproduct.css("background-color", "rgb(146,146,146)")));
    localStorage.setItem("productTitleDarkColor", JSON.stringify($productTitle.css("color", "white")));
    localStorage.setItem("productPriceDarkColor", JSON.stringify($productPrice.css("color", "white")));
    localStorage.setItem("productDescDarkColor", JSON.stringify($productDesc.css("color", "white")));
    localStorage.setItem("currentCategoryDarkColor", JSON.stringify($currentCategory.css("color", "white")));
    localStorage.setItem("tabletsnavDarkColor", JSON.stringify($tabletsnav.css("color", "white")));
    localStorage.setItem("laptopsnavDarkColor", JSON.stringify($phonesnav.css("color", "white")));
    localStorage.setItem("wearablesnavDarkColor", JSON.stringify($wearablesnav.css("color", "white")));
    localStorage.setItem("purchasesnavDarkColor", JSON.stringify($purchasesnav.css("color", "white")));
    localStorage.setItem("aboutusnavDarkColor", JSON.stringify($aboutusnav.css("color", "white")));
    localStorage.setItem("searchBoxDarkColor", JSON.stringify($searchBox.css("color", "white")));
    localStorage.setItem("bodyLightColor", JSON.stringify($("body").css("background-color", "white")));

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
   
       $currentCategory.on("mouseover", () =>
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
            $productTitle.css("color", "white");
            $productPrice.css("color", "white");
            $productDesc.css("color", "white");
            $currentCategory.css("color", "white");
            $tabletsnav.css("color", "white");
            $phonesnav.css("color", "white");
            $wearablesnav.css("color", "white");
            $purchasesnav.css("color", "white");
            $aboutusnav.css("color", "white");
            $searchBox.css("color", "white");

            ++counter;
        }
        else
        {          
            $switcher.val("Light theme");

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
            $productTitle.css("color", "black");
            $productPrice.css("color", "black");
            $productDesc.css("color", "black");
            $currentCategory.css("color", "rgb(85,26,169)");
            $tabletsnav.css("color", "rgb(85,26,169)");
            $phonesnav.css("color", "rgb(85,26,169)");
            $wearablesnav.css("color", "rgb(85,26,169)");
            $purchasesnav.css("color", "rgb(85,26,169)");
            $aboutusnav.css("color", "rgb(85,26,169)");
            $searchBox.css("color", "black");

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

    localStorage.setItem("firstProductL", "HONOR MagicBook X16");
    localStorage.setItem("secondProductL", "HONOR MagicBook 14 AMD 2021");
    localStorage.setItem("thirdProductL", "HONOR MagicBook 14 2022 RTX");
    localStorage.setItem("fourthProductL", "HONOR MagicBook 14 2022");
    localStorage.setItem("fifthProductL", "HONOR MagicBook X 15 2022");
    localStorage.setItem("sixthProductL", "HONOR MagicBook X 14 2022Performa");
    localStorage.setItem("seventhProductL", "HONOR MagicBook 16");
    localStorage.setItem("eighthProductL", "HONOR MagicBook View 14");
});