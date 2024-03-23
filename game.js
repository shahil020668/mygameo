let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgmbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;//player X, player 0

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
   box.addEventListener("click", () =>{
    console.log("box was clicked");
    
    if(turn0){ // player 0
        box.innerText = "0";
        turn0 = false;
    } else { //player x
        box.innerText = "x";
        turn0 = true
       }

    box.disabled = true;
    checkwinner();
   });
});

const showWinner = (Winner) => {
    msg.innerText = `Congratulation, winner is ${Winner}`;
    msgContainer.classList.remove("hide");
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const checkwinner = () => {
    for (let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("Winner");
                showWinner(pos1val);
                disableBoxes();
                console.log("Winner !!!");
            }
        }
    }
};


newgmbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);