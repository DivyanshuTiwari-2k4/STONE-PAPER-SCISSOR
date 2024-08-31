let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const msg=document.querySelector("#msg")
const choices=document.querySelectorAll(".choice")


const genCompChoice=()=>{
    const options=["rock","paper","scissor"]
    const randIndx=Math.floor(Math.random()*3)
    return options[randIndx]
}
const drawGame=()=>{
    console.log("Game was draw")
    msg.innerText="Game was Draw!"
    msg.style.backgroundColor="#081b31"
}

const showWinner=(userWin,userChoice,CompChoice)=>{
    if(userWin){
        console.log("you win")
        msg.innerText=`You win! Your ${userChoice} beats Comp's ${CompChoice}`
        msg.style.backgroundColor="green"
        userScore++
        userScorePara.innerText=userScore
    }
    else{
        console.log("comp win")
        msg.innerText=`Comp win! Comp's ${CompChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red"
        compScore++
        compScorePara.innerText=compScore
    }
}

const playGame=(userChoice)=>{
console.log("user choice",userChoice)
//Generate  computer choice
const CompChoice=genCompChoice()
console.log("comp choice",CompChoice)
if(userChoice===CompChoice){
    drawGame()
}
else {
    let userWin=true
    if(userChoice==="rock"){
        //scissor,paper
        userWin=CompChoice==="paper"?false:true
    } 
    else if(userChoice==="paper"){
        //rock,scissors
        userWin=CompChoice==="scissor"?false:true
    }
    else{
        //rock,paper
        userWin=CompChoice==="rock"?false:true
    }
    showWinner(userWin,userChoice,CompChoice)
}
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
    })
})