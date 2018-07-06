var cpuChoice = '';
var outcome = '';
var winCountOutput = '';
var userInput = '';
var wins = 0;
var played = 0;
var firstRun = true;

$(function() {

    //Don't accept clicks if an animation is happening
    if ($('.game-outcome-box').is(':animated')) {
        return;
    } else {
        $('.button').on('click', function(button) {
            var idClicked = button.target.id;
            switch (idClicked) {
                case 'btn-rock':
                    userInput = 'Rock';
                    runGame();
                break;
                case 'btn-paper':
                    userInput = 'Paper';
                    runGame();
                break;
                case 'btn-scissors':
                    userInput = 'Scissors';
                    runGame();
                break;
            }
            
        });

    };


    
    function runGame() {

    //Get the computer's choice of number
    switch(Math.floor(Math.random() * 3)) {
      case 0:
      cpuChoice = 'Rock';
      break;
      case 1 :
      cpuChoice = 'Paper';
      break;
      case 2:
      cpuChoice = 'Scissors';
      break;
    }
    
    //Main logic to determine winner
    function determineWinner(user, cpu) {
    played += 1;

      if (user === cpu) {
          outcome = '<p><b>You:</b> ' + user + '<br /><b>Computer:</b> ' + cpu + '</p><h2>It was a tie.</h2>';
          winCountOutput = 'Played: ' + played + ', wins: ' + wins;
          return;
        }
    else if (user === 'Rock') {
      if (cpu === 'Paper') {
          outcome = '<p><b>You:</b> Rock<br /><b>Computer:</b> Paper</p><h2>The computer wins! Paper covers rock.</h2>';
          winCountOutput = 'Played: ' + played + ', wins: ' + wins;
          return;
        }
      else if (cpu === 'Scissors') {
          outcome = '<p><b>You:</b> Rock<br /><b>Computer:</b> Scissors</p><h2>You win! Rock smashes scissors.</h2>';
          wins += 1;
          winCountOutput = 'Played: ' + played + ', wins: ' + wins;
          return;
        }
    }
    else if (user === 'Paper') {
      if (cpu === 'Rock') {
          outcome = '<p><b>You:</b> Paper<br /><b>Computer:</b> Rock</p><h2>You win! Paper covers rock.</h2>';
          wins += 1;
          winCountOutput = 'Played: ' + played + ', wins: ' + wins;
          return;
        }
      else if (cpu === 'Scissors') {
          outcome = '<p><b>You:</b> Paper<br /><b>Computer:</b> Scissors</p><h2>The computer wins! Scissors cut paper.</h2>';
          winCountOutput = 'Played: ' + played + ', wins: ' + wins;
          return;
        }
    }
    else if (user === 'Scissors') {
      if (cpu === 'Paper') {
          outcome = '<p><b>You:</b> Scissors<br /><b>Computer:</b> Paper</p><h2>You win! Scissors cut paper.</h2>';
          wins += 1;
          winCountOutput = 'Played: ' + played + ', wins: ' + wins;
          return;
        }
      else if (cpu === 'Rock') {
          outcome = '<p><b>You:</b> Scissors<br /><b>Computer:</b> Rock</p><h2>The computer wins! Rock smashes scissors.</h2>';
          winCountOutput = 'Played: ' + played + ', wins: ' + wins;
          return;}
    };

    };
    
    //Call the winner
    determineWinner(userInput,cpuChoice);

    function updateWinner() {
        $('.game-outcome-text').html(outcome);
        $('.win-counter').html(winCountOutput);
    };

    if ($('.hide')[0]){
            updateWinner();
            $(".game-outcome-box").animate({height: 'toggle'}, 400);
            $('.game-outcome-box').removeClass('hide');
            firstRun = false;
    } else {
        $(".game-outcome-box").animate({height: 'toggle', opacity: 0}, 400).queue(function() {updateWinner();console.log('Updated');$(this).dequeue();});
        $(".game-outcome-box").animate({height: 'toggle', opacity: 1}, 400);
    };

    //Reset variables
    cpuChoice = '';
    userInput = '';
    };


    //end of the $(function)
});

