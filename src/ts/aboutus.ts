import $ from "jquery";

$(function f()
{
    let $switcher = $(".theme-switcher");
    let $scrollTopBUtton = $(".scrolltopButton");
    let $searchBox = $("#search-box").val();
    let $searchingButton = $("#searching-button");

    let $nav = $("#nav");
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
    let $mainHeader = $(".main-header");
    let $abouttext = $(".about-text");
    let $abouttext2 = $(".about-text2");
    let $abouthonor = $(".about-honor");
    let $abouttitle = $(".about-title");

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
            $wearablesnav.css("color", "white");
            $aboutusnav.css("color", "white");
            $abouthonor.css("color", "white");
            $abouttitle.css("color", "white");
            $abouttext.css("color", "white");
            $abouttext2.css("color", "white");
            $nav.css("color", "white");
            $("h3").css("color", "white");
            $("p").css("color", "white");

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
            $wearablesnav.css("color", "rgb(85,26,169)");
            $aboutusnav.css("color", "rgb(85,26,169)");
            $nav.css("color", "rgb(85,26,169)");
            $abouthonor.css("color", "black");
            $abouttitle.css("color", "black");
            $abouttext.css("color", "black");
            $abouttext2.css("color", "black");
            $("h3").css("color", "black");
            $("p").css("color", "black");


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