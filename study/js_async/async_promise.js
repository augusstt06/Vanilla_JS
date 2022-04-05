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
                name : `user ${id}`,
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


// Pending, fulfilled, rejected

const poo = new Promise(function (resolve){
    // Promise 객체를 만든 직후이기 때문에 Pending 상태이다.
    setTimeout(function (){
        resolve();
    }, 2000);
})

poo.then(function (){
    // resolve 된 이후에 실행되는 코드이므로 fulfilled 상태를 가진다
    console.log('poo가 1초 후에 fulfilled')
})

const foo = new Promise(function (resolve,reject){
    setTimeout(function (){
        reject();
    }, 5000);
})

foo.then(function (){
    console.log('foo가 5초 뒤에 fulfilled');
})
    .catch(function (){
    console.log('foo가 5초 뒤에 rejected');
})



// Promise의 return값 === Promise의 인스턴스

// Promise가 아닌 값 return시
function notPromise(){
    return console.log('Not Promise');
}
// not_Promise의 return 값이 promise가 아니기 때문에 then 메서드를 사용할 수 없다.
notPromise().then(function (){
    console.log('not_promise에서 then을 사용할 수 있는가?');
})

// Promise return시
function _promise(){
    return new Promise(function (resolve){
        resolve();
    });
}
// _promise의 return값이 promise이기 때문에, then 메서드를 사용할 수 있다.
_promise().then(function (){
    console.log('_promise는 then을 사용할 수 있는가?');
})



// 콜백지옥
const f1 = function (callback){
    setTimeout(function (){
        console.log('1번 주문 완료');
        callback();
    }, 1000);
};
const f2 = function (callback){
    setTimeout(function (){
        console.log('2번 주문 완료');
        callback();
    }, 3000);
};
const f3 = function (callback){
    setTimeout(function (){
        console.log('3번 주문 완료');
        callback();
    }, 2000);
};

console.log('시작');
f1(function (){
    f2(function (){
        f3(function (){
            console.log('끝')
        })
    })
})

// Promise
const f11 = function (){
    return new Promise(function (res, rej){
        setTimeout(function (){
            res('1번 주문 완료');
        }, 1000);
    });
};
const f12 = function (msg){
    console.log(msg, 'f2실행');
    return new Promise(function (res, rej){
        setTimeout(function (){
            res('2번 주문 완료')
            // rej('xxx')
        }, 3000);
    });
};

const f13 = function (msg){
    console.log(msg, 'f3실행');
    return new Promise(function (res, rej){
        setTimeout(function (){
            res('3번 주문 완료');
        }, 2000);
    });
};
console.log('시작')
console.time('시작')
f11()
    .then(function (res){
        return f12(res)
    })
    .then(function (res){
        return f13(res)
    })
    .then(function (res){
        return console.log(res)
    })
    .catch(console.log)
    .finally(function (){
        // console.log('끝')
        console.timeEnd('시작')
    })


// Promise all, 위의 promise보다 훨씬빠름
// 모두 이행되고 나서 반환
// 1개의 promise가 reject라면 사용 불가능
console.time('x')
Promise.all([f11(), f12(), f13()]).then(
    function (res){
        console.log(res)
        console.timeEnd('x')
    }
)

// primise.race
// 가장 먼저 처리된 promise가 resolve한 결과를 반환한다.
console.time('x')
Promise.race([f11(), f12(), f13()]).then(
    function (res){
        console.log(res)
        console.timeEnd('x')
    }
)
