const score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

function playGame(userMove) {
    const randomNumber = Math.random(); 
    let computerMove = '';
    let result = '';

    if (randomNumber < 1/3) {
        computerMove = 'Rock';
    } else if (randomNumber < 2/3) {
        computerMove = 'Paper';
    } else {
        computerMove = 'Scissors';
    }

    console.log(computerMove);

    if (userMove === computerMove) {
        result = 'Tie';
    } else if (
        (userMove === 'Rock' && computerMove === 'Scissors') ||
        (userMove === 'Paper' && computerMove === 'Rock') ||
        (userMove === 'Scissors' && computerMove === 'Paper')
    ) {
        result = 'You Win';
    } else {
        result = 'You Lose';
    }

    if(result === 'You Win'){
        score.Wins+=1;
    }
    else if(result === 'You Lose'){
        score.Losses+=1;
    }
    else if(result === 'Tie') {
        score.Ties+=1;
    }

    ans(userMove, computerMove, result);

}

function resetGame() {
    score.Wins = 0;
    score.Losses = 0;
    score.Ties = 0;

    ans('None', 'None', 'Scores Reset');
}

function ans(u, c, a) {
    const ans = document.getElementById("answer");
    ans.innerHTML = "";
    const box = document.createElement("div");

    box.innerHTML = `
    You chose ${u}, computer chose ${c} so ${a} <br>
    <div style="text-align: center;">
        <br>
        Wins: ${score.Wins} <br>
        Losses: ${score.Losses} <br>
        Ties: ${score.Ties}
    </div>`;


    ans.append(box);
}
