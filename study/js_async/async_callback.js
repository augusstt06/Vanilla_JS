// 콜백 함수 사용시 비동기 처리
// 중첩되어 콜백함수를 사용하게 될 시, 코드 가독성이 떨어지고 헷갈릴수도 있음.

function find(id){
    let user;
    // setTimeout은 비동기 함수이므로 setTimeout함수가 user객체에 값을 할당 하기 전에 return문이 먼저 실행된다.
    // 따라서, 18줄의 console.log(callUser)의 return 값인 user객체에 값이 없는 상태로 return되어 undefined가 출력된다.
    setTimeout(function (){
        console.log('wai$t 1 sec..find1');
        user = {
            id : id,
            name : `user ${id}`,
            email : `${id}@test.com`
        };
    }, 1000);
    return user
}
const callUser = find(1);
console.log(callUser)


// 위 코드 처럼 실행순서가 바뀌는 상황을 방지 하고자 콜백함수를 이용한다.
// 함수의 결과값을 return하는 대신, 결과 값을 이용하여 처리할 로직을 콜백함수에 담아 매개변수화한다.
function find2(id, callbackFunction){
    setTimeout(function (){
        console.log('wait 1 sec...find2');
        const user2 = {
            id : id,
            name : `user ${id}`,
            email : `${id}@test.com`
        };
        // setTimeout의 결과값인 user객체의 값을 매개변수로 들어올 callbackFunction이라는 변수의 인자로 할당한다.
        callbackFunction(user2);
    }, 1000);
}

find2(1, function (user){
    console.log(user);
});
