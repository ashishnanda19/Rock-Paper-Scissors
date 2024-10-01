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

    ans(userMove, computerMove, result);
}


function ans(u, c, a) {
    const ans = document.getElementById("answer");
    ans.innerHTML = "";
    const box = document.createElement("div");

    box.innerHTML = `You chose ${u}, computer chose ${c} so ${a}`;

    ans.append(box);
}
