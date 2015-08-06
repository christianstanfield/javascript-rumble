$(function () {
  var playerName;

  hideObjects();
  showWelcome();

  $('#player-name').on('click', function () {
    playerName = $('input[name="name"]').val();
    $('.ask-name').fadeOut();

    playerReady(playerName);
  });
});

var hideObjects = function () {
  $('#welcome').children().hide();
  $('#goodbye').hide();
};

var showWelcome = function () {
  $('#welcome h1').fadeIn(1500);
  $('#banner').delay(750).fadeIn(1500);
  $('.ask-name').delay(1500).fadeIn(1500);
};

var playerReady = function (playerName) {
  var $playerWelcome = $('.ready-rumble h2:first-child');
  var welcome = $playerWelcome.text().concat(playerName);
  $playerWelcome.text(welcome);
  $('.ready-rumble').delay(750).fadeIn(1000);

  $('input[type="checkbox"]').on('click', function () {
    if ( $(this).val() === 'no') {
      $('#goodbye').delay(500).fadeIn();
    } else {

    }
    $('#welcome').fadeOut();
  });
};
