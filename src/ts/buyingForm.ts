import $ from "jquery";

$(function f()
{
    let $resetButton = $("#resetButton");
    let $confirmButton = $("#confirmButton");
    let $switcher = $(".theme-switcher");
    let $scrollTopBUtton = $(".scrolltopButton");
    let $buyingForm = $(".buyingForm");
    let $searchBox = $("#search-box").val();
    let $searchingButton = $("#searching-button");
    let $nameBox = $("#nameBox");
    let $surnameBox = $("#surnameBox");
    let $lastnameBox = $("#lastnameBox");
    let $phoneBox = $("#phoneBox");
    let $productTitle = $("#productLabel");
    let $productPrice = $("#priceLabel");
    let $mainHeader = $(".main-header");
    let $ad = $("#ad");
    let $namelabel = $("#nameLabel");
    let $surnamelabel = $("#surnameLabel");
    let $lastnamelabel = $("#lastnameLabel");
    let $phonelabel = $("#phoneLabel");

    let $navtreep = $(".navtreep");
    let $navtreel = $(".navtreel");
    let $navtreet = $(".navtreet");
    let $navtreew = $(".navtreew");
    let $laptopsnav = $("#laptopsnav");
    let $tabletsnav = $("#tabletsnav");
    let $wearablesnav = $("#wearablesnav");
    let $purchasesnav = $("#purchasesnav");
    let $aboutusnav = $("#aboutusnav");
    let $phonesnav = $("#phonesnav");

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
            $productTitle.css("color", "white");
            $productPrice.css("color", "white");
            $namelabel.css("color", "white");
            $surnamelabel.css("color", "white");
            $lastnamelabel.css("color", "white");
            $phonelabel.css("color", "white");
            $tabletsnav.css("color", "white");
            $laptopsnav.css("color", "white");
            $phonesnav.css("color", "white");
            $wearablesnav.css("color", "white");
            $purchasesnav.css("color", "white");
            $aboutusnav.css("color", "white");
            $ad.css("color", "white");

            ++counter;
        }
        else
        {
            $switcher.val("Light theme");
            
            $("body").css("background-color", "white");
            $mainHeader.css("background-color", "white");
            $productTitle.css("color", "black");
            $productPrice.css("color", "black");
            $namelabel.css("color", "black");
            $surnamelabel.css("color", "black");
            $lastnamelabel.css("color", "black");
            $phonelabel.css("color", "black");
            $tabletsnav.css("color", "rgb(85,26,169)");
            $laptopsnav.css("color", "rgb(85,26,169)");
            $phonesnav.css("color", "rgb(85,26,169)");
            $wearablesnav.css("color", "rgb(85,26,169)");
            $purchasesnav.css("color", "rgb(85,26,169)");
            $aboutusnav.css("color", "rgb(85,26,169)");
            $ad.css("color", "black");

            --counter;
        }
    });

    $scrollTopBUtton.on("click", () => {
      $('body,html').animate({ scrollTop: 0}, 1500);
    });
  
    $(window).on("scroll", () => {
      let scrolled = $(window).scrollTop();
  
      if (scrolled > 100) 
      {
          $scrollTopBUtton.fadeIn();
      } 
      else 
      {
          $scrollTopBUtton.fadeOut();
      }
    });

    $resetButton.on("click", () => {
        $nameBox.val('');
        $surnameBox.val('');
        $lastnameBox.val('');
        $phoneBox.val('');
        // $productTitle.text("Product: " + localStorage.getItem("firstProductP"));
        // $productPrice.text("Price: " );
    });

    $buyingForm.on("submit", () => 
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

    localStorage.setItem("ProductTitle", JSON.stringify($productTitle));
    localStorage.setItem("ProductPrice", JSON.stringify($productPrice));
});