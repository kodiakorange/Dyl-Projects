let handSum;
let currentPot = 0;
let bankroll = 100;

function checkScore() {
	if (handSum === 21) {
		document.querySelector("h1").textContent = "Blackjack! You Win!";
		bankroll += currentPot;
		document.getElementById("bankrollDisplay").textContent = "$ " + bankroll + " in hand";
		currentPot = 0;
		document.getElementById("currentPot").textContent = "$" + currentPot + " in the pot";
	} else if (handSum > 21) {
		document.querySelector("h1").textContent = "You fool! You've busted and now you lose! Haha";
		currentPot = 0;
		document.getElementById("currentPot").textContent = "$" + currentPot + " in the pot";
	} else if (handSum < 21) {
		document.querySelector("h1").textContent = "Hit to draw another card, if you dare";
	}
}

function dealHand() {
	betMoney();
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

function betMoney() {
	if (bankroll == 0) {
		document.querySelector("h1").textContent = "You're broke! Get the hell out of here!";
	} else {
		bankroll -= 10;
		currentPot += 20;
		document.getElementById("currentPot").textContent = "$" + currentPot + " in the pot";

		document.getElementById("bankrollDisplay").textContent = "$ " + bankroll + " in hand";
	}
}

function reset() {
	location.reload();
}

document.querySelector("#dealButton").addEventListener("click", dealHand);
document.querySelector("#hitButton").addEventListener("click", drawCard);
document.querySelector("#betButton").addEventListener("click", betMoney);
document.querySelector("#resetButton").addEventListener("click", reset);
