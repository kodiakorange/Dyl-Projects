let handSum;

function checkScore() {
	if (handSum === 21) {
		document.querySelector("h1").textContent = "Blackjack! You Win!";
	} else if (handSum > 21) {
		document.querySelector("h1").textContent = "You fool! You've busted and now you lose! Haha";
	} else if (handSum < 21) {
		document.querySelector("h1").textContent = "Hit to draw another card, if you dare";
	}
}

function dealHand() {
	let firstCard = Math.floor(10 * Math.random() + 2);
	let secondCard = Math.floor(10 * Math.random() + 2);
	handSum = firstCard + secondCard;
	document.querySelector("#firstDraw").textContent =
		"Your hand is a " + firstCard + " and a " + secondCard + ". Your total is " + handSum;
	checkScore();
}

function drawCard() {
	let newCard = Math.floor(10 * Math.random() + 2);
	handSum = handSum + newCard;
	document.querySelector("#firstDraw").textContent = "You drew a " + newCard + ". Your new total is " + handSum;
	checkScore();
}

document.querySelector("#dealButton").addEventListener("click", dealHand);
document.querySelector("#hitButton").addEventListener("click", drawCard);
