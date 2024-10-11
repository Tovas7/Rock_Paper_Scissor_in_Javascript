const playertext=document.querySelector("#Player_Text");
const computertext=document.querySelector("#Computer_Text");
const resulttext=document.querySelector("#Result_Text");
const choicebtns=document.querySelectorAll(".Choice_Btn");

let player;
let computer;
let result;

choicebtns.forEach(button =>button.addEventListener("click",()=>{

player=button.textContent;
computerTurn();
playertext.textContent=`Player: ${player}`;
computertext.textContent=`Computer: ${computer}`;
resulttext.textContent=checkWinner();
}));
function computerTurn(){
    const randNum=Math.floor(Math.random() *3) + 1;

    switch(randNum){
        case 1:
            computer="ROCK";
            break;
        case 2:
            computer="PAPER";
            break;
        case 3:
            computer="SCISSORS";
            break;
    }
}
function checkWinner(){
    if(player ==computer){
        return "DRAW";
    }else if(computer=="ROCK"){
        return (player=="PAPER" ?"You Win" :"You Lose");
    }
    else if(computer=="PAPER"){
        return (player=="ROCK" ?"You Lose" :"You Win");
    }else if(computer=="SCISSORS"){
        return (player=="PAPER" ?"You Lose" :"You Win");
    }
    else if(computer=="SCISSORS"){
        return (player=="ROCK" ?"You Win" :"You Lose");
    }
}