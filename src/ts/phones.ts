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
    let counter: number = 0;

   

    $viewProductsButton.on('click', function() {
        
     });



    //////////////////////////////////////////////////////////////////////

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
                url: 'http:///index.html',
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
    localStorage.setItem("bodyDarkColor", "rgb(47, 47, 47)");

    let a = localStorage.getItem("bodyDarkColor");

    $switcher.on("click", () => {
        if (counter === 0)
        {
            $switcher.val("Dark theme");

           // localStorage.setItem("bodyDarkColor", "rgb(47, 47, 47)");

            $("body").css("background-color", "rgb(47, 47, 47)");
            //$("body").css("background-color", a);
            $mainHeader.css("background-color", "rgb(47, 47, 47)");
            $goodsType.css("color", "white");
            $firstproduct.css("background-color", "rgb(146, 146, 146)");
            $secondproduct.css("background-color", "rgb(146, 146, 146)");
            $thirdproduct.css("background-color", "rgb(146, 146, 146)");
            $fourthproduct.css("background-color", "rgb(146, 146, 146)");
            $fifthproduct.css("background-color", "rgb(146, 146, 146)");
            $sixthproduct.css("background-color", "rgb(146, 146, 146)");
            $seventhproduct.css("background-color", "rgb(146, 146, 146)");
            $eighthproduct.css("background-color", "rgb(146, 146, 146)");
            $productTitle.css("color", "white");
            $productPrice.css("color", "white");
            $productDesc.css("color", "white");
            $currentCategory.css("color", "white");
            $tabletsnav.css("color", "white");
            $laptopsnav.css("color", "white");
            $wearablesnav.css("color", "white");
            $purchasesnav.css("color", "white");
            $aboutusnav.css("color", "white");
            $searchBox.css("color", "white");


            

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
            $fifthproduct.css("background-color", "rgb(247, 247, 247)");
            $sixthproduct.css("background-color", "rgb(247, 247, 247)");
            $seventhproduct.css("background-color", "rgb(247, 247, 247)");
            $eighthproduct.css("background-color", "rgb(247, 247, 247)");
            $productTitle.css("color", "black");
            $productPrice.css("color", "black");
            $productDesc.css("color", "black");
            $currentCategory.css("color", "rgb(85,26,169)");
            $tabletsnav.css("color", "rgb(85,26,169)");
            $laptopsnav.css("color", "rgb(85,26,169)");
            $wearablesnav.css("color", "rgb(85,26,169)");
            $purchasesnav.css("color", "rgb(85,26,169)");
            $aboutusnav.css("color", "rgb(85,26,169)");
            $searchBox.css("color", "black");

          //  localStorage.setItem("bodyLightColor", "white");

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
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(aze.buyButton);
        });

        var aboutusf = $('#aboutus').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(aze.aboutus);
        });

        var contacts = $('#contacts').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(aze.contacts);
        });

        var address = $('#address').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(aze.address);
        });

        var partners = $('#partners').each(function() {
           var el = $(this);
           var key = (el.attr('caption'));
           el.text(aze.partners);
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