

// function rollDice(numberOfSides){
// 	let randomNumber =Math.ceil(Math.random()*numberOfSides);
// 	console.log(randomNumber);
// }
	// let result = rollDice(4);



function rollDice(numberOfSides){									//roll dice function
		let randomNumber = Math.ceil(Math.random()*numberOfSides);
		return randomNumber;
}

// function runGame(){
// 	let currentLevel = 1;

	let input = rollDice(4);//LEVEL 1								//user rolls dice 
	switch(input){													//if they win, they can choose to 'roll again' to try and skip a level
		case 1:
			console.log("You Win!");								//I don't have the code to skip to next level yet
			let userInput = prompt("Press Your Luck?\nType 'YES' for a 50/50 chance at either skipping a level or getting a GAME OVER!\nType 'NO' to proceed to next level.");
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
			userInput = prompt("Press Your Luck?\nType 'YES' for a 50/50 chance at either skipping a level or getting a GAME OVER!\nType 'NO' to proceed to next level.");
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
		case 3:
			console.log("You Win!!!");
			userInput = prompt("Press Your Luck?\nType 'YES' for a 50/50 chance at either skipping a level or getting a GAME OVER!\nType 'NO' to proceed to next level.");
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
		default:
			console.log("You Lose! Game Over.");
		break;
	}

	// input = rollDice(6);//LEVEL 2							
	// switch(input){													
	// 	case 1:
	// 		console.log("You Win!");								
	// 		userInput = prompt("Press Your Luck?\nType 'YES' for a 50/50 chance at either skipping a level or getting a GAME OVER!\nType 'NO' to proceed to next level.");
	// 		if (userInput == "yes"){

	// 			let pressYourLuck = rollDice(2);
	// 			if (pressYourLuck == 1) {
	// 				console.log("You WIN! Skip a Level!");
	// 			}	
	// 			else if(pressYourLuck == 2) {
	// 				console.log("YOU LOSE! GAME OVER!");
	// 			}	
	// 		}

	// 		if (userInput == "no"){
	// 					console.log("Proceed to the Next Level.");
	// 		}
	// 		break;
	// 	case 2:
	// 		console.log("You Win!!");
	// 		userInput = prompt("Press Your Luck?\nType 'YES' for a 50/50 chance at either skipping a level or getting a GAME OVER!\nType 'NO' to proceed to next level.");
	// 		if (userInput == "yes"){

	// 			let pressYourLuck = rollDice(2);
	// 			if (pressYourLuck == 1) {
	// 				console.log("You WIN! Skip a Level!");
	// 			}	
	// 			else if(pressYourLuck == 2) {
	// 				console.log("YOU LOSE! GAME OVER!");
	// 			}	
	// 		}

	// 		if (userInput == "no"){
	// 					console.log("Proceed to the Next Level.");
	// 		}	
	// 		break;
	// 	case 3:
	// 		console.log("You Win!!!");
	// 		userInput = prompt("Press Your Luck?\nType 'YES' for a 50/50 chance at either skipping a level or getting a GAME OVER!\nType 'NO' to proceed to next level.");
	// 		if (userInput == "yes"){

	// 			let pressYourLuck = rollDice(2);
	// 			if (pressYourLuck == 1) {
	// 				console.log("You WIN! Skip a Level!");
	// 			}	
	// 			else if(pressYourLuck == 2) {
	// 				console.log("YOU LOSE! GAME OVER!");
	// 			}	
	// 		}

	// 		if (userInput == "no"){
	// 					console.log("Proceed to the Next Level.");
	// 		}
	// 		break;
	// 	case 4:
	// 		console.log("You Win!!!");
	// 		userInput = prompt("Press Your Luck?\nType 'YES' for a 50/50 chance at either skipping a level or getting a GAME OVER!\nType 'NO' to proceed to next level.");
	// 		if (userInput == "yes"){

	// 			let pressYourLuck = rollDice(2);
	// 			if (pressYourLuck == 1) {
	// 				console.log("You WIN! Skip a Level!");
	// 			}	
	// 			else if(pressYourLuck == 2) {
	// 				console.log("YOU LOSE! GAME OVER!");
	// 			}	
	// 		}
	// 	default:
	// 		console.log("You Lose! Game Over.");
	// 	break;
	// }
		
// // }


// // runGame();
// 	