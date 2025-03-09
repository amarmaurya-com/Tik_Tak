let boxs = document.querySelectorAll(".box");
let reset = document.querySelector("#button");
let msgContainer = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new-btn");
let turn = true;

let winCase = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetgame = () =>{
    turn =true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxs.forEach((box)=>{
    box.addEventListener("click",() => {
        console.log("box was clicked");
        if(turn){
            box.innerText="X";
            turn=false;
        }else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const disablebox = ()=>{
    for(let box of boxs){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for (let box of boxs){
        box.disabled=false
        box.innerText="";
    }
}
const showWinner = (winner) =>{
    msgContainer.classList.remove("hide");
    disablebox();
};
const checkWinner = ()=>{
    for (winner of winCase){
        let pos1val=boxs[winner[0]].innerText;
        let pos2val=boxs[winner[1]].innerText;
        let pos3val=boxs[winner[2]].innerText;
        if(pos1val!="" &&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
}
newbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);