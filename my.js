var coins = 100;

document.onload = document.getElementById('log').innerHTML = "Welcome to JohnGambling!!!" +"\n"+ "You start out with " + coins + " coins" +"\n"+ "For help type: !help" +"\n" +"\n";
//Does so you're able to use Enter instead of button.
document.getElementById('inputField').onkeypress=function(e){
    if(e.keyCode==13){
        document.getElementById('sendBTN').click();
    }
}

function send() {
  if(!coins > 0){
      document.getElementById('log').innerHTML += "You've been gambling carelessly like an idiot and you're now out of coins, you dumbass.." +"\n";
      document.getElementById('inputField').value = "";
  } else {
    if(document.getElementById('inputField').value == "!help"){
        document.getElementById('log').innerHTML += "\n"+
        "- - - - - - - - - - - - - - - - -" +"\n"+
        "| For coin overview type: !coins |" +"\n"+
        "| To gamble type: !gamble        |" +"\n"+
        "| To all in type: !all           |" + "\n"+
        "| To clear log type: !clear      |" + "\n"+
        "- - - - - - - - - - - - - - - - -" +"\n" +"\n";
    } else if (document.getElementById('inputField').value == "!coins") {
        document.getElementById('log').innerHTML += "You have: " + coins + " coins." +"\n";
    } else if (document.getElementById('inputField').value == "!gamble") {

        var userInput = (function ask() {
        var n = prompt("Please enter the amount you want to gamble" , "");
        return isNaN(n) || +n > coins || +n < 1 ? ask() : n;
        }());

        if(userInput <= coins){
          roll = Math.floor(Math.random()*(100-1+1)+1);
          if(roll < 50){
            document.getElementById('log').innerHTML += "You rolled: " + roll + "." + " You lost " + userInput +"\n";
            coins = coins - userInput;
            document.getElementById('log').innerHTML += "You now have " + coins + " coins." +"\n"
          } else if (roll > 50 && roll < 100) {
            document.getElementById('log').innerHTML += "You rolled: " + roll + "." + " You won " + userInput +"\n";
            coins = +coins + +userInput;
            document.getElementById('log').innerHTML += "You now have " + coins + " coins." +"\n"
          } else if (roll = 100) {
            document.getElementById('log').innerHTML += "You rolled: " + roll + "." + " You won " + (userInput*3) +"\n";
            coins = +coins + (+userInput*3);
            document.getElementById('log').innerHTML += "You now have " + coins + " coins." +"\n"
          }
        } else {
          document.getElementById('log').innerHTML += "Sir.. Don't be an idiot. You only have " + coins + " coins." +"\n";
        }

    } else if (document.getElementById('inputField').value == "!clear") {
        document.getElementById('log').innerHTML = "For help type: !help" +"\n"+ "You have " + coins + " coins" +"\n" +"\n";;
    } else if (document.getElementById('inputField').value == "!all") {
        roll = Math.floor(Math.random()*(100-1+1)+1);
        if(roll < 50){
          document.getElementById('log').innerHTML += "You rolled: " + roll + "." + " You lost " + coins +"\n";
          coins = coins - coins;
          document.getElementById('log').innerHTML += "You now have " + coins + " coins." +"\n"
        } else if (roll > 50 && roll < 100) {
          document.getElementById('log').innerHTML += "You rolled: " + roll + "." + " You won " + coins +"\n";
          coins = +coins + +coins;
          document.getElementById('log').innerHTML += "You now have " + coins + " coins." +"\n"
        } else if (roll = 100) {
          document.getElementById('log').innerHTML += "You rolled: " + roll + "." + " You won " + (coins*3) +"\n";
          coins = +coins + (+coins*3);
          document.getElementById('log').innerHTML += "You now have " + coins + " coins." +"\n"
        }
    } else {
        document.getElementById('log').innerHTML += "Please enter a valid command" +"\n";
    }
      document.getElementById('inputField').value = "";
  }
}
