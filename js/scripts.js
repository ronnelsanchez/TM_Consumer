/*$(".btn-login").on("classChange",function(){
  console.log("lopps");
  if ($('.btn-login').hasClass('default')){
    $('.btn-login, .open-login, .open-panel').on('click', function() {
      $.fancybox.open({
        src: '#modal-login-full',
        modal: true
      });
      if($promo != null){
        $promo.show().flickity('resize');
      }
    });
  }else if (($('.btn-login').hasClass('logged'))){
    $('.btn-login, .open-panel, .open-login').click(function(e) {
      $('.product-panel').addClass('open');
      console.log("yes");
      e.stopPropagation();
    });
  }
});*/

function classChanges(){
  console.log("Inside classCHANGES");
  if ($('.btn-login').hasClass('default')){
  console.log("DEFAULT");
  }else if (($('.btn-login').hasClass('logged'))){
  console.log("LOGGED");
  }
}

// Global and Banner margin adjustment
var globalAlertHeight = 0;

$(window).on('load resize', function() {
  globalAlertHeight = $("#global-alert").height();
  if(globalAlertHeight != null)
    $('.banner').attr('style', 'margin-top:' + (globalAlertHeight + 32) + 'px');
});

$(".global-alert-content >  button").click(function() {
  $('.banner').removeAttr('style');
});

// Accordion
$('.accordion-toggle').click(function() {
  if ($(this).text().toLowerCase() == "expand all") {
    $(this).text("Collapse All");
    $(this).addClass('collapse').removeClass('expand');
    $(this).each(function() {
      $(this).nextAll('.accordion-item').children('.accordion-btn').addClass('active');
      $(this).nextAll('.accordion-item').children('.accordion-content').slideDown(400);
    });
  } else if ($(this).text().toLowerCase() == "collapse all") {
    $(this).text("Expand All");
    $(this).addClass('expand').removeClass('collapse');
    $(this).each(function() {
      $(this).nextAll('.accordion-item').children('.accordion-btn').removeClass('active');
      $(this).nextAll('.accordion-item').children('.accordion-content').slideUp(400);
    });
  }
});
$('.accordion .accordion-btn').click(function() {
  $(this).toggleClass('active');
  $(this).next('.accordion-content').slideToggle(400);
});


//More Less Product list
var prodlist = $("#productList").text().replace(/;\s*$/, "");; //"Titanium1;Titanium2;Titanium3;" --content of span with ID prodlist
var arr = prodlist.split(";"); // ["Titanium1","Titanium2","Titanium3"]
$("#productList").text(arr[0]); //replace content of span to Titanium1 only
if (arr.length <= 1){
  $("#seeMore").remove();
}
$("#seeMore").click(function(e) {
  e.preventDefault();
  if ($(this).children().hasClass('fa-plus-circle')) {
    $(this).attr('title', 'Show Less');
    $("#productList").text(prodlist);
    $(this).children().removeClass('fa-plus-circle').addClass('fa-minus-circle');
  } else {
    $(this).attr('title', 'Show More');
    $("#productList").text(arr[0]); //replace content of span to Titanium1 only
    $(this).children().removeClass('fa-minus-circle').addClass('fa-plus-circle');
  }
});

// Sticky Navigation

(function() {
    var header = new Headroom(document.querySelector("#header"), {
        tolerance: 10,
        offset : 205,
        classes: {
          initial: "animated",
          notTop: "slideUp"
        }
    });
    header.init();
}());


// Recreate nav as page-nav

var changePaddingNav = function() {

  $(window).resize(function() {
    var paddingLeftNav = $('.product-nav  .container:nth-child(2)').css('marginLeft').replace('px', '');
    if ($(window).width() <= 1200) {
      $('.dropdown.dropdown-mobile ul li a').css('margin', '0px ' + paddingLeftNav + 'px');
    } else { }
  });

}
var searchStart = function() {
  $('.product-search-button').on('click', function() {

    $('.product-nav').addClass('search-open');
    $('.product-nav').removeClass('search-close');
    $('body').addClass('overlay-open');
    $('body').removeClass('overlay-close');
    setTimeout(function() {
      $('.search-mobile').find('input[type="search"]').focus();
    }, 600);
  });
  $('.product-search-button-close').on('click', function() {
    $('.product-nav').addClass('search-close');
    $('.product-nav').removeClass('search-open');
    $('body').removeClass('overlay-open');
    $('body').addClass('overlay-close');
    $('#input-search').val('');
  });

  //

  $('#mobile-menu').on('click',function(){
    if ($('.dropdown.dropdown-mobile').hasClass('open')) {
      $('body').addClass('overlay-close');
      $('body').removeClass('overlay-open');
    } else {
      $('body').addClass('overlay-open');
      $('body').removeClass('overlay-close');
    }
  });
}
searchStart();
changePaddingNav();

$(function() {

  var globalMenuItem = [];
  var productMenuItem = [];
  var otherMenuItemToGlobal = [];
  var otherMenuItem = [];
  var otherMenuItem_2 = [];
  var otherMenuItem_3 = [];
  var mobileTitleMenu = "Menu";
  var dropdownCounter = [];

  $('.product-nav .nav li a:contains("Home")').filter(function(){
    $(this).text() == "Home";
  }).parent().addClass('global-menu-item');

  dropdownCounter = ($('.dropdown.global-menu-item > a')).map(function(i,el){
    return[$(el).text(), $(el).attr('href')];
  }).get();



    $('.desktop-nav .nav').each(function() {
      globalMenuItem = ($(this).find('.global-menu-item').children('a')).map(function(i, el) {
          return [$(el).text(), $(el).attr('href'),' '];
      }).get();
    });
    $('.desktop-nav .nav .dropdown.global-menu-item').eq(0).each(function() {
        productMenuItem = ($(this).find('.product-menu-item').children('a')).map(function(i, el) {
          return [$(el).text(), $(el).attr('href'), $(el).parent().attr('class')];
      }).get();
    });
    $('.desktop-nav .nav .dropdown.global-menu-item').eq(1).each(function() {
        otherMenuItem_2 = ($(this).find('.product-menu-item').children('a')).map(function(i, el) {
          return [$(el).text(), $(el).attr('href'), $(el).parent().attr('class')];
      }).get();
    });
    $('.desktop-nav .nav .dropdown.global-menu-item').eq(2).each(function() {
        otherMenuItem_3 = ($(this).find('.product-menu-item').children('a')).map(function(i, el) {
          return [$(el).text(), $(el).attr('href'), $(el).parent().attr('class')];
      }).get();
    });

    $('.global-header').each(function() {
      otherMenuItemtoGlobal = ($(this).find('.nav > li').children('a')).map(function(i, el) {
          return [$(el).text(), $(el).attr('href'),' '];
      }).get();
    });
    $('.global-header .navbar-right').each(function() {
      otherMenuItem = ($(this).find('li').children('a')).map(function(i, el) {
          return [$(el).text(), $(el).attr('href'),' '];
      }).get();
    });

    $("<a aria-expanded='false' aria-haspopup='true' class='dropdown-toggle' data-toggle='dropdown' id='mobile-menu'>" + mobileTitleMenu + "&nbsp;<i aria-hidden='true' class='fa fa-angle-down'></i></a><ul aria-labelledby='mobile-menu' class='dropdown-menu-nav dropdown-menu-right' id='global-menu'></ul><ul class='dropdown-menu-nav dropdown-menu-right' id='product-list-menu' style='display: none'><li class='dropdown-item'><a class='back-to-global' style='cursor: pointer;'><i class='fa fa fa-angle-left'></i>&nbsp; Back</a></li></ul><ul class='dropdown-menu-nav dropdown-menu-right' id='other-list-menu' style='display: none'><li class='dropdown-item'><a class='back-to-global' style='cursor: pointer;'><i class='fa fa-angle-left'></i>&nbsp; Back</a></li></ul><ul class='dropdown-menu-nav dropdown-menu-right' id='other-list-menu--two' style='display: none'><li class='dropdown-item'><a class='back-to-global' style='cursor: pointer;'><i class='fa fa-angle-left'></i>&nbsp; Back</a></li></ul><ul class='dropdown-menu-nav dropdown-menu-right' id='other-list-menu--three' style='display: none'><li class='dropdown-item'><a class='back-to-global' style='cursor: pointer;'><i class='fa fa-angle-left'></i>&nbsp; Back</a></li></ul>")
      .appendTo(".dropdown.dropdown-mobile");
    $("<a class='product-search-button'><i class='fa fa-search' aria-hidden='true'></i></a>").appendTo(".dropdown.dropdown-mobile");
    searchStart();


    pushToMobileNav(globalMenuItem, 0, '#global-menu');
    pushToMobileNav(otherMenuItemtoGlobal, 0, '#global-menu');
    pushToMobileNav(productMenuItem, 0, '#product-list-menu');
    pushToMobileNav(otherMenuItem_2, 0, '#other-list-menu--two');
    pushToMobileNav(otherMenuItem_3, 0, '#other-list-menu--three');
    pushToMobileNav(otherMenuItem, 1, '#other-list-menu');

    function pushToMobileNav(arrayName, indexStart, pushToDiv) {
      for(var index = indexStart; index < arrayName.length; index++) {
        if(index%3 === 0) {
          if(arrayName[index].replace(/\s/g, '') == $('.dropdown.global-menu-item > a').text().replace(/ /g,'').split(/\s+/)[0]) {
            $("<li class='dropdown-item " + arrayName[index+2] + "'><a id='other-products-click' > " + arrayName[index] + " <i class='fa fa-angle-right' aria-hidden='true'></i></a> </li>").appendTo(pushToDiv);
          }
          else if(arrayName[index].replace(/\s/g, '') == $('.dropdown.global-menu-item > a').text().replace(/ /g,'').split(/\s+/)[1]) {
            $("<li class='dropdown-item " + arrayName[index+2] + "'><a id='other-products-click-two'> " + arrayName[index] + " <i class='fa fa-angle-right' aria-hidden='true'></i></a> </li>").appendTo(pushToDiv);
          }
          else if(arrayName[index].replace(/\s/g, '') == $('.dropdown.global-menu-item > a').text().replace(/ /g,'').split(/\s+/)[2]) {
            $("<li class='dropdown-item " + arrayName[index+2] + "'><a id='other-products-click-three'> " + arrayName[index] + " <i class='fa fa-angle-right' aria-hidden='true'></i></a> </li>").appendTo(pushToDiv);
          }
          else if(arrayName[index].replace(/\s/g, '') == $('.global-header .nav.navbar-right > li.dropdown > a').text().replace(/\s/g, '')) {
            $("<li class='dropdown-item " + arrayName[index+2] + "'><a id='other-menu-list'> " + arrayName[index] + "&nbsp;&nbsp;<i class='fa fa-angle-right' aria-hidden='true'></i></a></li> ").appendTo(pushToDiv);
          }
          else {
            $("<li class='dropdown-item " + arrayName[index+2] + "'><a href='" + arrayName[index+1] + "'> " + arrayName[index] + "</a></li>").appendTo(pushToDiv);
          }
        }
      };
      changePaddingNav();

      $("#other-menu-list").click(function() {
        $("#global-menu").hide();
        $("#other-list-menu").fadeIn(350);
      });
      $("#other-products-click").click(function() {
        $("#global-menu").hide();
        $("#product-list-menu").fadeIn(350);
      });
      $("#other-products-click-two").click(function() {
        $("#global-menu").hide();
        $("#other-list-menu--two").fadeIn(350);
      });
      $("#other-products-click-three").click(function() {
        $("#global-menu").hide();
        $("#other-list-menu--three").fadeIn(350);
      });
      $(".back-to-global").click(function() {
        $("#product-list-menu").hide();
        $("#other-list-menu").hide();
        $("#other-list-menu--two").hide();
        $("#other-list-menu--three").hide();
        $("#global-menu").fadeIn(350);
      });


     if($('#hdfLocale').val() == 'en-au' || $('#hdfLocale').val() == 'en-nz'){
         $(".hide-in-anz").hide();
         $(".show-in-anz").show();

     } else {
         $(".hide-in-anz").show();
         $(".show-in-anz").hide();
      }
      if (window.location.pathname.toLowerCase().indexOf("doctor-cleaner") >= 0) {
         $('.product-search').remove();
         $('.product-search-button').remove();
      }
    };

});

$(document).on('click', '.dropdown.dropdown-mobile  li > a', function(e) {
  e.stopPropagation();
  e.preventDefault();
  var x = $(this).contents().get(0).nodeValue.replace(/\s/g, '');
  if ((x != $('.dropdown.global-menu-item > a').text().replace(/ /g,'').split(/\s+/)[0]) && (x != $('.dropdown.global-menu-item > a').text().replace(/ /g,'').split(/\s+/)[1]) && (x != $('.dropdown.global-menu-item > a').text().replace(/ /g,'').split(/\s+/)[2]) && (x != $('.global-header .nav  li.dropdown > a').text().replace(/\s/g, ''))) {
    window.location.href = $(this).attr('href');
  }
});


$('#body-overlay').on('click', function(){
  $('body').toggleClass('overlay-open');
  $('.product-search-button-close').trigger('click');
});

$(window).resize(function() {
  var checkNavVisibility = function() {
    return (($('.dropdown.dropdown-mobile').hasClass('open') && ($('#global-menu').is(':visible')  || $('#product-list-menu').is(':visible') || $('#other-list-menu').is(':visible') || $('#other-list-menu--two').is(':visible') || $('#other-list-menu--three').is(':visible'))) || $('.product-nav').hasClass('search-open'));
  }

  if ($(window).width() <= 1200) {
    if (checkNavVisibility()) {
      $('body').addClass('overlay-open');
    }
  } else {
    if (checkNavVisibility()) {
      $('body').addClass('overlay-open');
    } else {
      $('body').removeClass('overlay-open');
      $('body').addClass('overlay-close');
    }
  }
});

if (window.location.pathname.toLowerCase().indexOf("home-network-security") >= 0) {
  $("#loginToolTip").remove();
}
if (window.location.pathname.toLowerCase().indexOf("doctor-cleaner") >= 0) {
  $("#loginToolTip").remove();
  $(".btn-login-container").remove();
  $("#searchH").remove();
  $(".product-search-button").remove();
}
