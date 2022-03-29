// prototye 변경시 constructor 연결
const Person = (function (){
    function Person(name){
        this.name = name;
    }
    Person.prototype = {
        // prototype 변경시, constructor를 연결 해 줌으로써, 후에 생성될 객체의 prototype constructor를 지정한다.
        constructor : Person,
        sayHello(){
            console.log(`my name is ${this.name}`);
        }
    };
    return Person;
}());
const me = new Person('cnddus');

console.log(me.constructor);

// Person2의 객체는 prototype 변경시 constructor를 따로 지정해주지 않아 Person2의 Constructor와 생성자의 연결이 파괴된다.
// 따라서, prototype이 변경 된 후의 객체 me2의 constructor는 최상위 prototype인 object의 constructor이다.
const Person2 = (function (){
    function Person(name){
        this.name = name;
    }
    Person.prototype = {
        sayHello(){
            console.log(`my name is ${this.name}`)
        }
    }
    return Person
}());

const me2 = new Person2('충연')
console.log(me2.constructor)