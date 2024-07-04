
let t_points;
let username;
function startGame() {
    game_end = false;
    document.getElementById("Restart").style.display = "none";
    user_score = 0;
    comp_score = 0;
    document.getElementById("usc").textContent = user_score;
    document.getElementById("csc").textContent = comp_score;

    username = document.getElementById("username").value.trim();
    if (username === "") {
        alert("Please enter your name to start the game.");
        return;
    }
    t_points = document.getElementById("score").value.trim();


    while (t_points == 0) {
        alert("Game Cannot be of 0 points");
        t_points = prompt("How many points Game you want to play");
    }

    document.getElementById("welcomePage").style.display = "none";
    document.getElementById("gamePage").style.display = "block";

    alert(`Welcome ${username}! Let's start the game!`);
}
let user_score = 0;
let comp_score = 0;

let game_end = false;

function ComputerChoice() {
    let comp_choice = Math.floor(Math.random() * 3);
    switch (comp_choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissor';
    }
}

function userChoice(choice) {
    if (!game_end) {
        let userchoice = choice;
        let c_choice = ComputerChoice();
        document.getElementById("computerChoice").textContent = `${c_choice}`;
        console.log(`User chose ${userchoice} and Computer Chose ${c_choice}`);

        if (
            (userchoice === 'rock' && c_choice === 'scissor') ||
            (userchoice === 'paper' && c_choice === 'rock') ||
            (userchoice === 'scissor' && c_choice === 'paper')
        ) {

            user_score++;
        } else if (
            (userchoice === 'rock' && c_choice === 'paper') ||
            (userchoice === 'paper' && c_choice === 'scissor') ||
            (userchoice === 'scissor' && c_choice === 'rock')
        ) {

            comp_score++;
        }
        document.getElementById("usc").textContent = user_score;
        document.getElementById("csc").textContent = comp_score;

        if (user_score == t_points) {
            console.log("User Won");
            game_end = true;
            alert(`${username} won the Game!! Congratulations`);
        } else if (comp_score == t_points) {
            console.log("Computer Won");
            game_end = true;
            alert(`Better luck next time ${username}`);
        }

        if (game_end) {
            alert("Game Ended");
            document.getElementById("Restart").style.display = "block";
        }
    }
}

// Event listeners for user's choice
document.getElementById('stone').addEventListener('click', function () {
    userChoice('rock');
});

document.getElementById('paper').addEventListener('click', function () {
    userChoice('paper');
});

document.getElementById('scissors').addEventListener('click', function () {
    userChoice('scissor');
});
