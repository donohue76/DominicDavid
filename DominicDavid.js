// after game ends, asks user if they would like to play again
// answer either yes or no

  var randomNumber = Math.floor((Math.random() * 100) + 1);
  var name = prompt("Enter your name");
  var guess = prompt("Welcome to Can you guess what the computer is thinking! The computer will pick a random number between 1 and 100. You win by guessing the same number. If you guess incorrectly, out of kindness the computer will give you a hint letting you know whether you guessed to high or to low and allow you to guess again. Enter your guess below!");

  var guessesLeft = 6;

    while (randomNumber != guess && guessesLeft > 0){

        if(randomNumber < guess){
          // alert("Your guess was too high, try again!");
          guess = prompt("Your guess was too high, you have " +guessesLeft+ " guesses left. Please try again.");
        }
        else if(randomNumber > guess){
          //alert("Your guess was too low, try again!");
          guess = prompt("Your guess was too low, you have " +guessesLeft+ " guesses left. Please try again.");
        }

        guessesLeft --;
    }

  if (randomNumber == guess){
       alert("Congratulations " +name+ "! You have guessed correctly!")
  }
  else if (guessesLeft == 0){
     alert("Sorry " +name+ "! You were unable to guess correctly within 7 tries!");
  }
