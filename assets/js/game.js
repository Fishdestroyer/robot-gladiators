var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);
//
var enemyName = "Roborto";
var enemyHealth = 100;
var enemyAttack = 12;

var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
  enemyHealth = enemyHealth - playerAttack;
  console.log(
    playerName + "attacked" + enemyName + "." + enemyName + "now has" + enemyHealth +"health remaining."
    );
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } 
    else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    if (playerHealth <= 0) {
      window.alert(playerName + "has died!")
    }
    else {
      window.alert(playerName + "still has" + playerHealth + "health left.");
        }
      };

//if (playerHealth > 0) {
//  console.log("Your player is still alive");
//}
// "subtract the value of player attack from the enemy health and use the result to update enemy health" & console log to confirm
// === compares 2 values to see if they are equal to each other
if (playerHealth === 0) {
  console.log("This will not run.");
} 
else {
  console.log("This will run instead.");
}


// var playerName = "Tony the Robot"
// console.log(playerName + "is ready for battle")

fight();
