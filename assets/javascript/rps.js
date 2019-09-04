// Function to get the value of the users choice in the radio button form.
let getUserRPSChoice = function () {
    // Create an array of the values of the checkboxes.
    let userChoiceRadio = document.forms['playForm'].elements['rps'];
    // Loop over each item in the array to see which one is checked.
    for (i = 0; i < userChoiceRadio.length; i++) {
        if (userChoiceRadio[i].checked) {
            // Store the value of the checked radio button and end the function. 
            let rpsUser = userChoiceRadio[i].value;
            return rpsUser;
        }
    }
}




/* Create a random number between 0-1.  Multiply by 3 and round down to result 
 in a number between 1-2. */
let getRandomNumber = function () {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}




/* Create counter functions to display the 
number of games played, wins, losses, and ties. */
let gameCounter = function () {
    document.getElementById('game-count').innerHTML = parseInt(document.getElementById('game-count').innerHTML) + 1;
}
let winCount = function () {
    document.getElementById('wins').innerHTML = parseInt(document.getElementById('wins').innerHTML) + 1;
}
let lossCount = function () {
    document.getElementById('losses').innerHTML = parseInt(document.getElementById('losses').innerHTML) + 1;
}
let tieCount = function () {
    document.getElementById('ties').innerHTML = parseInt(document.getElementById('ties').innerHTML) + 1;
}



/* Function to find out if the user's choice wins, loses, or ties with the 
computer's choice. */
let winLoseTie = function (choice, number) {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors'

    /* Array of choices gets indexed using the computer's random number to give
    the computer's choice. */
    let options = [rock, paper, scissors];
    let rpsComp = options[number];

    // Display the computer's choice to the user, no suspicion of foul play here!
    document.getElementById('compChoice').setAttribute('value', rpsComp);

    /* Defining an object with a user's choice as the property and what value 
     is required for that choice to result in a win. */

    var winObj = {
        rock: scissors,
        paper: rock,
        scissors: paper
    };

    /* Defining an object with a user's choice as the property and what value 
     is required for that choice to result in a loss. */
    var lossObj = {
        rock: paper,
        paper: scissors,
        scissors: rock
    };

    /* Check if the value associated with the user's choice in winObj is the 
     same as the computer's choice. */
    if (winObj[choice] === rpsComp) {
        // Let the user know they won.
        document.getElementById('result').setAttribute('value', 'You win!');
        winCount();

        /* Check if the value associated with the user's choice in lossObj is the 
         same as the computer's choice. */
    } else if (lossObj[choice] === rpsComp) {
        // Let the user know they lost.
        document.getElementById('result').setAttribute('value', 'You lose...');
        lossCount();

        // No need to check if there is a tie as that is the only remaining option.
    } else {
        // Let the user know they tied.
        document.getElementById('result').setAttribute('value', 'It\'s a tie!');
        tieCount();
    }
}