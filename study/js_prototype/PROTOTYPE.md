## ProtoType

- JS : 기존의 객체를 복사하여 새로운 객체를 생성하는 Proto Type기반 언어. 
    #### JS에서의 상속
        현재 존재하는 객체를 ProtoType으로 사용하여, 해당 객체를 복제하여 재사용하는것을 말한다.
  #### JS의 모든 객체는 최소 1개 이상의 객체로 부터 상속을 받는데, 상속되는 정보를 제공하는 객체를 ProtoType이라 한다.
- 기본 데이터 타입 (Number, String, Boolean, undefined, null)등을 제외한 모든 것이 객체.
- 이 객체를 만들기 위해서는 자신을 만드는데 사용된 proto type객체를 이용하여 만들어야 한다.
- 생성된 객체 안에는  __proto__라는 속성이 있는데 이것이 바로 proto type이다.
- 모든 객체는 __proto__를 통하여 자신의 ProtoType에 접근 할 수 있다.
  #### JS에서는 Proto Type Link와 Proto Type Object가 있는데 이 둘을 통틀어서 Proto Type이라고 한다.

### ProtoType Object
- JS의 모든 객체는 함수로 생성된다.
  - let kim = {}의 경우, 함수가 아닌것 처럼 보이지만,
  - let kim = new Object()의 생성자 함수를 객체 리터럴로써 {}로 사용하는 것이다.
    #### 함수를 생성시, 2가지 일이 발생한다.
        1. 생성하는 함수에 Constructor 부여 : Constructor가 부여되어야 new 키워드를 사용가능.
        2. 생성하는 함수에 ProtoType Object 생성, 연결 : 함수를 생성한 순간, Prototype Object도 함께 생성된다.
  - 함수를 생성시, 같이 생성된 ProtoType Object는 일반 객체이므로, 속성을 변경 가능.
    #### 변경시 주의 사항
        1. ProtoType 객체 변경 이전에 생성 객체 : 기존 ProtoType객체를 ProtoType에 바인딩
        2. ProtoType 객체 변경 이후에 생성 객체 : 변경 ProtoType객체를 ProtoType에 바인딩
  - 또한 해당 ProtoType Object를 참조하는 모든 객체들은 같은 속성을 가진다.
  
  ### ProtoType Chain
  - ProtoType Object를 그대로 참조하는 새로운 객체가 있다면, 해당 객체에서는 ProtoType Object의 속성을 가지고 있지 않다.
  - 하지만 __proto__라는 속성을 가지고 있는데, 이 __proto__가 부모인 함수의 ProtoType Object를 가르킨다.
  - 따라서 ProtoType Object를 참조하는 객체가 직접 ProtoType Object의 속성을 가지고 있디 않더라고, __proto__의 영향으로 연결되어 사용이 가능하다.
  - 이것을 ProtoTYpe Chain이라고 칭함.


### 인스턴스?
    생성자를 사용하여 만들어진 객체를 인스턴스라 칭한다.
    ==> 함수에 할당되어 변환된 객체
    ** 인스턴스를 생성하는데 사용되는 함수를 construnctor라고 한다. **
- Function (함수 인스턴스를 생성하는 함수) -> Object 생성자 (Function 인스턴스) -> Object 객체(Object 인스턴스)의 관계를 가진다.