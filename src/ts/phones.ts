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
    let $tabletsnav = $("#tabletsnav");
    let $wearablesnav = $("#wearablesnav");
    let $purchasesnav = $("#purchasesnav");
    let $aboutusnav = $("#aboutusnav");
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
    let $productTitle = $(".product-title");
    let $productDesc = $(".product-desc");
    let $productPrice = $(".product-price");

    ///////////////////////////////////
    let counter: number = 0;

    $searchingButton.on("click", () => 
    {
        if ($searchBox.val() === "Phones" || $searchBox.val() === "phones" || $searchBox.val() === "phone" || $searchBox.val() === "Phone")
        {
            $.ajax({
                url: 'phones.html',
                success: (data) =>
                {
                    //
                },
                method: "GET",
                crossDomain: true,
            });
        }
        
        else if ($searchBox.val() === "Main" || $searchBox.val() === "main" || $searchBox.val() === "home" || $searchBox.val() === "Home")
        {
           //window.location.href = 'index.html';
            $.ajax({
                url: '~/pages/index.html',
                success: (data) =>
                {
                    window.location.href = 'index.html';
                },
                error: (data) =>
                {
                  alert("error!")  
                },
                method: "POST",
                crossDomain: true,
            });
        }
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

    ///////////////////////////////////////////////////

    $switcher.on("click", () => {
        if (counter === 0)
        {
            $switcher.val("Dark theme");

           // localStorage.setItem("bodyDarkColor", "rgb(47, 47, 47)");

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
            $laptopsnav.css("color", "white");
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
            $laptopsnav.css("color", "rgb(85,26,169)");
            $wearablesnav.css("color", "rgb(85,26,169)");
            $purchasesnav.css("color", "rgb(85,26,169)");
            $aboutusnav.css("color", "rgb(85,26,169)");
            $searchBox.css("color", "black");

          //  localStorage.setItem("bodyLightColor", "white");

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
    
    $viewProductsButton.on("click", () => {
        
    });


    // window.addEventListener("click",function(){
    //     localStorage.setItem("page",document.getElementsByTagName("html")[0].innerHTML);
    // }); // 

    // window.addEventListener("load",function(){
    //     if(localStorage.getItem("page")) document.getElementsByTagName("html")[0].innerHTML = localStorage.getItem("page");});
});