// 객체 리터럴의 경우
const circle = {
    radius : 5,
    getDiameter(){
        // 여기서의 this는 객체 circle을 가리킨다.
        // 2 * 현재 객체의 radius라는 프로퍼티 를 return한다.
        return 2 * this.radius;
    }
}
// 생성자 함수의 경우
function Circle(radius){
    // 여기서의 this는 함수가 생성하는 인스턴스값을 가리킨다.
    // 현재 객체 함수의 생성 인스턴스 키는 rad이고, 그 값은 매개변수로 들어온 radius이다.
    this.rad = radius;
}
Circle.prototype.getDiameter = function (){
    return 2 * this.rad;
};

const foo = new Circle(5);
console.log(foo.getDiameter())