//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 Down!!!
//랜덤번호가 > 유저번호 Up!!
//Reset 버튼을 누르면 게임이 리셋된다.
//5번의 기회를 다쓰면 게임이 끝난다. (더 이상 추측불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
//유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깎지 않는다.

let computerNum = 0;
let userInput = document.getElementById('user-input');
let resultArea = document.getElementById('result-area');
let playButton = document.getElementById('play-button');
let resetButton = document.getElementById('reset-button');
let chanceArea = document.getElementById('chance-area');
let gameOver = false;
let chances = 5;
let history = [];



function randomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log(computerNum);
}
randomNum();

playButton.addEventListener('click',play);

userInput.addEventListener('focus', function(){
    userInput.value ='';
});

function play(){
    let userValue = userInput.value;
    if(userValue<1 || userValue>100){
        resultArea.textContent = "1이상 100이하의 숫자를 입력하세요";
        return;
    }
    if(history.includes(userValue)){
        resultArea.textContent = "이미 있음 다시 입력";
        return;
    }

    chances --;
    chanceArea.textContent = `기회는? ${chances}`;

    if(userValue<computerNum){
        resultArea.textContent = "up!"
    } else if(userValue>computerNum){
        resultArea.textContent = "down!"
    } else {
        resultArea.textContent = "맞췄다!"
        playButton.disabled = true;
    }

    history.push(userValue);
    console.log(history);

    if(chances<1){
        gameOver = true;
    }
    
    if(gameOver == true){
        playButton.disabled = true;
    }
}

resetButton.addEventListener("click", reset);
function reset(){
    randomNum();
    userInput.value ='';
    chances = 5;
    chanceArea.textContent = `기회는? ${chances}`;
    resultArea.textContent = "결과가 나온다.";
    playButton.disabled = false;
    history=[];
    
}
