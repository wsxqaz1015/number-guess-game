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

playButton.addEventListener('click', play); //함수를 매개변수로 사용할 경우 ()을 쓰게되면 그냥 실행이 되어버리기 때문에 사용하면 안된다.(알게된 점 : 함수도 변수처럼 넘길 수 있다.)

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
    if (userValue < computerNum){
        resultArea.textContent="Up!!!"
        console.log("Up!!!");
    } else if (userValue > computerNum){
        resultArea.textContent="Down!!!"
        console.log("Down!!!");
    } else {
        resultArea.textContent="맞췄다!!!"
        console.log("맞췄다!!!")
    }
}
pickRandomNum();

