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
    let $laptopsnav = $("#laptopsnav");
    let $phonesnav = $("#phonesnav");
    let $wearablesnav = $("#wearablesnav");
    let $purchasesnav = $("#purchasesnav");
    let $aboutusnav = $("#aboutusnav");
    let $viewProductsButton = $("#viewAllProductsButton");

    let $mainHeader = $(".main-header");
    let $goodsType = $("#goods-type");
    let $firstproduct = $("#first-product");
    let $secondproduct = $("#second-product");
    let $productTitle = $(".product-title");
    let $productDesc = $(".product-desc");
    let $productPrice = $(".product-price");

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
            
            $("body").css("background-color", "rgb(47, 47, 47)");
            $mainHeader.css("background-color", "rgb(47, 47, 47)");
            $goodsType.css("color", "white");
            $firstproduct.css("background-color", "rgb(146, 146, 146)");
            $secondproduct.css("background-color", "rgb(146, 146, 146)");
            $productTitle.css("color", "white");
            $productPrice.css("color", "white");
            $productDesc.css("color", "white");
            $currentCategory.css("color", "white");
            $phonesnav.css("color", "white");
            $laptopsnav.css("color", "white");
            $wearablesnav.css("color", "white");
            $purchasesnav.css("color", "white");
            $aboutusnav.css("color", "white");

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
            $productTitle.css("color", "black");
            $productPrice.css("color", "black");
            $productDesc.css("color", "black");
            $currentCategory.css("color", "rgb(85,26,169)");
            $phonesnav.css("color", "rgb(85,26,169)");
            $laptopsnav.css("color", "rgb(85,26,169)");
            $wearablesnav.css("color", "rgb(85,26,169)");
            $purchasesnav.css("color", "rgb(85,26,169)");
            $aboutusnav.css("color", "rgb(85,26,169)");

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

    localStorage.setItem("firstProductT", "HONOR Pad X8 Lite");
    localStorage.setItem("secondProductT", "HONOR Pad 8");

    localStorage.setItem("MainHeaderTablets", JSON.stringify($mainHeader));
    localStorage.setItem("FirstProductTablets", JSON.stringify($firstproduct));
    localStorage.setItem("SecondProductTablets", JSON.stringify($secondproduct));
    localStorage.setItem("ProductTitleTablets", JSON.stringify($productTitle));
    localStorage.setItem("ProductPriceTablets", JSON.stringify($productPrice));
    localStorage.setItem("ProductDescTablets", JSON.stringify($productDesc));
    localStorage.setItem("CurrentCategoryTablets", JSON.stringify($currentCategory));
    localStorage.setItem("PhonesNavTablets", JSON.stringify($phonesnav));
    localStorage.setItem("LaptopsNavTablets", JSON.stringify($laptopsnav));
    localStorage.setItem("WearablesNavTablets", JSON.stringify($wearablesnav));
    localStorage.setItem("PurchasesNavTablets", JSON.stringify($purchasesnav));
    localStorage.setItem("AboutUsNavTablets", JSON.stringify($aboutusnav));
});