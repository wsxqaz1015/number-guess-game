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
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea=document.getElementById("chance-area");
let history=[] //값이 여러 개가 들어가기 때문에 배열로 담아준다.

playButton.addEventListener('click', play); //함수를 매개변수로 사용할 경우 ()을 쓰게되면 그냥 실행이 되어버리기 때문에 사용하면 안된다.(알게된 점 : 함수도 변수처럼 넘길 수 있다.)
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){ //focus : 어떤 것에 커서가 되어있을 때 뭘 해줄지에 대한 이벤트 / 여기서 익명함수(function)를 쓴 이유 : 여기서만 잠깐 쓰고 끝날 함수이기때문에
    userInput.value = "";
})

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1; //랜덤한 숫자를 뽑을 수 있게 도와주는 함수
    console.log("정답", computerNum);

    /*Math.random이라는 함수을 콘솔로 찍어보면 소수점이 나온다. -> 0 ~ 1사이의 숫자를 반환해주는 함수이다. 이면서 1은 포함시키지않는다. 1에 가까운 숫자를 반환하는식이다.
    *100을 해주면 두자리 숫자가 나오게 된다. 75.132564이런식으로 나오는 것을 소수점을 없애주기 위해 Math.floor을 써서 소수점을 버려주게 해준다.
    Math.floor(Math.random()*100)을 하게 되면 random함수가 1의 가까운 숫자이기 때문에 0 ~ 99까지 밖에 안나옴 우리는 1 ~`100까지를 구하는 것이기때문에 1을 더해준다.
    */
}
function play(){
    let userValue = userInput.value;

    //데이터 유효성 검사
    if(userValue<1 || userValue>100){
        resultArea.textContent="1과 100사이 숫자를 입력해주세요"
        return; //바로 종료하고 싶을 때
    }
    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다 다른 숫자를 입력해주세요."
        return;
    }
    //찬스
    chances --;
    chanceArea.textContent = `남은 기회 : ${chances}번`
    console.log("chance",chances);

    if (userValue < computerNum){
        resultArea.textContent="Up!!!"
    } else if (userValue > computerNum){
        resultArea.textContent="Down!!!"
    } else {
        resultArea.textContent="맞췄다!!!"
        gameOver = true;
    }

    history.push(userValue);
    console.log(history);

    if(chances < 1){
        gameOver = true;
    }
    if(gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    //user input창이 깨끗하게 정리되고
    userInput.value = "";
    //새로운 번호가 생성되고
    pickRandomNum();
    resultArea.textContent = "결과가 나온다."
}
pickRandomNum();


/*
그 외 알아둬야 될 것들
[ Document ]
document는 DOM트리의 최상위 객체이다.
DOM(Document Object Model)이라 하면 자바스크립트 입장에서 그저 일종의 문자열일 뿐인 HTML을 자바스크립트가 이해할 수 있게 객체의 형태로 바꿔둔 것.
(Document를 HTML이라고 이해하면 편하다.)
이 DOM을 이제 자바스크립트가 마음대로 컨트롤할 수 있어야되는데 이때 필요한 기본 함수들과 속성값을 제공해주는게 document라는 객체이다.

[ Element selectors ]
자바스크립트가 HTML을 가져와서 다루기 위해선 원하는 HTML태그를 선택해야하는데, document객체에서 다양하게 선택하는 방식을 제공한다.
    - document.getElementById: id로 선택
    - document.getElementByClassName: class로 선택, 같은 class가 여러 개 있을 경우엔 모두 다 선택이 되서 배열에 저장된다.

    다음 코드를 실행해 결과를 확인해보라
    <div class="menu">menu1</div>
    <div class="menu">menu2</div>
    <div class="menu">menu3</div>

    console.log(document.getElementByClassName("menu"))

    *document.querySelector:id, class 둘 다 선택이 가능하고 좀 더 디테일한 선택이 가능하다. 참고로 선택 가능한 값이 여러 개가 있을 경우 그 중에 첫 번째 태그 하나만 반환한다.

    let userInput = document.querySelector("#user-input"); //id = user-input을 선택
    let resultAreaImg = document.querySelector(".main-img"); //class = main-img을 선택
    let menus = document.querySelector("nav a") //nav태그 밑에 있는 a태그를 선택

    *document.querySelectorAll : 위에 document.querySelector와 같다 하지만 All에서 알 수 있듯이 선택된 값 모두를 NodeList에 담아 반환한다.

[ Math ]
자바스크립트에서 유용한 객체 중 하나인 Math가 있다. 수학적으로 필요한 왠만한 함수들이 다 있다.
    - Math.random(): 0 ~ 1 사이의 값을 반환(1에 근접한 값까지만 1은 미포함이다.)
    - Math.floor(): 소수점 버림이다.
    - Math.ceil(): 소수점 올림이다
    - Math.round(): 소수점 반올림
    - Math.max(): 여러개의 값 중 제일 큰 값 반환
    - Math.min(): 여러개의 값 중 제일 작은 값 반환

    등 여러가지 유용한 함수들이 많으니 참고하자

[ 다양한 노드의 속성값 ]
    - textContent: 노드의 text값을 반환
    - innerText: 노드의 text 값을 반환 text Content랑 비슷하지만 textContent는 모든 요소를 반환하는 반면 innerText는 사람이 읽을 수 있는 요소만 가져옴
    (글자 사이에 스페이스가 많다면 textContent 있는 그대로 가져오는 반면 innerText는 스페이스를 한 칸만 남기고 가져온다.)
    - innerHTML: html요소를 반환한다.

    셋의 차이를 잘 보여주는 예제, 다음 예제를 실행시켜보고 차이를 확인하자
    <h1 id = "test">
        <div>Hello      world</div>
    </h1>
    
    let test = document.getElementById("test");
    console.log(test.innerText);
    console.log(test.textContent);
    console.log(test.innerHTML);
*/

