function styleGrammar(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}


playerSelection = styleGrammar(prompt('Rock, Paper or Scissors?'));

playerScore = 0;
computerScore = 0;

function computerPlay() {
    const selection = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * selection.length);
    return selection[choice];
}

function playRound(playerSelection, computerSelection) {
    const won = `You win! ${playerSelection} beats ${computerSelection}.`;
    const lost = `You lose. ${computerSelection} beats ${playerSelection}.`;
    const tied = 'It\'s a tie.';

    if (playerSelection === computerSelection) {
        console.log('tied');
        return tied;
    } else if ((playerSelection == 'Rock') && (computerSelection == 'Paper')) {
        console.log('computer gets a point');
        computerScore++;
        return lost;
    } else if ((playerSelection == 'Rock') && (computerSelection == 'Scissors')) {
        playerScore++;
        console.log('player gets a point');
        return won;
    } else if ((playerSelection == 'Paper') && (computerSelection == 'Scissors')) {
        computerScore--;
        console.log('computer gets a point');
        return lost;
    } else if ((playerSelection == 'Paper') && (computerSelection == 'Rock')) {
        playerScore++;
        console.log('player gets a point');
        return won;
    } else if ((playerSelection == 'Scissors') && (computerSelection == 'Rock')) {
        computerScore--;
        console.log('computer gets a point');
        return lost;
    } else if ((playerSelection == 'Scissors') && (computerSelection == 'Paper')) {
        playerScore++;
        console.log('player gets a point');
        return won;
    }
}

function game() {
    playRound(playerSelection, computerPlay());
    playRound(playerSelection, computerPlay());
    playRound(playerSelection, computerPlay());
    playRound(playerSelection, computerPlay());
    playRound(playerSelection, computerPlay());
    if (playerScore > computerScore) {
        console.log(`Congratulations, you won! The final score was ${playerScore} to ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`Sorry, you lost. The final score was ${playerScore} to ${computerScore}`);
    } else {
        console.log(`Tie game. The final score was ${playerScore} to ${computerScore}`);
    }
}

game();