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

    ///////////////////////////////////////////////////

    let counter: number = 0;

   if (JSON.parse(localStorage.getItem("counter")) === 0)
   {
      $switcher.val("Light theme");

      changeBackColor("bodyLightColor", "white", "body");
      changeBackColor("mainHeaderLightColor", "white", $mainHeader);
      changeColor("goodsTypeLightColor", "black", $goodsType);
      changeBackColor("firstProductLightColor", "rgb(247, 247, 247)", $firstproduct);
      changeBackColor("secondProductLightColor", "rgb(247, 247, 247)", $secondproduct);
      changeBackColor("thirdProductLightColor", "rgb(247, 247, 247)", $thirdproduct);
      changeBackColor("fourthProductLightColor", "rrgb(247, 247, 247)", $fourthproduct);
      changeBackColor("fifthProductLightColor", "rgb(247, 247, 247)", $fifthproduct);
      changeBackColor("sixthProductLightColor", "rgb(247, 247, 247)", $sixthproduct);
      changeBackColor("seventhProductLightColor", "rrgb(247, 247, 247)", $seventhproduct);
      changeBackColor("eighthProductLightColor", "rgb(247, 247, 247)", $eighthproduct);
      changeColor("productTitleLightColor", "black", $productTitle);
      changeColor("productPriceLightColor", "black", $productPrice);
      changeColor("productDescLightColor", "black", $productDesc);
      changeColor("currentCategoryLightColor", "rgb(85,26,169)", $currentCategory);
      changeColor("tabletsnavLightColor", "rgb(85,26,169)", $tabletsnav);
      changeColor("laptopsnavLightColor", "rgb(85,26,169)", $laptopsnav);
      changeColor("wearablesnavLightColor", "rgb(85,26,169)", $wearablesnav);
      changeColor("purchasesnavLightColor", "rgb(85,26,169)", $purchasesnav);
      changeColor("aboutusnavLightColor", "rgb(85,26,169)", $aboutusnav);
      changeColor("searchBoxLightColor", "black", $searchBox);
   }

   else if (JSON.parse(localStorage.getItem("counter")) === 1)
   {
      $switcher.val("Dark theme");

      changeBackColor("bodyDarkColor", "rgb(47, 47, 47)", "body");
      changeBackColor("mainHeaderDarkColor", "rgb(47, 47, 47)", $mainHeader);
      changeColor("goodsTypeDarkColor", "white", $goodsType);
      changeBackColor("firstProductDarkColor", "rgb(146, 146, 146)", $firstproduct);
      changeBackColor("secondProductDarkColor", "rgb(146, 146, 146)", $secondproduct);
      changeBackColor("thirdProductDarkColor", "rgb(146, 146, 146)", $thirdproduct);
      changeBackColor("fourthProductDarkColor", "rgb(146, 146, 146)", $fourthproduct);
      changeBackColor("fifthProductDarkColor", "rgb(146, 146, 146)", $fifthproduct);
      changeBackColor("sixthProductDarkColor", "rgb(146, 146, 146)", $sixthproduct);
      changeBackColor("seventhProductDarkColor", "rgb(146, 146, 146)", $seventhproduct);
      changeBackColor("eighthProductDarkColor", "rgb(146, 146, 146)", $eighthproduct);
      changeColor("productTitleDarkColor", "white", $productTitle);
      changeColor("productPriceDarkColor", "white", $productPrice);
      changeColor("productDescDarkColor", "white", $productDesc);
      changeColor("currentCategoryDarkColor", "white", $currentCategory);
      changeColor("tabletsnavDarkColor", "white", $tabletsnav);
      changeColor("laptopsnavDarkColor", "white", $laptopsnav);
      changeColor("wearablesnavDarkColor", "white", $wearablesnav);
      changeColor("purchasesnavDarkColor", "white", $purchasesnav);
      changeColor("aboutusnavDarkColor", "white", $aboutusnav);
      changeColor("searchBoxDarkColor", "white", $searchBox);
   }

    $viewProductsButton.on('click', function() {
        
     });

    /////////////////////////////////////////////////////////////////////

    $searchingButton.on("click", () => 
    {
        if ($searchBox.val() === "Wearables" || $searchBox.val() === "wearables" || $searchBox.val() === "wearable" || $searchBox.val() === "Wearable")
        {
            $.ajax({
                url: 'wearables.html',
                success: (data) =>
                {
                  window.location.href = 'wearables.html';
                },
                error: (data) =>
                {
                  alert("error!")  
                },
                method: "GET",
                crossDomain: true,
            });
        }

        else if ($searchBox.val() === "Laptops" || $searchBox.val() === "laptops" || $searchBox.val() === "Laptop" || $searchBox.val() === "laptop")
        {
            $.ajax({
                url: 'laptops.html',
                success: (data) =>
                {
                  window.location.href = 'laptops.html';
                },
                error: (data) =>
                {
                  alert("error!")  
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
                  alert("error!")  
                },
                method: "GET",
                crossDomain: true,
            });
        }

        else if ($searchBox.val() === "Tablets" || $searchBox.val() === "Tablet" || $searchBox.val() === "tablets" || $searchBox.val() === "tablet")
        {
            $.ajax({
                url: 'tablets.html',
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

        else if ($searchBox.val() === "About us" || $searchBox.val() === "about us" || $searchBox.val() === "About Us" || $searchBox.val() === "about Us"
        || $searchBox.val() === "About" || $searchBox.val() === "about" || $searchBox.val() === "Us" || $searchBox.val() === "us")
        {
            $.ajax({
                url: 'aboutus.html',
                success: (data) =>
                {
                    window.location.href = 'aboutus.html';
                },
                error: (data) =>
                {
                  alert("error!")  
                },
                method: "GET",
                crossDomain: true,
            });
        }

        else if ($searchBox.val() === "My Purchases" || $searchBox.val() === "My purchases" || $searchBox.val() === "my Purchases" || $searchBox.val() === "my purchases"
        || $searchBox.val() === "purchases" || $searchBox.val() === "my" || $searchBox.val() === "My" || $searchBox.val() === "Purchases")
        {
            $.ajax({
                url: 'purchases.html',
                success: (data) =>
                {
                    window.location.href = 'purchases.html';
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
        if ($switcher.val() === "Light theme")
        {
            $switcher.val("Dark theme");

            changeBackColor("bodyDarkColor", "rgb(47, 47, 47)", "body");
            changeBackColor("mainHeaderDarkColor", "rgb(47, 47, 47)", $mainHeader);
            changeColor("goodsTypeDarkColor", "white", $goodsType);
            changeBackColor("firstProductDarkColor", "rgb(146, 146, 146)", $firstproduct);
            changeBackColor("secondProductDarkColor", "rgb(146, 146, 146)", $secondproduct);
            changeBackColor("thirdProductDarkColor", "rgb(146, 146, 146)", $thirdproduct);
            changeBackColor("fourthProductDarkColor", "rgb(146, 146, 146)", $fourthproduct);
            changeBackColor("fifthProductDarkColor", "rgb(146, 146, 146)", $fifthproduct);
            changeBackColor("sixthProductDarkColor", "rgb(146, 146, 146)", $sixthproduct);
            changeBackColor("seventhProductDarkColor", "rgb(146, 146, 146)", $seventhproduct);
            changeBackColor("eighthProductDarkColor", "rgb(146, 146, 146)", $eighthproduct);
            changeColor("productTitleDarkColor", "white", $productTitle);
            changeColor("productPriceDarkColor", "white", $productPrice);
            changeColor("productDescDarkColor", "white", $productDesc);
            changeColor("currentCategoryDarkColor", "white", $currentCategory);
            changeColor("tabletsnavDarkColor", "white", $tabletsnav);
            changeColor("laptopsnavDarkColor", "white", $laptopsnav);
            changeColor("wearablesnavDarkColor", "white", $wearablesnav);
            changeColor("purchasesnavDarkColor", "white", $purchasesnav);
            changeColor("aboutusnavDarkColor", "white", $aboutusnav);
            changeColor("searchBoxDarkColor", "white", $searchBox);

            ++counter;

            localStorage.setItem("counter", JSON.stringify(counter));
    
        }
        else if ($switcher.val() === "Dark theme")
        {
            $switcher.val("Light theme");

            changeBackColor("bodyLightColor", "white", "body");
            changeBackColor("mainHeaderLightColor", "white", $mainHeader);
            changeColor("goodsTypeLightColor", "black", $goodsType);
            changeBackColor("firstProductLightColor", "rgb(247, 247, 247)", $firstproduct);
            changeBackColor("secondProductLightColor", "rgb(247, 247, 247)", $secondproduct);
            changeBackColor("thirdProductLightColor", "rgb(247, 247, 247)", $thirdproduct);
            changeBackColor("fourthProductLightColor", "rrgb(247, 247, 247)", $fourthproduct);
            changeBackColor("fifthProductLightColor", "rgb(247, 247, 247)", $fifthproduct);
            changeBackColor("sixthProductLightColor", "rgb(247, 247, 247)", $sixthproduct);
            changeBackColor("seventhProductLightColor", "rrgb(247, 247, 247)", $seventhproduct);
            changeBackColor("eighthProductLightColor", "rgb(247, 247, 247)", $eighthproduct);
            changeColor("productTitleLightColor", "black", $productTitle);
            changeColor("productPriceLightColor", "black", $productPrice);
            changeColor("productDescLightColor", "black", $productDesc);
            changeColor("currentCategoryLightColor", "rgb(85,26,169)", $currentCategory);
            changeColor("tabletsnavLightColor", "rgb(85,26,169)", $tabletsnav);
            changeColor("laptopsnavLightColor", "rgb(85,26,169)", $laptopsnav);
            changeColor("wearablesnavLightColor", "rgb(85,26,169)", $wearablesnav);
            changeColor("purchasesnavLightColor", "rgb(85,26,169)", $purchasesnav);
            changeColor("aboutusnavLightColor", "rgb(85,26,169)", $aboutusnav);
            changeColor("searchBoxLightColor", "black", $searchBox);

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
            url: `buyingForm.html`,
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
      myswitcher: "Переключатель тем: Светлая тема"
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

function changeBackColor(key: string, color: string, target: any) {
   if (localStorage.getItem(key)) 
   {
       $(target).css("background-color", localStorage.getItem(key));
   }
   else
   {
       $(target).css("background-color", color);
       localStorage.setItem(key, color);
   }
}

function changeColor(key: string, color: string, target: any) {
   if (localStorage.getItem(key)) 
   {
       $(target).css("color", localStorage.getItem(key));
   }
   else
   {
       $(target).css("color", color);
       localStorage.setItem(key, color);
   }
}

