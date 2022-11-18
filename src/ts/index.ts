import $ from "jquery";

$(function f()
{
    let $searchBox = $("#search-box").val();
    let $searchingButton = $("#searching-button");

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
});