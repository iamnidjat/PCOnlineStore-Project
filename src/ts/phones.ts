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
    //////////////////////////////////////////////
    let $Uklang = $(".UK");
    let $Ruslang = $(".Russia");
    let $Azelang = $(".Azerbaijan");
   //  let $aboutus = $("#aboutus");
   //  let $contacts = $("#contacts");
   //  let $address = $("#address");
   //  let $partners = $("#partners");
   //  let $myswitcher = $("#switcher");

    ///////////////////////////////////


   // localStorage.removeItem("bodyDarkColor");
   // localStorage.removeItem("mainHeaderDarkColor");
   // localStorage.removeItem("goodsTypeDarkColor");
   // localStorage.removeItem("firstProductDarkColor");
   // localStorage.removeItem("secondProductDarkColor");
   // localStorage.removeItem("thirdProductDarkColor");
   // localStorage.removeItem("fourthProductDarkColor");
   // localStorage.removeItem("fifthProductDarkColor");
   // localStorage.removeItem("sixthProductDarkColor");
   // localStorage.removeItem("seventhProductDarkColor");
   // localStorage.removeItem("eighthProductDarkColor");
   // localStorage.removeItem("productTitleDarkColor");
   // localStorage.removeItem("searchBoxDarkColor");
   // localStorage.removeItem("productTitleDarkColor");
   // localStorage.removeItem("productPriceDarkColor");
   // localStorage.removeItem("productDescDarkColor");
   // localStorage.removeItem("currentCategoryDarkColor");
   // localStorage.removeItem("tabletsnavDarkColor");
   // localStorage.removeItem("laptopsnavDarkColor");
   // localStorage.removeItem("wearablesnavDarkColor");
   // localStorage.removeItem("purchasesnavDarkColor");
   // localStorage.removeItem("aboutusnavDarkColor");

    let counter: number = 0;

    //changeColor("bodyDarkColor", "rgb(47, 47, 47)");
   //  changeColor("bodyLightColor", "white");

   if (JSON.parse(localStorage.getItem("counter")) === 0)
   {
      changeColor("bodyLightColor", "white");
   }

   else if (JSON.parse(localStorage.getItem("counter")) === 1)
   {
      changeColor("bodyDarkColor", "rgb(47, 47, 47)");
   }

    $viewProductsButton.on('click', function() {
        
     });

    /////////////////////////////////////////////////////////////////////

    $searchingButton.on("click", () => 
    {
        if ($searchBox.val() === "Phones" || $searchBox.val() === "phones" || $searchBox.val() === "phone" || $searchBox.val() === "Phone")
        {
            $.ajax({
                url: '/phones.html',
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
            $.ajax({
                url: 'index.html',
                success: (data) =>
                {
                    window.location.href = 'index.html';
                },
                error: (data) =>
                {
                  alert("blablabla!")  
                },
                method: "GET",
                crossDomain: true,
            });
        }

        else if ($searchBox.val() === "Tablets" || $searchBox.val() === "Tablet" || $searchBox.val() === "tablets" || $searchBox.val() === "tablet")
        {
           //window.location.href = 'index.html';
            $.ajax({
                url: '/tablets.html',
                success: (data) =>
                {
                    window.location.href = 'tablets.html';
                },
                error: (data) =>
                {
                  alert("error!")  
                },
                method: "GET",
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

               changeColor("bodyDarkColor", "rgb(47, 47, 47)");
            // changeBackground("bodyDarkColor", "rgb(47, 47, 47)");

            // JSON.parse(localStorage.getItem("bodyDarkColor"));
            // JSON.parse(localStorage.getItem("mainHeaderDarkColor"));
            // JSON.parse(localStorage.getItem("goodsTypeDarkColor"));
            // JSON.parse(localStorage.getItem("firstProductDarkColor"));
            // JSON.parse(localStorage.getItem("secondProductDarkColor"));
            // JSON.parse(localStorage.getItem("thirdProductDarkColor"));
            // JSON.parse(localStorage.getItem("fourthProductDarkColor"));
            // JSON.parse(localStorage.getItem("fifthProductDarkColor"));
            // JSON.parse(localStorage.getItem("sixthProductDarkColor"));
            // JSON.parse(localStorage.getItem("seventhProductDarkColor"));
            // JSON.parse(localStorage.getItem("eighthProductDarkColor"));
            // JSON.parse(localStorage.getItem("productTitleDarkColor"));
            // JSON.parse(localStorage.getItem("productPriceDarkColor"));
            // JSON.parse(localStorage.getItem("productDescDarkColor"));
            // JSON.parse(localStorage.getItem("currentCategoryDarkColor"));
            // JSON.parse(localStorage.getItem("tabletsnavDarkColor"));
            // JSON.parse(localStorage.getItem("laptopsnavDarkColor"));
            // JSON.parse(localStorage.getItem("wearablesnavDarkColor"));
            // JSON.parse(localStorage.getItem("purchasesnavDarkColor"));
            // JSON.parse(localStorage.getItem("aboutusnavDarkColor"));
            // JSON.parse(localStorage.getItem("searchBoxDarkColor"));

            ++counter;

            localStorage.setItem("counter", JSON.stringify(counter));
     
        }
        else
        {
            $switcher.val("Light theme");

            changeColor("bodyLightColor", "white");
         // changeBackground("bodyLightColor", "white");
            // JSON.parse(localStorage.getItem("bodyLightColor"));
            // JSON.parse(localStorage.getItem("mainHeaderLightColor"));
            // JSON.parse(localStorage.getItem("goodsTypeLightColor"));
            // JSON.parse(localStorage.getItem("firstProductLightColor"));
            // JSON.parse(localStorage.getItem("secondProductLightColor"));
            // JSON.parse(localStorage.getItem("thirdProductLightColor"));
            // JSON.parse(localStorage.getItem("fourthProductLightColor"));
            // JSON.parse(localStorage.getItem("fifthProductLightColor"));
            // JSON.parse(localStorage.getItem("sixthProductLightColor"));
            // JSON.parse(localStorage.getItem("seventhProductLightColor"));
            // JSON.parse(localStorage.getItem("eighthProductLightColor"));
            // JSON.parse(localStorage.getItem("productTitleLightColor"));
            // JSON.parse(localStorage.getItem("productPriceLightColor"));
            // JSON.parse(localStorage.getItem("productDescLightColor"));
            // JSON.parse(localStorage.getItem("currentCategoryLightColor"));
            // JSON.parse(localStorage.getItem("tabletsnavLightColor"));
            // JSON.parse(localStorage.getItem("laptopsnavLightColor"));
            // JSON.parse(localStorage.getItem("wearablesnavLightColor"));
            // JSON.parse(localStorage.getItem("purchasesnavLightColor"));
            // JSON.parse(localStorage.getItem("aboutusnavLightColor"));
            // JSON.parse(localStorage.getItem("searchBoxLightColor"));

            --counter;

            localStorage.setItem("counter", JSON.stringify(counter));
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

    $buyButton.on("click", () => 
    {
        $.ajax({
            url: `../pages/buyingForm.html`,
            success: (data) =>
            {
                window.location.href = 'buyingForm.html';
            },
            method: "GET",
            crossDomain: true,
        });
    });
    
    $viewProductsButton.on("click", () => {
        
    });





////////////////////////////////////////////////////////////////

    
    $Uklang.on("click", () =>
    {
       var goodsType = $('#goods-type').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(eng["goods-type"]);
        });

        var currentCategory = $('#nav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(eng.nav);
        });

        var laptops = $('#laptopsnav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(eng.laptopsnav);
        });

        var tablets = $('#tabletsnav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(eng.tabletsnav);
        });

        var tablets = $('#wearablesnav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(eng.wearablesnav);
        });

        var purchases = $('#purchasesnav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(eng.purchasesnav);
        });

        var aboutus = $('#aboutusnav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(eng.aboutusnav);
        });

        var buyButton = $('.submit-button').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(eng.buyButton);
        });

        var aboutusf = $('#aboutus').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(eng.aboutus);
        });

        var contacts = $('#contacts').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(eng.contacts);
        });

        var address = $('#address').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(eng.address);
        });

        var partners = $('#partners').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(eng.partners);
        });

       //  var myswitcher = $('#switcher').each(function() {
       //     var el = $(this);
       //     var key = (el.attr('caption'));
       //     el.text(eng.myswitcher);
       //  });
       //localStorage.setItem("partners", JSON.stringify(partners));

       
    });

    $Ruslang.on("click", () =>
    {
       var goodsType = $('#goods-type').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(rus["goods-type"]);
        });

        var currentCategory = $('#nav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(rus.nav);
        });

        var laptops = $('#laptopsnav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(rus.laptopsnav);
        });

        var tablets = $('#tabletsnav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(rus.tabletsnav);
        });

        var tablets = $('#wearablesnav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(rus.wearablesnav);
        });

        var purchases = $('#purchasesnav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(rus.purchasesnav);
        });

        var aboutus = $('#aboutusnav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(rus.aboutusnav);
        });

        var buyButton = $('.submit-button').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(rus.buyButton);
        });

        var aboutusf = $('#aboutus').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(rus.aboutus);
        });

        var contacts = $('#contacts').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(rus.contacts);
        });

        var address = $('#address').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(rus.address);
        });

        var partners = $('#partners').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(rus.partners);
        });

       //  var myswitcher = $('#switcher').each(function() {
       //     var el = $(this);
       //     var key = (el.attr('caption'));
       //     el.text(rus.myswitcher);
       //  });
    });

    $Azelang.on("click", () =>
    {
       var goodsType = $('#goods-type').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(aze["goods-types"]);
        });

        var currentCategory = $('#nav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(aze.nav);
        });

        var laptops = $('#laptopsnav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(aze.laptopsnav);
        });

        var tablets = $('#tabletsnav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(aze.tabletsnav);
        });

        var tablets = $('#wearablesnav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(aze.wearablesnav);
        });

        var purchases = $('#purchasesnav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(aze.purchasesnav);
        });

        var aboutus = $('#aboutusnav').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(aze.aboutusnav);
        });

        var buyButton = $('.submit-button').each(function() {
         let el = $(this);
         let key = (el.attr('caption'));
           el.text(aze.buyButton);
        });

        var aboutusf = $('#aboutus').each(function() {
         let el = $(this);
           let key = (el.attr('caption'));
           el.text(aze.aboutus);
        });

        var contacts = $('#contacts').each(function() {
         let el = $(this);
           let key = (el.attr('caption'));
           el.text(aze.contacts);
        });

        var address = $('#address').each(function() {
           let el = $(this);
           let key = (el.attr('caption'));
           el.text(aze.address);
        });

        var partners = $('#partners').each(function() {
           let el = $(this);
           let key = (el.attr('caption'));
           let a = JSON.parse(localStorage.getItem("aze"));
           el.text(a.partners);
        });

       //  var myswitcher = $('#switcher').each(function() {
       //     var el = $(this);
       //     var key = (el.attr('caption'));
       //     el.text(aze.myswitcher);
       //  });
    });

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
       address: "Address: Russia, Moscow",
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
       address: "Unvan: Rusiya, Moskva",
       partners: "Partnyorlar:",
     //  myswitcher: "Movzu deyisimi: Aciq movzu"
     };

     localStorage.setItem("aze", JSON.stringify(aze));
     localStorage.setItem("rus", JSON.stringify(rus));
     localStorage.setItem("eng", JSON.stringify(eng));


     localStorage.setItem("firstProductP", "HONOR 70 Pro");
     localStorage.setItem("secondProductP", "HONOR X9");
     localStorage.setItem("thirdProductP", "HONOR 70 Pro+");
     localStorage.setItem("fourthProductP", "HONOR 70");
     localStorage.setItem("fifthProductP", "HONOR X8 5G");
     localStorage.setItem("sixthProductP", "HONOR Magic4 Pro");
     localStorage.setItem("seventhProductP", "HONOR Magic4 Ultimate");
     localStorage.setItem("eighthProductP", "HONOR X9 5G");
});

function changeColor(key: string, color: string) {
   if (localStorage.getItem(key)) 
   {
       $("body").css("background-color", localStorage.getItem(key));
   }
   else
   {
       $("body").css("background-color", color);
       localStorage.setItem(key, color);
   }
}
