function compare () {
    let answer = document.querySelector('#userInput');
    let reaction = document.querySelector('#response');
    answer = answer.value;
    answer = Number(answer);

    switch (true) {
        case (answer == 24):
            reaction.innerHTML = "correct";
            break;
        case (answer > 24) :
                reaction.innerHTML = answer + " is too high";
                break;
        case ((answer > 24) && (answer <= 28)) :
                reaction.innerHTML = answer + " is too high but pretty close";
                break;
        case (answer < 24) :
                reaction.innerHTML = answer + " is too low";
                break;
        case ((answer < 24) && (answer >= 20)) :
                reaction.innerHTML = answer + " is too low but pretty close";
                break;
    } //switch
    
    /*if (answer == 24) {
        reaction.innerHTML = "correct";
    } else if (answer > 24) {
        reaction.innerHTML = answer + " is too high";
    } else if ((answer > 24) && (answer <= 28)) {
        reaction.innerHTML = answer + " is too high but pretty close";
    } else if (answer < 24) {
        reaction.innerHTML = answer + " is too low";
    } else if ((answer < 24) && (answer >= 20)) {
        reaction.innerHTML = answer + " is too low but pretty close";
    }//if
    */
} //compare
