import $ from "jquery";

$(function f()
{
    let $currentCategory = $("#nav");
    let $buyButton = $(".submit-button");
    let $switcher = $(".theme-switcher");

    $currentCategory.on("mouseover", () =>
    {
      //  alert("Hello");
    });

    $switcher.on("click", () => {
        $switcher.val("Dark theme");
        alert("Hello");
    });
});