let score = JSON.parse(localStorage.getItem('score')) || 
		{
			wins: 0,
			losses: 0,
			ties: 0
		};

	updateScoreElement();

	function pickComputerMove() {
		const randomNum = Math.random();
		
		let computerMove;

		if (randomNum >= 0 && randomNum < 1/3) {
			computerMove = 'rock';
		}
		else if (randomNum >= 1/3 && randomNum < 2/3) {
			computerMove = 'paper';
		}
		else if (randomNum >= 2/3 && randomNum < 1) {
			computerMove = 'scissors';
		}

		return computerMove;
	}

	let isAutoPlaying = false;
	let intervalId;

	function autoPlay() {

		if (!isAutoPlaying) {
			intervalId = setInterval(function() {
				const playerMove = pickComputerMove();
				playGame(playerMove);
			}, 1000)
			isAutoPlaying = true;
		}
		else {
			clearInterval(intervalId);
			isAutoPlaying = false;
		}
	}


	function playGame (playerMove) {
		
	const computerMove = pickComputerMove();

		console.log(computerMove);

		let result;

		if (playerMove === 'rock') {
			console.log(computerMove);

			if (computerMove === 'rock') {
				result = 'Tie.';
			}

			else if (computerMove === 'paper') {
				result = 'You lose.';
			}

			else if (computerMove === 'scissors') {
				result = 'You win.';
			}

		
		}

		else if (playerMove === 'paper') {

			if (computerMove === 'rock') {
				result = 'You win.';
			}

			else if (computerMove === 'paper') {
				result = 'Tie.';
			}

			else if (computerMove === 'scissors') {
				result = 'You lose.';
			}

		
		}

		else if (playerMove === 'scissors') {

			if (computerMove === 'rock') {
			result = 'You lose.';
			}

			else if (computerMove === 'paper') {
				result = 'You win.';
			}

			else if (computerMove === 'scissors') {
				result = 'Tie.';

			}
		
		}

		if (result === 'You win.') {
			score.wins++;
		}
		else if (result === 'You lose.') {
			score.losses++;
		}
		else if (result === 'Tie.') {
			score.ties++;
		}

		localStorage.setItem('score', JSON.stringify(score));

		updateScoreElement();

		document.querySelector('.js-result').
			innerHTML = result;
		
		document.querySelector('.js-moves').
			innerHTML = `You picked <img src="assets/${playerMove}.png">. Computer picked <img src="assets/${computerMove}.png">.`;

		//alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} \n Wins: ${score.wins} \n Losses: ${score.losses} \n Ties: ${score.ties}`);
	}

	function updateScoreElement () {
		document.querySelector('.js-score')
		.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;


	}