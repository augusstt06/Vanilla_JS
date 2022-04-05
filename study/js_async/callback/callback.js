// 콜백함수 예시

function first(){
    setTimeout(function (){
        console.log(1);
    }, 2000);
}
function second(){
    console.log(2);
}
// first함수 내부의 setTimeout의 영향으로 second 실행코드가 밑에 있음에도 불구하고 second가 먼저 실행된다.
first();
second();

function test(item, price, quantity){
    console.log(`상품을 ${quantity}개 골라서 줌`);
    setTimeout(function (){
        console.log('계산이 필요합니다.');
        return price * quantity
    }, 1000)
}

function pay(t){
    console.log(`${t}원을 지불`)
}
const a = test('과자', 1000, 5);
pay(a)
// pay를 호출한 직후에 바로 구문이 실행된다.
// 그런데 test함수안에는 setTimeout으로 인하여 1초뒤에 price * quantity return된다.
// 따라서 바로 실행되는 pay함수안의 t매개면수는 값이 정의되지 않은채 undefined가 실행됨


// 따라서 이렇게 바꿔야 한다.
function test1(item, price, quantity, callback){
    console.log(`상품을 ${quantity}개 골라서 줌`);
    setTimeout(function (){
        console.log('계산이 필요합니다.')
        // 콜백함수를 사용하여 순차적으로 구문이 실행되게 한다.
        callback(price * quantity);
    }, 1000);
}
test1('과자', 1000, 5, pay);


// 위의 코드의 아주 간단한 예시
function simpleTest(callback){
    setTimeout(function (){
        console.log('a');
        callback();
    }, 1000);
}
function callback(){
    console.log('b');
}
// 콜백함수는 함수의 매개변수로써 넣어 전달해야 한다.
// a의 매개변수로 b라는 함수를 전달했다.
simpleTest(callback)
