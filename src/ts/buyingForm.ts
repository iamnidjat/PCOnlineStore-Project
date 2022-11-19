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

    let $navtreep = $(".navtreep");
    let $navtreel = $(".navtreel");
    let $navtreet = $(".navtreet");
    let $navtreew = $(".navtreew");
    let $laptopsnav = $("#laptopsnav");
    let $tabletsnav = $("#tabletsnav");
    let $wearablesnav = $("#wearablesnav");
    let $purchasesnav = $("#purchasesnav");
    let $aboutusnav = $("#aboutusnav");

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

    $resetButton.on("click", () => {
        $nameBox.val('');
        $surnameBox.val('');
        $lastnameBox.val('');
        $phoneBox.val('');
       // $productTitle.val(localStorage.getItem("FirstProduct"));
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


});