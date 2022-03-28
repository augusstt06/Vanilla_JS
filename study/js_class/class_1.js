// class get, set

// 기본 흐름
// 1. class constructor를 통하여 객체 프로퍼티 생성
// 2. 생성한 class의 사용 목적은 넓이를 구하는 것이기 때문에, 프로퍼티 값이 음수로 입력되면 예외처리를 해야 한다.
// 3. 따라서, 생성한 height, width의 값을 get메서드를 통해 가져오고, set메서드를 통하여 검사한다.
// 4. set 메서드를 통하여 검사한 값이 음수이면 예외처리 값을, 양수이면 값 그대로 calcArea 메서드에 인자로 넣어 계산
// 5. calcArea 메서드안에서 조건문을 설정하여 최종 예외처리를 하여 return한다.

class Rectangle {
    constructor(height, width) {
        this.height = Number(height);
        this.width = Number(width);
    }
    // get, set은 class의 프로퍼티 값을 가져오고, 확인한다.
    // set을 통하여 생성되는 프로퍼티 값을 검사한 후, 잘못된 값이 입력되면 예외처리
    // 올바른 값이 입력되면 그대로 실행된다.
    get height(){
        return this._height;
    }
    // set
    set height(value){
        this._height = value < 0 ? 0 : value;
        // console.log(this._height, typeof (this._height))
    }
    get width(){
        return this._width;
    }
    set width(value){
        this._width = value < 0 ? 0 : value
        // console.log(this._width, typeof (this._width))
    }
    get area(){
        return this.calcArea()
    }
    // 높이를 계산하는 메서드 생성
    calcArea(){
        if (this.height !== 0 && this.width !== 0) {
            return this.width * this.height
        }else if(this.height === 0) {
            return "높이 값이 잘못 되었습니다."
        }else if(this.width === 0){
            return "너비값이 잘못 되었습니다."
        }

    }
}

const square = new Rectangle(-10,10);
console.log(square.area)

class User{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = Number(age);
    }
    get age(){
        return this._age;
    }
    set age(value){
        this._age = value < 0 ? 0 : value
    }
}

const test = new User('kim', 'chungyeon','-28');
console.log(test.age)