$(function() {
//Sign in button

$('.promo-carousel').flickity({
  cellAlign: 'center',
  contain: true,
  prevNextButtons: false
});

$('.btn-dismiss-promo').on('click', function() {
  $('.login-content').show();
  setTimeout(function() {
    animate('.promo-login', 'slideOutLeft');
    animate('.login-content', 'slideInRight');
  }, 125);
  setTimeout(function() {
    $('.promo-login').hide();
  }, 1125);


});

var $promo = $('.promo-carousel').flickity();

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

$('.product-panel-close, main, .banner').click(function(e) {
   $('.product-panel').removeClass('open' );
   $('body').removeAttr('style');
    console.log("no");

});

  // Animate function
  function animate(element, animation) {
    $(element).addClass('animated ' + animation);
    var wait = setTimeout(function() {
      $(element).removeClass('animated ' + animation);
    }, 1000);
  }


  //Feedback Solution
  $("#feedback-yes").click(function() {
    $('#first-state').hide();
    animate('#yes-state', 'fadeIn');
    setTimeout(function() {
      animate('#yes-state > .state-section > .alert', 'bounceIn');
    }, 500);
    $('#yes-state').show();
    $("html, body").animate({
      scrollTop: $(document).height()
    }, 2000);
    return false;
  });


  $('#feedback-no').click(function() {
    $('#first-state').hide();
    animate('#no-state', 'fadeIn');
    $('#no-state').show();
    $('html, body').animate({
      scrollTop: $('#no-state').offset().top - 200
    }, 1000);

    return false;
  });


  $("#submit-feedback-yes").click(function() {
    $('#yes-state > .state-section > p').hide();
    $('#yes-state > .state-section > form').hide();
    $('#yes-state > .state-section > .alert ').removeClass('alert-success');
    $('#yes-state > .state-section > .alert ').addClass('alert-info');
    $('#yes-state > .state-section > .alert > .alert-content').html('<strong>Thank You</strong> for sending your suggestions!');
    animate('#yes-state > .state-section > .alert', 'bounceIn');
    $("html, body").animate({
      scrollTop: $(document).height()
    }, 2000);
    return false;
  });

  $("#no-thanks-feedback-yes").click(function() {
    $('#yes-state > .state-section > p').hide();
    $('#yes-state > .state-section > form').hide();
    animate('#yes-state > .state-section > .alert', 'bounce');
    $("html, body").animate({
      scrollTop: $(document).height()
    }, 2000);
    return false;
  });

  $("#submit-feedback-no").click(function() {
    $('#no-state > .state-section > .state-content').hide();
    $('#no-state > .state-section > strong').hide();
    $('#no-state > .state-section > form').hide();
    $('#no-state > .state-section > .alert').show();
    animate('#no-state > .state-section > .alert', 'fadeIn');
    $("html, body").animate({
      scrollTop: $(document).height()
    }, 2000);
    return false;
  });

  $("#cancel-feedback-no").click(function() {
    $('#first-state').show();
    animate('#first-state', 'fadeInUp');
    $('#no-state').hide();
    return false;
  });


});


//Feedback Modal
$('[data-fancybox="modal"]').fancybox({
 css: {
   'width': '100%',
   'height': '100%',
   'max-height': '500px',
   'max-width': '800px',
   'vertical-align': 'top',
 }
});



// Jona
$(function() {
  var header = new Headroom(document.querySelector("#header"), {
    tolerance: 10,
    offset: 205,
    classes: {
      initial: "animated",
      notTop: "slideUp"
    }
  });
  header.init();
}());



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


$('.product-panel-body').on("scroll", function(){

    if($('.product-panel-body').scrollTop() > 90){
        $('.product-panel-account').addClass('snap');
        $('.product-panel-nav.bottom').addClass('snap');
    }
    else
    {
      $('.product-panel-account').removeClass('snap');
      $('.product-panel-nav.bottom').removeClass('snap');
    }
});


$('.product-panel-body').bind('touchmove', function (e){
  if ($(window).width() <= 425) {
    $('body').attr('style','overflow:hidden');
  }
     var currentY = e.originalEvent.touches[0].clientY;
     if(currentY > lastY){
       if($('.product-panel-body').scrollTop() > 90){
         $('.product-panel-account').addClass('snap');
         $('.product-panel-nav.bottom').addClass('snap');
        }
     }else if(currentY < lastY){
         $('.product-panel-account').removeClass('snap');
         $('.product-panel-nav.bottom').removeClass('snap');
     }
     var lastY = currentY;
});


$('.product-panel-body').on( 'mousewheel DOMMouseScroll', function (e) {
  var e0 = e.originalEvent;
  var delta = e0.wheelDelta || -e0.detail;
  this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
  e.preventDefault();
});


// Start here

// Temporary please erase Jona


$(document).ready(function() {
  if($('#hdfLocale').val() == 'en-au' || $('#hdfLocale').val() == 'en-nz'){
       $(".hide-in-anz").hide();
       $(".show-in-anz").show();


  } else {
       $(".hide-in-anz").show();
       $(".show-in-anz").hide();
  }
});

// Recreate nav as page-nav


var searchStart = function() {
  $('.product-search-button').on('click', function() {

    $('.product-nav').addClass('search-open');
    $('.product-nav').removeClass('search-close');
    $('body').addClass('overlay-open');
    $('body').removeClass('overlay-close');
    setTimeout(function() {
      $('.search-mobile').find('input[type="text"]').focus();
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


  // if(dropdownCounter.length <= 2) {

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
    // $('.dropdown.global-menu-item > a').text().replace(/ /g,'').split(/\s+/)[n];

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

      $(window).resize(function() {
        var paddingLeftNav = $('.product-nav  .container:nth-child(2)').css('marginLeft').replace('px', '');
        console.log(paddingLeftNav);

        if ($(window).width() <= 1200) {
          $('.dropdown.dropdown-mobile ul li a').css('margin', '0px ' + paddingLeftNav + 'px');
        } else { }
      });
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

//Video Guide here

 var xUrl = '';
 var yes = false;
 var submitY = false;
 var x = false;
 var url = '';
 var _deviceSource = '';
 var _Source = '';

  $('.video-feedback').fancybox({
    iframe: {
      css: {
        'width': '100%',
        'height': '100%',
        'max-height': '500px',
        'max-width': '800px',
        'vertical-align': 'top',
      }
    },
     afterLoad: function(instance, current) {
       var customContent = "<div class='article-feedback' id='feed-back'><div class='container-fluid'><div class='row'><div class='col-xs-12'><div class='article-body'><div class='feedback-solution'><div id='first-state'><h3 class='feedback-title h4'>Did this article resolve your concern?</h3><button id='yes' onclick='yesFeed(event)' type='button' class='btn btn-primary btn-icon-phone'>Yes</button> <button id='no' onclick='noFeed()' type='button' class='btn btn-default'>No</button></div></div></div></div></div></div></div>"
       $('.fancybox-content').append(customContent);
        xUrl = $('a.video-feedback').attr('href');

       var yTitle = $('a.video-feedback').data('youtube-title');
       console.log(yTitle);

    },
   onUpdate: function(instance, current) {
      var width,
        height,
        ratio = 16 / 9,
        video = current.$content;

      if (video) {
        video.hide();

        width = current.$slide.width();
        height = current.$slide.height() - 100;

        if (height * ratio > width) {
          height = width / ratio;
        } else {
          width = height * ratio;
        }

        video.css({
          width: width,
          height: height
        }).show();

      }
    }
  });

//Video FeedBacks Section

 function GetCountryCode() {
       $.ajax({
              type: "GET",
              url: "//freegeoip.net/json/",
              cache: false,
              async: false,
              success: function(response) {
                 countryName = response.country_name;
                console.log(countryName);
              },
              error: function(response) {},
              complete: function(response) {}
          });
        return countryName;
      }

function _(x) {
     return document.getElementById(x);
 }

function getYoutubeTitle(){
	 var title = $('iframe table').text();
     console.log('title is ' + title);
}


function deviceSource(){
    if (/Mobi/.test(navigator.userAgent)) {
             var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            // Windows Phone must come first because its UA also contains "Android"
            if (/windows phone/i.test(userAgent)) {
                _deviceSource = "Windows Phone";
            }

            else if (/android/i.test(userAgent)) {
                _deviceSource = "Android";
            }

           else if(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream){
                _deviceSource = "iOS";
            }
            }
        else{
            if (window.navigator.userAgent.indexOf("Mac") != -1)
            {
                 _deviceSource = "Mac";
            }
            else if (window.navigator.userAgent.indexOf("Linux") != -1)
            {
                _deviceSource = "Linux";
            }
            else
            {
                _deviceSource = "Windows";
            }
            }
            return _deviceSource;
   }

   function hostName(){
        var _hostname = window.location.host;
        if (_hostname.indexOf('intkb') !== -1) {
            _Source = "intranet";
        }
        else {
            _Source = "internet";
        }
        return _Source;
   }

 function getProductInURL() {
    var pathArray = window.location.pathname.toLowerCase().split( '/' )
    var resProduct = '';
    resProduct="";
    if(pathArray.length < 7) {
      resProduct="HHO";
    }
    else {
        resProduct=pathArray[5];
        if(resProduct=="contact" || resProduct=="searchresult") {
          resProduct="HHO";
        }
   }
  return resProduct;
 }

 function globalAjax(verbatim, articleHelpful, event){
     $.ajax({
             method: "POST",
             url: "/webservices/KMSSubmitKBSurvey_Ti8.ashx",
             data: {
                 Type: 'VG',
                 probcat: 'VG ' + articleHelpful + " " + deviceSource(),
                 originDate: '0',
                 locale: 'en-us',
                 segment: 'Consumer',
                 articlewasHelpful: articleHelpful,
                 verbatim: verbatim,
                 source: hostName(),
                 FeedbackType: 'VG',
                 country: 'en-us',
                 deviceSource: deviceSource(),
                 products: getProductInURL(),
                 kbTitle: getYoutubeTitle(),
                 refferingurl:xUrl,
                 custCountry:GetCountryCode()
             },
             success: function(msg) {
                 console.log(msg);
             }
         });
 }

 function submitYes(val) {
     var yess = val;
     var feedBack = _("feedBack");
     var yF = _('yesFeed').value;
     yes = false;
     var h = _('h');
     var aF = _('alertFeed');
     var sF = _('showF');
     if (h.style.maxHeight == "345px") {
         h.style.maxHeight = "0px";
         h.style.transition = "max-height 0.2s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.7s ease";
         aF.style.opacity = '0';
         setTimeout(function() {
             aF.style.display = "none";
         }, 500);
         sF.style.opacity = '1';
         setTimeout(function() {
             sF.style.display = "block";
         }, 500);
         yesAjax(yF, yess);
     }
     return false;
 }

 function noFeed() {
     var feed = _("feed-back");
     feed.innerHTML = "<div class='alert alert-success' id='noF'><div class='alert-content'>Your opinion is appreciated</div></div><div id='thanks'><div id='s'><label>Kindly give us your feedback.</label><textarea onkeydown='validateNo() 'id='noFeed' class='form-control' rows='5'></textarea><div style='margin-top:10px'><button style='margin-right:5px' value='no' class='btn btn-primary' id='noBtn' onclick='submitNo(this.value)' disabled='disabled'>Send feedback</button><button class='btn btn-default' onclick='cancelFeed()'>Cancel</button></div></div></div>";
     $(".fancybox-stage").animate({
         scrollTop: $(document).height()
     }, 100);
     var s = _('s');
     s.style.maxHeight = "345px";
     s.style.opacity = "1";

     $(".fancybox-stage").animate({
         scrollTop: $(document).height()
     }, 2000);
 }

 function noThanks(verb, articleHelpful) {
   var h = _('h');
   var noComment = " ";
    yes = false;
     if (h.style.maxHeight == "345px") {
         console.log("yay");
         h.style.maxHeight = "0px";
         h.style.transition = "max-height 0.5s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.9s ease";
     }
     globalAjax(noComment, 'yes');
 }

 function submitNo(val) {
     //Run Ajax code here
     var s = _('s');
     if (s.style.maxHeight == "345px") {
         s.style.maxHeight = "0px";
         s.style.transition = "max-height 0.8s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.8s ease";
         var noF = _('noF');
         noF.style.opacity = '1';
         setTimeout(function() {
             noF.style.display = "block";
         }, 200);

         var no = val;
         var nF = _('noFeed').value;
         noAjax(nF, no, event);

     }
 }

 function cancelFeed() {
     var feed = _("feed-back");
     var customContent = "<div class='form-group' id='feed-back' style='height:auto;padding: 15px;border-top: 1px solid #dddddd;'><h6>Rate this video</h6><div style='margin: 10px 0;'><span style='font-size: 16px;'>Did this video help you? </span><button class='btn btn-primary' onclick='yesFeed(event)'>Yes</button> <button class='btn btn-default' onclick='noFeed()'>No</button></div></div>"
     feed.innerHTML = customContent;
 }

 function yesFeed(event) {
 	getYoutubeTitle();
     event.preventDefault ? event.preventDefault() : (event.returnValue = false);
     yes = true;
     var feed = _("feed-back");
     feed.innerHTML = "<div id='feedBack' class=''><div class='alert alert-success'><div class='alert-content' id='showF'>Your opinion is appreciated.</div><div class='alert-content' id='alertFeed'>Thank you for the feedback.</div></div><div id='h'><label>Do you have any suggestions or comments to improve our products and services? Tell us.</label><textarea class='form-control' onkeydown='validateYes()' id='yesFeed' rows='5'></textarea><div style='margin-top:10px'></div><button class='btn btn-primary' id='yesBtn' value='yes' onclick='submitYes(this.value)' disabled='disabled' style='margin-right:5px'>Send Feedback</button><button class='btn btn-default' onclick='noThanks()'>No, Thanks</button></div></div>";
     var fB = _("feedBack");
     var yF = _('yesFeed');
     var getVerbatim = _('yesFeed').value;
     yF.focus();
     var h = _('h');
     // fB.className = 'feedForms2';
     h.style.maxHeight = "345px";
     h.style.opacity = "1";
     // h.style.display = 'none';
     $(".fancybox-slide").animate({
         scrollTop: $(document).height()
     }, 2000);
     function test(event) {
         $('.fancybox-slide').on('click', function(e) {
              console.log('stage '+yes);
              console.log('this '+this);
             if (yes) {
                 if (e.target !== this) {
                     return;
                 }
              //AJAX HERE
              globalAjax(getVerbatim, 'yes');
             }
         });
     }
     test(event);
 }

 function yesAjax(vY, yS) {
   console.log(xUrl);
     console.log(_Source);
    //AJAX HERE
     globalAjax(vY, yS);
 }

 function noAjax(nF, nS, event) {
     event.stopPropagation();
   console.log(_deviceSource);
     yes = false;
   //AJAX HERE
      globalAjax(nF, nS);
 }

 function validateYes() {
     var yF = _('yesFeed');
     var yesBtn = _('yesBtn');
     if (yF.value.length > 0) {
         yesBtn.disabled = false;
         return false;
     }
     yesBtn.disabled = true;
 }

 function validateNo() {
     var nF = _('noFeed');
     var noBtn = _('noBtn');
     if (nF.value.length > 0) {
         noBtn.disabled = false;
         return false;
     }
     noBtn.disabled = true;
 }
