// 일반 함수 호출
function foo(){
    console.log(this, 'foo의 this');
    function roo(){
        console.log(this, 'roo의 this');
    }
    roo();
}
foo();

// 메서드 호출
const person = {
    name : 'chung',
    getName(){
        // 메서드 내부에서 this사용시, 메서드를 호출한 객체에 바인딩
        return this.name;
    }
};

// person이 getName을 호출했으므로, getName의 this는 person을 가리킨다.
// 즉, person 객체의 name 프로퍼티 === 'chung'이 출력된다.
console.log(person.getName());

// 생성자 함수
function Circle(radius){
    this.rad = radius;
    this.getDiameter = function (){
        return 2 * this.rad
    }
}
const circle1 = new Circle(5);
console.log(circle1.getDiameter());
// new 키워드를 쓰지 않으면 생성자 함수가 아니라 일반 함수로 동작한다.
// 일반 함수의 this는 전역객체와 바인딩 되기 때문에, 리턴값이 없다.
const circle2 = Circle(5);
console.log(circle2)
console.log(rad)