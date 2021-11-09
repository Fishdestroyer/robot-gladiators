// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// left off at section 3.2.5
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
// Logged playerMoney var
console.log(playerName, playerAttack, playerHealth, playerMoney);
//
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 100;
var enemyAttack = 12;



// for loop

//for(var i = 0; i < enemyNames.length; i++) {
  //console.log(enemyNames[i]);
  //console.log(i);
 // console.log(enemyNames[i] + " is at " + i + " index");
 //fight(enemyNames[i])
//}



var fight = function(enemyName) {
  window.alert("Welcome to Robot Gladiators!");
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose");
  console.log(promptFight);
// if player chooses to fight
  if (promptFight === "fight" || promptFight === "FIGHT") {

  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth +"health remaining."
    );
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
// check enemies health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } 
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
// check players health
    if (playerHealth <= 0) {
      window.alert(playerName + "has died!")
    }
    else {
      window.alert(playerName + "still has" + playerHealth + "health left.");
        }
        
      }else if (promptFight === "skip" || promptFight === "SKIP") {
        window.alert(playerName + "has chosen to skip the fight !");
      } else {
        window.alert("You need to choose a valid option! Try Again!");
      }
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
          window.alert (playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
        }

        else {
          fight()
        }
         
       
      };

//if (playerHealth > 0) {
//  console.log("Your player is still alive");
//}
// "subtract the value of player attack from the enemy health and use the result to update enemy health" & console log to confirm
// === compares 2 values to see if they are equal to each other
// if (playerHealth === 0) {
 // console.log("This will not run.");
//} 
// else {
//  console.log("This will run instead.");
// }


//fight();
for(var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}
