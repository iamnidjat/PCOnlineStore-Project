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
    let $aboutusnav = $("#aboutusnav");
    let $switcher = $(".theme-switcher");
    let $viewProductsButton = $("#viewAllProductsButton");
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