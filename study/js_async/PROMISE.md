## Promise
- 원하는 데이터를 얻을때까지 시간이 지연되는 경우
- new 키워드와 생성자를 통하여 생성 할 수 있다. (생성자는 함수를 인자로 받는다)
- 생성자의 함수 인자는 resolve와 reject, 2개의 파라미터를 가진다.
#### Promise 객체 생성
    const promise = new Promise(function(resolve, reject) { ... } );
    
- 일반적으로 resolve함수의 인자는 미래시점에 얻게 될 결과
- reject 함수의 인자는 미래시점에 발생할 예외를 넘겨준다.
- Promise객체는 then과 catch 메서드를 사용할 수 있다.

#### then & catch
- then : 결과값을 가지고 수행할 로직을 담은 콜백함수를 인자로 받는다.
- catch : 결과값에 대하여 예외처리 로직을 담은 콜백함수를 인자로 받는다.
- then & catch 메서드는 또다른 Promise 객체를 반환한다.
- 따라서, then & catch의 결과값에 대하여 then & catch를 다시 사용 할 수 있다.