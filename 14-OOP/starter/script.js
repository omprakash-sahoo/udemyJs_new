'use strict';
'use strict';
// const Person = function(firstname, birthyear){
// 	//Instance Properties
// 	this.firstname = firstname;
// 	this.birthyear = birthyear;	
// 	//Never create a method inside constructor function
// }

// Person.prototype.calcAge = function() {
// 	console.log(2020-this.birthyear);
// };
// const jonas = new Person('jonas',1992);
// const omm = new Person('omprakash',1994);

// console.log(omm.calcAge(1992));

// console.log(jonas instanceof Person);


// //////////////////CLASS////////////////////
// class PersonCl{
// 	constructor(firstname,birthyear){
// 		this.firstname = firstname;
// 		this.birthyear = birthyear;
// 	}
// 	calcAge(){
// 		console.log(2020-this.birthyear)
// 	}
// }
// const omm = new PersonCl('omprakash',1994)
// console.log(omm);
// omm.calcAge(1994);
// console.log(omm.__proto__ === PersonCl.prototype);
//////////////////////////////////////////////////

/*const Person = function(firstname,birthyear){
	this.firstname = firstname;
	this.birthyear = birthyear;
};
Person.prototype.calcAge = function(){
	console.log(2020 - this.birthyear);
};
// const jonas = new Person('jonas',1992);
// jonas.calcAge(1994)
/*const Student = function(firstname,birthyear,course){
	this.firstname = firstname;
	this.birthyear = birthyear;
	this.course = course
}
Student.prototype.intruduce = function(){
	console.log(`My name is ${this.firstname} and I study this${this.course}`);
};
const omm = new Student('omprakash',1994,'javascript','iit');
const jonas = new Student('jonas',1994,'javascript','nit');
Student.prototype.collgename = 'iit';
omm.intruduce();
console.log(Student.prototype);
console.log(jonas.collgename);
console.log(omm.collgename);
console.log(omm.hasOwnProperty('collgename'));
// console.log(omm.__proto__)
// console.dir(Person)
const h1 = document.querySelector('h1');
console.dir(h1);*/


////////////////////////////FUNCTION CONSTRUCTOR///////////////////////////

// const Car = function(make,speed){
// 	this.make = make;
// 	this.speed = speed;
// };

// Car.prototype.acclerate = function(){
// 	this.speed +=10;
// 	console.log(`Car make ${this.make} speed increase to ${this.speed} km/hr`)
// };
// Car.prototype.break = function(){
// 	this.speed -= 5;
// 	console.log(`Car speed decreased to ${this.speed} km/hr`)
// };
// const bmw = new Car('bmw',200);
// const audi = new Car('audi',100);
// bmw.acclerate()
// audi.break()

////////////////////////////ES 6 CLASS ///////////////////////////
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    acclerate() {
        this.speed += 10;
        console.log(`The car make ${this.make} speed increased to ${this.speed} km/hr`);
    }
    break () {
        this.speed -= 10;
        console.log(`The car make ${this.make} speed increased to ${this.speed} km/hr`);
    }

}
const bmw = new Car('bmw', 200);
const audi = new Car('audi', 100)
bmw.acclerate();
bmw.acclerate();
bmw.acclerate();
audi.break();
audi.break();
audi.break();
audi.break();



//////////////////////////GETER AND SETTER//////////////////////////
const account = {
    owner: 'om prakash',
    movements: [106, 256, 45, 256, 75],
    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov)
    }
}
console.log(account.latest);
account.latest = 50;
console.log(account);

//////////////////////////GETER AND SETTER IN CLASSES//////////////////////////

class PersonCl {
    constructor(firstname, birthyear) {
        this.firstname = firstname;
        this.birthyear = birthyear;
    }
    get age() {
        console.log(2020 - this.birthyear)
    }
}
const omm = new PersonCl('satyaprakash', 1994);
omm.age;
console.log(omm);

////////////////////// OBJECT.CREATE ///////////////////

const PersonProto = {
	calcAge(){
		console.log(2020-this.birthyear);
	},
};
const omm2 = Object.create(PersonProto);
console.log(omm2);
omm2.name = 'omprakash2'
omm2.birthyear = 1994
omm2.calcAge();
