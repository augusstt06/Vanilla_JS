// Interval = 특정한 주기를 가지고 실행시키는 것

const clock = document.querySelector("h2#clock");

// padStart, padEnd는 String에만 사용가능한 메소드
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}

getClock()
// 5초마다 sayhello 함수 호출
setInterval(getClock, 1000);
