// Promise
// 원하는 데이터를 얻는데까지 지연시간이 걸리는 경우를 말한다.

// aysnc_callback에서 사용된 코드를 promise를 사용하여 바꿀수 있다.


function find(id){
    // 콜백함수를 인자로 넘기는 대신 Promise객체를 생성하여 반환한다.
    // 따라서, find함수를 호출하면 Promise타입의 결과값이 return된다.
    return new Promise(function (resolve){
        setTimeout(function (){
            console.log('waiting 1sec...');
            const user = {
                id : id,
                name : `user ${name}`,
                email : `${id}@test.com`
            };
            resolve(user);
        }, 1000);
    });
}
// return받은 promise객체에 then을 사용하여 해당 값을 가지고 실행할 로직을 할당한다.
find(1).then(function (user){
    console.log(user)
})