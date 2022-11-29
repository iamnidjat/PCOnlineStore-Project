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
    let $phonesnav = $("#phonesnav");
    let $purchasesnav = $("#purchasesnav");
    let $aboutusnav = $("#aboutusnav");
    let $viewProductsButton = $("#viewAllProductsButton");

    let $mainHeader = $(".main-header");
    let $goodsType = $("#goods-type");
    let $firstproduct = $("#first-product");
    let $secondproduct = $("#second-product");
    let $thirdproduct = $("#third-product");
    let $fourthproduct = $("#fourth-product");
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
   
       $tabletsnav.on("mouseover", () =>
       {
           $navtreet.slideDown();
       });
   
       $laptopsnav.on("mouseover", () =>
       {
           $navtreel.slideDown();
       });
   
       $currentCategory.on("mouseover", () =>
       {
           $navtreew.slideDown();
       });
   
       ///////////////////////////////////////////////////

    $switcher.on("click", () => {
      if (counter === 0)
      {
          $switcher.val("Dark theme");
          

          $("body").css("background-color", "rgb(47, 47, 47)");
         // $mainHeader.css("background-color", "rgb(47, 47, 47)");
          $mainHeader.css("background-color", localStorage.getItem("rgb47"));
          $goodsType.css("color", "white");
          $firstproduct.css("background-color", "rgb(146, 146, 146)");
          $secondproduct.css("background-color", "rgb(146, 146, 146)");
          $thirdproduct.css("background-color", "rgb(146, 146, 146)");
          $fourthproduct.css("background-color", "rgb(146, 146, 146)");
          $productTitle.css("color", "white");
          $productPrice.css("color", "white");
          $productDesc.css("color", "white");
          $currentCategory.css("color", "white");
          $tabletsnav.css("color", "white");
          $laptopsnav.css("color", "white");
          $phonesnav.css("color", "white");
          $purchasesnav.css("color", "white");
          $aboutusnav.css("color", "white");

         // JSON.parse(localStorage.getItem("MainHeaderWearables")).css("background-color", "rgb(47, 47, 47)");

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
          $productTitle.css("color", "black");
          $productPrice.css("color", "black");
          $productDesc.css("color", "black");
          $currentCategory.css("color", "rgb(85,26,169)");
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

  //////////////////////////////////////////////////
  var rus = {
    'goods-type': "Мобильные телефоны",
    nav: "Телефоны",
    laptopsnav: "Ноутбуки",
    tabletsnav: "Планшеты",
    wearablesnav: "Часы",
    purchasesnav: "Мои покупки",
    aboutusnav: "Про нас",
    buyButton: "Купить",
    aboutus: "Про нас",
    contacts: "Контакты: 8800 7001677",
    address: "Адрес: Россия, Москва",
    partners: "Партнеры:",
  //  myswitcher: "Переключатель тем: Светлая тема"
  };

  var eng = {
    'goods-type': "Phones",
    nav: "Phones",
    laptopsnav: "Laptosp",
    tabletsnav: "Tablets",
    wearablesnav: "Wearables",
    purchasesnav: "My purchases",
    aboutusnav: "About us",
    buyButton: "Buy",
    aboutus: "About us",
    contacts: "Contacts: 8800 7001677",
    address: "Address: Россия, Москва",
    partners: "Partners: ",
  //  myswitcher: "Theme switcher: Light theme"
  };

  var aze = {
    'goods-types': "Mobil telefonlar",
    nav: "Telefonlar",
    laptopsnav: "Noutbuklar",
    tabletsnav: "Plansetler",
    wearablesnav: "Saatlar",
    purchasesnav: "Alislarim",
    aboutusnav: "Bizim haqqinda",
    buyButton: "Almaq",
    aboutus: "Bizim haqqinda",
    contacts: "Kontaktlar: 8800 7001677",
    address: "Unvan: Россия, Москва",
    partners: "Partnyorlar:",
  //  myswitcher: "Movzu deyisimi: Aciq movzu"
  };

  localStorage.setItem("firstProductW", "HONOR Watch GS 3");
  localStorage.setItem("secondProductW", "HONOR Band 6");
  localStorage.setItem("thirdProductW", "HONOR Watch GS Pro");
  localStorage.setItem("fourthProductW", "HONOR Watch ES");

  localStorage.setItem("MainHeaderWearables", JSON.stringify($mainHeader));
  localStorage.setItem("FirstProductWearables", JSON.stringify($firstproduct));
  localStorage.setItem("SecondProductWearables", JSON.stringify($secondproduct));
  localStorage.setItem("ThirdProductProductWearables", JSON.stringify($thirdproduct));
  localStorage.setItem("FourthProductWearables", JSON.stringify($fourthproduct));
  localStorage.setItem("ProductTitleWearables", JSON.stringify($productTitle));
  localStorage.setItem("ProductPriceWearables", JSON.stringify($productPrice));
  localStorage.setItem("ProductDescWearables", JSON.stringify($productDesc));
  localStorage.setItem("CurrentCategoryWearables", JSON.stringify($currentCategory));
  localStorage.setItem("PhonesNavWearables", JSON.stringify($phonesnav));
  localStorage.setItem("LaptopsNavWearables", JSON.stringify($laptopsnav));
  localStorage.setItem("TabletsNavWearables", JSON.stringify($tabletsnav));
  localStorage.setItem("PurchasesNavWearables", JSON.stringify($purchasesnav));
  localStorage.setItem("AboutUsNavWearables", JSON.stringify($aboutusnav));



  localStorage.setItem("rgb47", "rgb(47,47,47)");
});