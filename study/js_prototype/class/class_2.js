// class extends


class Shape{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width * this.height;
    }
}

// Rectangle이라는 class는 Shape class를 완전히 상속받는다.
class Rectangle extends Shape{
    draw(){
        console.log('🎽')
    }
}


class Triangle extends Shape{
    getArea() {
        // 메서드 오버라이딩
        return (this.width * this.height) / 2;
    }
    draw(){
        // super ==> 현재 클래스를 상속시킨 클래스, 즉 부모 클래스인 shape를 지칭
        super.draw();
        console.log('🔺');
    }
}

const rectangle = new Rectangle(20,20, 'red');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20,20, 'blue');
triangle.draw();
console.log(triangle.getArea());

class Person{
    constructor(name, age,city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    // 부모 class의 메서드 생성
    nextYearAge(){
        return  Number(this.age);
    }
}

// 부모 class Person을 상속받는 자식 class 생성
class introducePerson extends Person{
    // constructr를 통해 객체를 생성한다.
    // 여기서 super를 이용하여 부모 class의 인스턴스를 호출한 뒤 자식 class의 새로운 인스턴스를 생성한다.
    // 즉, 부모 class의 인스턴스를 재정의 하는 것이므로 오버라이딩이다.
    constructor(name, age, city, future) {
        super(name, age, city, future);
        this.future = future;
    }
    introduce(){
        return `저는 ${this.city}에 사는 ${this.name}입니다. 장래희망은 ${this.future}입니당`
    }
}

let kim = new introducePerson('kim', '28', '잠실', 'programmer');
console.log(kim.introduce())

