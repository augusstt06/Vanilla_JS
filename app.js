// Events Part 1
// querySelector를 사용 하는 경우, classname, tagname 모두 사용이 가능하다.
// 따라서 사용 시에는 사용 대상이 id 인지를 명시 해줘야 한다.

// const loginForm2 = document.querySelector("#login-form")
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// 밑의 코드로 간결하게 사용이 가능하다. 참조객체가 loginForm => document로 바뀜
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(e){
    // arguments.preventDefault()는 브라우저의 기본적인 이벤트에 따른 발생동작을 방지한다.
    // submit의 경우, 이벤트가 실행됨과 동시에 새로고침 되는데, 이 동작을 방지.
    e.preventDefault();
    console.log(e);
    console.log(loginInput.value)
}

loginForm.addEventListener("submit", onLoginSubmit);

// Events Part 2
const link = document.querySelector("a");
function handleLinkClick(){
    alert("click!");
}

link.addEventListener("click", handleLinkClick)