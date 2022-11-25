import $ from "jquery";

$(function f()
{
    let $searchBox = $("#search-box").val();
    let $searchingButton = $("#searching-button");
    let $scrollTopBUtton = $(".scrolltopButton");
    let $navtreep = $(".navtreep");
    let $navtreel = $(".navtreel");
    let $navtreet = $(".navtreet");
    let $navtreew = $(".navtreew");
    let $laptopsnav = $("#laptopsnav");
    let $tabletsnav = $("#tabletsnav");
    let $wearablesnav = $("#wearablesnav");
    let $purchasesnav = $("#purchasesnav");
    let $phonesnav = $("#phonesnav");
    let $aboutusnav = $("#aboutusnav");
    let $switcher = $(".theme-switcher");
    let $viewProductsButton = $("#viewAllProductsButton");
    let $mainHeader = $(".main-header");
    let counter: number = 0;

    $searchingButton.on("click", () => 
    {
        $.ajax({
            url: ``,
            success: (data) =>
            {
                //window.open("file2.html")
            },
            method: "GET",
            crossDomain: true,
        });
    });

    
    $switcher.on("click", () => {
        if (counter === 0)
        {
            $switcher.val("Dark theme");
        
            $("body").css("background-color", "rgb(47, 47, 47)");
            $mainHeader.css("background-color", "rgb(47, 47, 47)");
            $tabletsnav.css("color", "white");
            $laptopsnav.css("color", "white");
            $phonesnav.css("color", "white");
            $purchasesnav.css("color", "white");
            $aboutusnav.css("color", "white");
  

            ++counter;
        }
        else
        {
            $switcher.val("Light theme");
            
            $("body").css("background-color", "white");
            $mainHeader.css("background-color", "white");
            $tabletsnav.css("color", "rgb(85,26,169)");
            $laptopsnav.css("color", "rgb(85,26,169)");
            $phonesnav.css("color", "rgb(85,26,169)");
            $purchasesnav.css("color", "rgb(85,26,169)");
            $aboutusnav.css("color", "rgb(85,26,169)");


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