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

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit( e){
    // arguments.preventDefault()는 브라우저의 기본적인 이벤트에 따른 발생동작을 방지한다.
    // submit의 경우, 이벤트가 실행됨과 동시에 새로고침 되는데, 이 동작을 방지.
    e.preventDefault();
    // onLoginSubmit 함수가 실행되면 loginForm 변수에 hidden이라는 class를 추가한다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    paintGreetings(username)
    // username의 변수를 로컬에 저장하기
    // localStorage를 이용
    localStorage.setItem(USERNAME_KEY, username);
}

function paintGreetings(username){
    greeting.innerHTML = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage에 값 유무에 따라 html표시 하기
const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings(saveUsername);
}

// Events Part 2
const link = document.querySelector("a");

function handleLinkClick(e){
    e.preventDefault();
    console.dir(e);
}

link.addEventListener("click", handleLinkClick);