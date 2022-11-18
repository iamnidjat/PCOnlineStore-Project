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
        $switcher.val("Dark theme");
        alert("Hello");
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