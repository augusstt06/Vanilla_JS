## Promise
- 원하는 데이터를 얻을때까지 시간이 지연되는 경우
- new 키워드와 생성자를 통하여 생성 할 수 있다. (생성자는 함수를 인자로 받는다)
- 인자로 받은 콜백함수는 내부에서 비동기 처리 작업을 수행한다.
- 비동기 처리가 성공하면 resolve를, 실패하면 reject를 호출한다.
#### Promise 객체 생성
    const promise = new Promise(function(resolve, reject) { ... } );
    
- 일반적으로 resolve함수의 인자는 미래시점에 얻게 될 결과
- reject 함수의 인자는 미래시점에 발생할 예외를 넘겨준다.
- 따라서 성공시, resolve객체를, 실패시 reject객체를 호출한다.
- Promise객체는 then과 catch 메서드를 사용할 수 있다.
#### 예시 코드 
    function test(){
      return new Promise(function(resolve, reject){
        setTimeout(function(){
          resolve(new Date().toISOString());
        }, 2000);
      });
    }
    test(1).then(reult => {
      console.log(1, result);
    })
  - 예시 코드를 보면 test 함수를 실행한 후, return되는 값은 then을 메서드로 가진다.
  - 다시말해, then 메서드를 가지고 있는 값이 Promise의 인스턴스이고, test의 return값이 Promise의 인스턴스라는 말이다.
#### 즉, Promise 객체를 사용하려면 반드시 Promise의 인스턴스를 return해야 한다.
#### 이후에, 반환된 인스턴스를 then과 catch 메서드를 이용해 처리한다.
- Promise객체는 3가지 상태가 존재한다
  1. Pending (대기) : 생성자를 통하여 Promise 객체를 만드는 순간, Pending 상태가 된다. 
  2. Fulfilled (이행) : resolve가 실행되는 순간, fulfilled 상태가 된다.
  3. Rejected (거부) : reject가 실행되는 순간, rejected 상태가 된다.

#### then & catch
- then : 결과값을 가지고 수행할 로직을 담은 콜백함수를 인자로 받는다.
- catch : 결과값에 대하여 예외처리 로직을 담은 콜백함수를 인자로 받는다.
- then & catch 메서드는 또다른 Promise 객체를 반환한다.
- 따라서, then & catch의 결과값에 대하여 then & catch를 다시 사용 할 수 있다.(Primise Chaining)

## async, await
    비동기처리 코드를 동기처럼 작성하기 위해 사용한다.
    함수 앞에 async를 붙여 사용하며, 함수 안에서 Promise객체가 fulfilled상태가 될 때 까지 기다려야 할때 await을 사용한다.
- async 함수의 return 값은 언제나 항상 Promise이다.
- Promise의 then() 메서드의 인자로 넘기는 콜백 함수 내에서 여러개의 Promise를 중첩해서 호출할 경우, 가독성이 떨어짐
- 이것을 해결하기위해 사용된다.
- async함수에서 await 키워드를 만나는 순간, Promise 객체가 처리 될 때 까지 기다린다. 그 후 처리가 완료되면 반환
- await 구문에서 Promise가 정상적으로 fulfilled되면, Promise객체를 반환
- await 구문에서 Promise가 reject되면 throw문처럼 에러가 던져진다.