$(function () {

  $('#changeEmail').click(function () {
    setTimeout(function () {
      $('.login-input-crumb').hide();
      animate('.login-input-default', 'fadeIn');
      $('.login-input-default').show();
    }, 500);

    return false;

  });

  $('#cancel-feedback-no').click(function () {
    $('#first-state').show();
    animate('#first-state', 'fadeInUp');
    $('#no-state').hide();
    return false;
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


function gettmmail() {
  var tmemail = "";
  var coki = document.cookie;
  if(coki.indexOf("tmemail=") !== -1) {
    tmemail = coki.substring(coki.indexOf("tmemail="), coki.indexOf(";", coki.indexOf("tmemail="))).replace("tmemail=", "");
    $("#email").val(tmemail);
  }
}
$(function(){
  gettmmail();
})
