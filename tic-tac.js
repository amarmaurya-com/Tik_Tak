let boxs = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");

let turn = true;

let winCase = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [3,6,9],
    [2,5,8],
    [1,4,7],
    [1,5,9],
    [3,5,7],
]
boxs.forEach((box)=>{
    box.addEventListener("click",() => {
        console.log("box was clicked");
        box.innerText="ABCD";
    })
})