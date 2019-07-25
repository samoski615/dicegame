

// function rollDice(numberOfSides){
// 	let randomNumber =Math.ceil(Math.random()*numberOfSides);
// 	console.log(randomNumber);
// }
	// let result = rollDice(4);



function rollDice(numberOfSides){
		let randomNumber = Math.ceil(Math.random()*numberOfSides);
		return randomNumber;
}

// function runGame(){
// 	let currentLevel = 1;

	let input = rollDice(4);
	switch(input){
		case 1:
			console.log("You Win!");
			let userInput = prompt("Press Your Luck? Type 'YES' for a 50/50 chance at either skipping a level or getting a GAME OVER! Type 'NO' to proceed to next level.");
			if (userInput == "yes"){

				let pressYourLuck = rollDice(2);
				if (pressYourLuck == 1) {
					console.log("You WIN! Skip a Level!");
				}	
				else if(pressYourLuck == 2) {
					console.log("YOU LOSE! GAME OVER!");
				}	
			}

			if (userInput == "no"){
						console.log("Proceed to the Next Level.");
			}

			break;
		case 2:
			console.log("You Win!!");	
			break;
		case 3:
			console.log("You Win!!!");
			break;
		default:
			console.log("You Lose! Game Over.");
		break;
	}

// }


// runGame();
	