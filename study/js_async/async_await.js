// Promise 사용 예제
// function test1(){
//     return Async()
//         .then(function (foo){
//             doAsync1(foo)
//         })
//         // foo는 위의 구문이 끝나는 순간 생명주기 만료
//         .then(function (bar){
//             doasync2(bar)
//         })
//         .then(function (car){
//             doAsyncLast(car)
//         })
// }
// 위의 코드를 async await로 바꾼 예제
// 비동기 처리 코드를 마치 동기처럼 작성할수 있어 가동성이 좋다.
// async function test2(){
//     const foo1 = await Async();
//     // 하지만 여기서 foo1은 위의 구문이 끝나도 생명주기가 끝나지 않아 밑의 어느곳에서든 사용이 가능하다. (재사용 유의)
//     const bar1 = await doAsync1(foo1);
//     const car = await doAsync2(bar1);
//     await doAsyncLast(car)
// }

// Promise, async await 사용

async function test(){
    let promise = new Promise(function (resolve){
        setTimeout(function (){
            resolve('Complete');
        },1000);
    })
    // await를 만나는 순간 위의 promise 변수의 값인 Promise가 완료될때까지 기다린다.
    // 기다렸다가 promise의 값이 할당된 후, answer 변수의 값이 할당 된다.
    let answer = await promise;
    console.log(answer)
}
test();

// async await의 에러처리
async function test2(){
    //밑의 await의 코드는
    // await Promise.reject(new Error('에러'));
    // throw를 사용한 밑의 코드와 같다.
    throw new Error('에러');
}

// 위에서 작성한 에러처리 코드는 catch를 이용하여 바꿀수 있다.
async function test3(){
    try{
        const res = await fetch('url');
    } catch(err){
        // catch로 에러처리를 하지 않으면 reject된 Promise 에러가 발생한다.
        console.log(err)
    }
}



// 사용 예시 2
function setPromise(ms){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            resolve()
        }, ms);
    })
}

async function Async(age){
    if (age > 20){
        return `${age} success`;
    }else{
        throw new Error(`${age} is not over 20`);
    }
}

async function AsyncJobs(){
    await setPromise(1000);
    const promise1 = Async(25);
    try {
        const value = await promise1;
        console.log(value)
    }catch(e){
        console.error(e);
    }
    const promise2 = Async(19);
    try {
        const value = await promise2;
        console.log(value);
    } catch(e){
        console.error(e);
    }
}

AsyncJobs()