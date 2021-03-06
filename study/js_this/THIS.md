## this
    자신이 속한 객체, 자신이 생성할 인스턴스를 가리키는 "자기 참조 변수"
    this를 통하여 자신이 속한 객체, 인스턴스의 프로퍼티, 메서드를 참조 할 수 있다.
- this와 바인딩된 객체가 무엇이냐에 따라 this가 가리키는 값이 달라진다.
- 즉, 함수 호출 방식에 의해 this바인딩은 동적으로 결정된다.

### 일반 함수 호출시 this 바인딩
- 기본적으로 this에는 전역 객체가 바인딩 된다.
- this는 객체의 프로퍼티나 메서드를 참조하기 위해 사용하는 자기참조 변수이기 때문에, 객체를 생성하지 않는 일반 함수에서는 전역객체인 window와 바인딩된다.
- 중첩함수, 콜백함수를 포함항 모든 일반함수의 this는 전역객체와 바인딩된다.

### 메서드 호출시 this 바인딩
- 메서드에서의 this는 메서드를 "호출"한 객체를 가리킨다.
- 그러나 메서드를 변수에 할당하여 일반 함수로 호출한 경우, 전역객체와 바인딩된다.

### 생성자 함수 호출시 this 바인딩
- 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스와 바인딩된다.
- 생성자 함수 사용시, new 키워드를 사용하지 않으면 일반 함수로 동작하여 this는 전역객체와 바인딩된다.

        