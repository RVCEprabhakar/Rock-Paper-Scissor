const choices = document.querySelectorAll(".choice");
const userScoreElement = document.getElementById("user-score");
const comScoreElement = document.getElementById("com-score");
const msgElement = document.getElementById("msg");

let userscore = 0;
let comscore = 0;

const drawgame = () => {
    console.log("It is a Draw!");
    msgElement.innerText = "It's a draw! Play your move.";
    msgElement.style.color = "orange";
    msgElement.style.backgroundColor = "lightgray"; // Change background color for draw
};

const getcomputerchoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
};

const playgame = (userchoice) => {
    console.log("userchoice", userchoice);
    // next step is to get the computer choice
    const computerchoice = getcomputerchoice();
    console.log("computerchoice", computerchoice);

    if (userchoice === computerchoice) {
        // draw
        drawgame();
    } else {
        if (userchoice === "rock") {
            if (computerchoice === "paper") {
                console.log("computerchoice wins");
                comscore++;
                comScoreElement.innerText = comscore;
                msgElement.innerText = "Computer wins! Play your move.";
                msgElement.style.color = "white";
                msgElement.style.backgroundColor = "red"; // Change background color for computer win
            } else {
                console.log("userchoice wins");
                userscore++;
                userScoreElement.innerText = userscore;
                msgElement.innerText = "You win! Play your move.";
                msgElement.style.color = "white";
                msgElement.style.backgroundColor = "green"; // Change background color for user win
            }
        } else if (userchoice === "paper") {
            if (computerchoice === "scissors") {
                console.log("computerchoice wins");
                comscore++;
                comScoreElement.innerText = comscore;
                msgElement.innerText = "Computer wins! Play your move.";
                msgElement.style.color = "white";
                msgElement.style.backgroundColor = "red"; // Change background color for computer win
            } else {
                console.log("userchoice wins");
                userscore++;
                userScoreElement.innerText = userscore;
                msgElement.innerText = "You win! Play your move.";
                msgElement.style.color = "white";
                msgElement.style.backgroundColor = "green"; // Change background color for user win
            }
        } else if (userchoice === "scissors") {
            if (computerchoice === "rock") {
                console.log("computerchoice wins");
                comscore++;
                comScoreElement.innerText = comscore;
                msgElement.innerText = "Computer wins! Play your move.";
                msgElement.style.color = "white";
                msgElement.style.backgroundColor = "red"; // Change background color for computer win
            } else {
                console.log("userchoice wins");
                userscore++;
                userScoreElement.innerText = userscore;
                msgElement.innerText = "You win! Play your move.";
                msgElement.style.color = "white";
                msgElement.style.backgroundColor = "green"; // Change background color for user win
            }
        }
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked here", userchoice);
        playgame(userchoice);
    });
});