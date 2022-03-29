// 밑의 Person 함수를 상속하는 kim, heo는 각각 eyes, nose를 공통적으로 가지고 있으며, 2개씩 총 4개 할당 된다.
// ==> 메모리 할당이 많아짐
function Person(){
    this.eyes = 2;
    this.nose = 1;
}
let kim = new Person();
console.log(kim.eyes,'김-눈')

// 위 코드에서 생긴 문제점을 ProtoType을 사용하여 해결가능하다
function Person2(){}

Person2.prototype.eyes = 2;
Person2.prototype.nose = 1;
// ProtoType을 사용하여 상속
let jung = new Person2();
// 이미 생성된 객체에 새로운 프로퍼티를 추가 가능함(메서드도 가능)
// 생성하는 legs라는 프로퍼티는 오직 jung 인스턴스에만 추가된다.
jung.legs = 2;
let nuu = new Person2();
console.log(jung.legs,'정')
// nuu의 legs는 정의되지 않았기 때문에 undefined
console.log(nuu.legs)
// ProtoType에 프로퍼티나 메서드를 수정하려면, constructor에 직접 변경해야 해당 ProtoType을 상속받는 모든 객체가 사용 가능하다.
let auu = new Person2();
Person2.prototype.arms = 3;
console.log(auu.arms,'auu')


function Person3(name){
    this.name = name;
}

let foo = new Person3('Lee');
Person3.prototype.sayhello = function (){
    console.log(`HIHI im ${this.name}`)
};

foo.sayhello();

function Person4(name){
    this.name = name;
}
let hoo = new Person4('충연');

Person4.prototype = {
    gender : 'male'
};
let hoo2 = new Person4('진혁')
console.log(hoo.gender, hoo.constructor);
console.log(hoo2.gender, hoo2.constructor);
