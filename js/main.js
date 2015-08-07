$(function () {

  var playerName;

  hideObjects();
  showWelcome();

  $('#player-name').on('click', function () {
    playerName = $('input[name="name"]').val();
    playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1);
    $('.ask-name').fadeOut();

    playerReady();
  });


  function hideObjects() {
    $('#welcome').children().hide();
    $('#goodbye').hide();
    $('#rumble').hide();
  }

  function showWelcome() {
    $('#welcome h1').fadeIn(1500);
    $('#banner').delay(750).fadeIn(1500);
    $('.ask-name').delay(1500).fadeIn(1500);
  }

  function playerReady() {
    var $playerWelcome = $('.ready-rumble h2:first-child');
    var welcome = $playerWelcome.text().concat(playerName);
    $playerWelcome.text(welcome);
    $('.ready-rumble').delay(750).fadeIn(1000);

    $('input[type="checkbox"]').on('click', function () {
      if ( $(this).val() === 'no') {
        $('#goodbye').delay(500).fadeIn();
      } else {
        readyToRumble();
      }
      $('#welcome').fadeOut();
    });
  }

  function readyToRumble() {
    $('#player').text(playerName);
    $('#rumble').delay(750).fadeIn(1500, function () {
      rumble();
    });
  }

  function rumble() {
    while ( checkForWinner() ) {
      moveCharacters();
      attackCharacters();
    }
    showWinner();
  }

  function checkForWinner() {
    // fill me in!
  }

  function moveCharacters() {
    // and me!
  }

  function attackCharacters() {
    // and me!
  }

  function showWinner() {
    // and me three!
  }
});
