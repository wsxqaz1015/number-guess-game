let computer = 0;
let resultText = document.querySelector('.result-text');
let chanceArea = document.getElementById('chance-area');
let userInput = document.getElementById('user-input');
let userButton = document.getElementById('user-button');
let resetButton = document.getElementById('reset-button'); 
let resultTextImg = document.querySelector(".result-img");
let chances = 5;
let gameOver = false;
let history = [];



function randomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log(computerNum);
}   
randomNum();

userButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
function play(){
    let userValue = userInput.value;

    if(userValue<1 || userValue>100){
        resultText.textContent = "1이상 100이하의 숫자를 입력하세요!"
        return;
    }
    if(history.includes(userValue)){
        resultText.textContent = "이미 입력한 값입니다 다른 숫자를 입력하세요!"
        return;
    }

    chances --;
    chanceArea.textContent = `남은 기회: ${chances}`;
    
    if(userValue<computerNum){
        resultText.textContent = "up!"
        resultTextImg.src="https://media0.giphy.com/media/3ov9jExd1Qbwecoqsg/200.gif";
    } else if(userValue>computerNum){
        resultText.textContent = "down!"
        resultTextImg.src="https://media.giphy.com/media/r2puuhrnjG7vy/giphy.gif";
    } else {
        resultText.textContent = "맞췄다!"
        resultTextImg.src="https://media.tenor.com/images/0a81b89954678ebe228e15e35044f7a5/tenor.gif";
        userButton.disabled=true;
    }

    if(chances<1){
        gameOver = true;
    }
    if(gameOver == true){
        userButton.disabled=true;
    }

    history.push(userValue);
    console.log(history);

}
function reset(){
    userInput.value ="";
    randomNum();
    chances = 5;
    chanceArea.textContent = `남은 기회: ${chances}`;
    resultText.textContent = "결과가 나온다!"
    history =[];
    userButton.disabled=false;
}