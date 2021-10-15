let firstPlayerName="";
let secondPlayerName="";
let firstPlayerScore=0;
let secondPlayerScore=0;
let totalScore=0;
function onSubmit(event){
    event.preventDefault();
    const formData =document.getElementsByTagName("input");
    firstPlayerName=formData[0].value;
    secondPlayerName=formData[1].value;
    totalScore=formData[2].value;
    console.log(firstPlayerName);
    console.log(secondPlayerName);
    console.log(totalScore);
    document.getElementById("form-container").style.display = "none";
    document.getElementById("board-container").style.display = "block";   
    document
    .getElementById("player1")
    .getElementsByClassName("heading")[0].innerHTML= firstPlayerName;
    document
    .getElementById("player2")
    .getElementsByClassName("heading")[0].innerHTML = secondPlayerName;
}

function roll(playerindex){
    const randomNumber = getRandom();
    const playerNodes = document.getElementById(`player${playerindex}`);
    playerNodes.querySelector(".dice-img img").setAttribute("src",`./images/dice${randomNumber}.png`);
    switch(playerindex){
        case 1: 
        firstPlayerScore += randomNumber;
        playerNodes.style.backgroundColor="lightgray";
        playerNodes.getElementsByClassName("score")[0].innerHTML=firstPlayerScore;
        playerNodes.getElementsByTagName("input")[0].setAttribute("disabled",true);
        document.getElementById("player2").getElementsByTagName("input")[0].removeAttribute("disabled");
        document.getElementById("player2").style.backgroundColor = "transparent";
        break;
        case 2:
        secondPlayerScore += randomNumber;
        playerNodes.style.backgroundColor="lightgray";
        playerNodes.getElementsByClassName("score")[0].innerHTML=secondPlayerScore;
        playerNodes.getElementsByTagName("input")[0].setAttribute("disabled",true);
        document.getElementById("player1").getElementsByTagName("input")[0].removeAttribute("disabled");
        document.getElementById("player1").style.backgroundColor = "transparent";
        break;
        default:
        break;
    }
    checkWinner();
}

function getRandom(){
    return Math.floor(Math.random()*6) + 1;
}

function checkWinner(){
    if(firstPlayerScore >= totalScore){
        console.log(totalScore);
        document.getElementById("player1").innerHTML+=`<div id="winner" class="winner"></div>`;
        document.getElementById("player2").getElementsByTagName("input")[0].setAttribute("disabled",true);
        document.getElementById("restart").style.display="flex";
        document.getElementById("reset").style.display="flex";
    }
    if(secondPlayerScore >= totalScore){
        console.log(totalScore);
        document.getElementById("player2").innerHTML+=`<div id="winner" class="winner"></div>`;
        document.getElementById("player1").getElementsByTagName("input")[0].setAttribute("disabled",true);
        document.getElementById("restart").style.display="flex";
        document.getElementById("reset").style.display="flex";
    }
}

function restart(){
   window.location.reload();
}
function reset(){
    firstPlayerScore=0;
    document.getElementById("player1").getElementsByClassName("score")[0].innerHTML=firstPlayerScore;
    document.getElementById("player1").getElementsByTagName("input")[0].removeAttribute("disabled");
    secondPlayerScore=0;
    document.getElementById("player2").getElementsByClassName("score")[0].innerHTML=secondPlayerScore;
    
    document.getElementById("player2").getElementsByTagName("input")[0].removeAttribute("disabled");
    const win = document.getElementById("winner");
    win.remove();
    document.getElementById("restart").style.display="none";
    document.getElementById("reset").style.display="none";
    


}