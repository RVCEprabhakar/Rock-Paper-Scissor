let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset");
let newBtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Top-left to bottom-right diagonal
    [2, 4, 6]  // Top-right to bottom-left diagonal
];

const reset = () => {
    turnO = true;
    enableBoxes();
    boxes.forEach(box => {
        box.innerText = "";
        box.style.backgroundColor = "";
    });
    msgcontainer.classList.add('hide');
}

boxes.forEach((box, index) => {
    box.addEventListener('click', (e) => {
        if (box.innerText === "") {
            if (turnO) {
                e.target.innerHTML = "O";
                e.target.style.color = "red";
                turnO = false;
            } else {
                e.target.innerHTML = "X";
                e.target.style.color = "blue";
                turnO = true;
            }
            box.disabled = true;
            checkWinner();
        }
    });
});

const disableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! ${winner} is the winner`;
    msgcontainer.classList.remove('hide');
    disableBoxes();
}

const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
    });
}

const checkWinner = () => {
    for (let pattern of winningCombinations) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                boxes[pattern[0]].style.backgroundColor = "green";
                boxes[pattern[1]].style.backgroundColor = "green";
                boxes[pattern[2]].style.backgroundColor = "green";
                showWinner(pos1val);
                return;
            }
        }
    }
}

newBtn.addEventListener('click', reset);
resetBtn.addEventListener('click', reset);