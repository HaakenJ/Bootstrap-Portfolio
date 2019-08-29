// let userchoice = document.getElementById("playForm").onsubmit();


let choiceFunction = function() {
    let radio = document.forms['playForm'].elements['rps'];
    for (i=0; i < radio.length; i++) {
        if (radio[i].checked) {
            let rpsChoice = radio[i].value;
            break;
        }
    }
    return rpsChoice
}

let randomNumber = function() {
    let compChoice = Math.floor(Math.random() * 3);
    return compChoice;
}

let winLoseTie = function(choice, number) {
    let rpsComp = options[computer];
    // TODO: define winObj.
    // TODO: deine loseObj.


    if (winObj[choice] === rpsComp) {
        // you win
    }
    else if (loseObj[choice] === rpsComp) {
        // you lose
    }
    else {
        // you lose
    }
}