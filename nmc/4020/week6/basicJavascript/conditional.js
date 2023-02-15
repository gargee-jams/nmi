function compare () {
    let answer = document.querySelector('#userInput');
    let reaction = document.querySelector('#response');
    answer = Number(answer.value);
    if (answer == 24) {
        reaction.innerHTML = "correct";
    } else {
        reaction.innerHTML = "wrong answer";
    } //if
} //compare
