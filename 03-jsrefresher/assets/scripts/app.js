
//explore import and export
// if we need something from util.js we need to import it, multiple variables can be inside {} braces to import and typically relative path
// in react though extension is not needed
//for multiple named imports we can use either below method inside braces or 

  // import { apikey, multile } from "./util.js";


//you can also use alias if you want to change the name of variable with as keyword like below

// import {apikey as key, multiple} from "./util.js";

//or below method where all the vairable of util.js are groupded inside util variable and we use . operator to access those variables
import * as util from "./util.js";
//here util is alias
//for default import we dont need braces

import apikey2 from "./util.js";


//for multipel imports which are named exports with vairable,


console.log(util.apikey);
console.log(apikey2);
console.log(util.multile);

// if we run this code then we error "Cannot use import statement outside a module" this is because we have not put type="module" in our html file where
//we have called this file in script tag so if we have to use import and export we have to use type="module" in script tag 



// Function concept

// a function is piece of code that is not executed immediately, but executed in some time in future as you call it as you like and when you like

function greet(){  

	console.log("Hello!!");
}
//this will have no effect in our code above this does nothing unless it is called like below

greet();
//functions can take arguments or parameters which are available to use inside funciton and only inside that function, they can be declared with default values too

function greet2(userName, message){
	console.log(message+' '+userName);
}
greet2("Folks","Hello");

//function are capable of creating and returning value

function greet3(userName, message){
	return "Hi, I am " + userName + "." + message;
}
// console.log(greet3("Harry", "Wecome to tutorial")); this does work but its not a good idea or it will not add good readabiity
const gret = greet3("Harry","Welcome to tutorial");
console.log(gret);

//function test
// Your task is to write a new function that should be named combine and have the following characteristics:

// Accept three input values

// Calculate a new value based on the three input values: a * b / c (if a, b & c are the input values)

// Return the calculated result

function combine(a,b,c){
	return a * b / c;
}

const result = combine(20,30,50);
console.log(result);


//another alternative to this normal function is arrow functions

//ARROW FUNCTION

//Anonymus function is simply a function which do not carry any name like below

// export default function(){
// 	console.log("Hello");
// }

//or we can use arrow function to represent above function

export default () => {
	console.log("Arrow Function");
}

// when working with Arrow Funtions we have a coplue of syntax shortcuts available

// 1. Omitting parameter list parenthesis
// 	If we have arrow function that takes exactly one parameter we may omit the wrapping parenthesis
// 	example:
// 	instead of 
// 	(username) => {.......} we could write username => { ........}, but it should be noted that if we dont have any paremeter than parentheses must not be omited


// 2. Omitting function body curly braces

// If our arrow function contains only return statement and no other logtc then we can omit curly braces 
// example
// instead of number => {
// 	return number * 3; 
// } we can do
// number => number * 3; but note that we cannout use return statement and alos we cannot write if and other conditions like below 

// number => return number * 3; // invalid because return keyword must also be omitted!
// number => if (number === 2) { return 5 }; // invalid because if statements can't be returned


// 3. special case
//  Now there might be confusion when we try to use following 

//  number => {age:number} this becomes invalid as we cannot return an object 
//  however to tell javascript we want to return object an extra pair of parenthesis shoud be include like below

//  number => ({age:number}); //this is valied



//OBJECTS in js

//objects are used to group a similar properties into one for example

// instead of 
// const username = "Ram";
// const age="30"; and so on we can group these in single objects

const user = {
	name: "Ram",
	age: '20'
};

console.log(user);

// to access the individual property of this object we can use dot NOTATION PublicKeyCredential

console.log(user.age);

//besides storeing key value pairs an object can also include functions or methods like

const user_1 = {
	name: "Shyam",
	age: 30,
	greet(){
		console.log("Hello");
	}
}
console.log(user_1);
// /to access the function we can again use dot operator

user_1.greet();

// the function inside an object can access other properties of objects like below with special keyword this like

const user_3 = {
	name: "Hari",
	height: 5.5,
	convertFeetToMeter(){
		const mth = this.height * 0.3048;
		return mth;
	}
}

console.log(user_3);
console.log(user_3.convertFeetToMeter());

// so here is another thing instead of doing and creating such objects we can create a blueprint of all these values, properties, methods and function with 
// a class and then later we can create an object
//NOte a class name should always use a capital letter as first letter like below

class Person {

	constructor(name, age, height) {
		this.name = name;
		this.age = age;
		this.height = height;
	}

	convertFeetToMeter(){
		const mth = this.height * 0.3048;
		return mth;
	}
}

//this above class alone does nothing unless it is called and it is called by creating an instance of this class wiht NEW keyword 
// which is an object like below

const person = new Person("John",30,6.2); //values passed to class constructor
console.log(person);
console.log(person.convertFeetToMeter());


//ARRAYS AND ARRAYS METHODS











