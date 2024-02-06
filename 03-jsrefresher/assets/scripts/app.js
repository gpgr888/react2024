
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


//technically speaking arrays are objects but different kind of objects

//below is the syntax of arrays arrays are created by using square parenthesis, and inside parentheses a key value is kepet seperated by comma

//and each elements of array can be accessed by using index and index starts at 0(zero), example

const sports = ['Football','Soccer',"Basketball",'Volleyball'];
console.log(sports);
console.log(sports[0]); //we can use to access individual value by using index of array here it will console out Football as it is the first element in array

//it is important to note that arrays can contain any kinds of value , it can contain another array, numbers , objects , stings and much more



// we can use built in funcitons to manipulate array like there are lots of inbuilt function to manipulate array

// https://www.w3schools.com/jsref/jsref_obj_array.asp



// some examples 

sports.push("Badminton");
console.log(sports);

const index = sports.findIndex((item) => { //this goes each array elements and finds the mathcing item index 
	return item === 'Badminton';
});

console.log(index);


//this is mostly and hugely used function map is used as foreach but it returns new Array, we can convert any item to new kind of item

const newArray = sports.map((item) => {
	return item +" " + "player";
})

console.log(newArray);


//Example changeing into new king of item here we are canging to object type

const newArr = sports.map((item) => {
	return {text:item};

})
console.log(newArr);


// Exercise: Array Methods
// Your task is to add the missing logic to a transformToObjects() function that should transform a list of numbers into a list of JavaScript objects.

// In the newly returned array, every object must have a val key and the input array's number as a value.

// For example, for the provided input [1, 2, 3] the transformToObjects([1, 2, 3]) function should return [{val: 1}, {val: 2}, {val: 3}].



function transformToObjects(numberArray) {
    
    const newObject = numberArray.map((item) => {
        return {val:item}
    });
    return newObject;
    // Todo: Add your logic
    // should return an array of objects
}

const TestArray = [1,2,3];
console.log(transformToObjects(TestArray));


// NEW CONCEPTS

//DESTRUCTURING of arryas and objects below is example

const userData = ['Gaurav', 'Poudel','1234567890','Kathmandu','gp@gp.com'];

// lets say we have above array and if we have to access each of these elements into a varaibale we can do like below
// const firstName = userData[0];
// const lastName = userData[1]; 

// and so on which is lenghty and time consuming instead we can destructure array elements into a variable direclty by using following syntax 
// of array destructuring

const [firstName,lastName,phone,address,email] = userData;

console.log(firstName);
console.log(lastName);
console.log(phone);
console.log(email);
console.log(address);

// as you can see we can access all these as userData values are maped to the vairables at once, we can pull out values from array and put into values

// we can use this also in Objects


const userrr = {
	fName: "Gaurav",
	lName: "Poudel",
	no:'98123456789',
	street:"Kathmandu",
	mail:'gp@gp.com'
};


// now we can destructure an object, remember we have to call by property name or you can also use alias like { name:fName} like below


const {fName:firstNamee,lName:lastNamee,no:contact,mail:emaill} = userrr;

console.log(firstNamee);


// The destructuring syntax explained in the previous lecture can also be used in function parameter lists.

// For example, if a function accepts a parameter that will contain an object it can be destructured to "pull out" the object properties and make them available as locally scoped variables (i.e., variables only available inside the function body).

// Here's an example:

// function storeOrder(order) {
//   localStorage.setItem('id', order.id);
//   localStorage.setItem('currency', order.currency);
// }



// Instead of accessing the order properties via the "dot notation" inside the storeOrder function body, you could use destructuring like this:


// function storeOrder({id, currency}) { // destructuring
//   localStorage.setItem('id', id);
//   localStorage.setItem('currency', currency);
// }


// It's very important to understand, that storeOrder still only takes one parameter in this example! It does not accept two parameters. Instead, it's one single parameter - an object which then just is destructured internally.

// The function would still be called like this:

// storeOrder({id: 5, currency: 'USD', amount: 15.99}); // one argument / value!


//THE SPREAD OPERATOR, the three dot operator

//this operator pulls out the values from an array and adds them as seperate comma seperated values to a new Array

//Example, lets say you want to merge two arrays

const arr1 = ['Kantipur','NDTV','Zoom'];

const arr2 = ['Discovery','National Geography','Animal Planet'];

// now if you want to merge two array and if you do belowcode

const nestedArr = [arr1,arr2];

console.log(nestedArr); //you will get a nested array 
// [
//     [
//         "Kantipur",
//         "NDTV",
//         "Zoom"
//     ],
//     [
//         "Discovery",
//         "National Geography",
//         "Animal Planet"
//     ]
// ] and this is not waht we want we want to merge both arrays and get into one big array so in that case we can use spread operator like below


const spreadArr = [...arr1,...arr2];

console.log(spreadArr);

// [
//     "Kantipur",
//     "NDTV",
//     "Zoom",
//     "Discovery",
//     "National Geography",
//     "Animal Planet"
// ]


// and thats what we want and we can use this in objects too like below

//lets say we want to add one more data to our previous userrr objects then in that case we can use

const extUser = {
	isVarified : true,
	...userrr
};

console.log(extUser); 
// we get below result

// {
//     "isVarified": true,
//     "fName": "Gaurav",
//     "lName": "Poudel",
//     "no": "98123456789",
//     "street": "Kathmandu",
//     "mail": "gp@gp.com"
// }

//CONTROLL STRUCTURES

//conditional statements are called controlled structures as they execute the code only if certain condtions are met below is simple example of if

// const check = prompt("Enter Check?");

// if(check === 'pass'){
// 	console.log("Enter");
// }else if(check === 'Pass' || check === 'PASS'){
// 	console.log("Enter");
// }else{
// 	console.log("Do not enter!!");
// }

// since if is controlling the execution of the next code it is controlled structure


//for loop, for executing a same piece of code for multiple times

const dummpyArray = ['Tiger','Lion','Panther','Cheetha'];

for (const dmpArray of dummpyArray) {
	console.log(dmpArray); //this is executed for four times as there are four items in array
}
// this goes for each element of dummpyArray and outputs each individual items like Tiger,Lion,Panther and Cheetha




//MANUPULATING DOM


//we can reach out to the dom and select elemets manually by using query selector in javascript, but in react
// we dont do because react will do it because we write react as a declarative way

// what is declarative??

// A approach of writing code where focus is more on achievement, we drescribe what we want to achieve rather than explicitly specifying the steps to
// achieve

//where as javacript is imperative, it needs multiple instructions to get to the result where as in declarative you descirbe the end result


// Example

// const list = document.querySelector("ul");
// list.remove(); 


// Imperative

//LETS say you want an button and when user clicks the button if it is blue it should be red and if it is red it sould be blue now in js it woulbe something
// LIKE BELOW

// if( user.likes() ) {
//         if( hasBlue() ) {
//             removeBlue();
//             addRed();
//         } else {
//             removeRed();
//             addBlue();
//         }
//     } this is imperative

// Now in DEclaratie like in React

// return this.state.liked ? <blueLike /> : <redLike />;
// you just say you want bLUE LIKE if state is liked else redlike you dont put in steps


// FUNCTIONS AS VALUES


// 1. We can pass functions as values to other functions, Example below

  // setTimeout(); //this is browser defined function and as we know this functions accepts a function as a first parameter or we can just 
// define funtion inside it too

setTimeout(() => {
	console.log("Timeout Defined inside");
},2000);

// here setimeout will execute the defined function after 2 secodnds , time is set in miliseconds 

//although we can define funciton inside settimeout we can create a seperate function and call

function testTimeout() {
	console.log("Test Timeout defined outside!!");
}

setTimeout(testTimeout,3000); //HERE testTImeout function is passed as value to setTimeout 
// Note: We are passing testTimeout as value so we dont put parentheses here if we had to put parentheses the function should immediately executed 
// so we have to make sure that this function should have a return value

// setTimeout(testTimeout()); //here tesTimeout() should handle setTimeout immediately via return

// alternative to above outside defined function we can define an arrow function too

const testTimeout2 = () => {
	console.log("Test Timeout defined outside as arrow function")
}

setTimeout(testTimeout2, 4000);

// It is to be noted that its not limited to pass functions as values to built in functions we can pass function as values to user defined functions 

// Example

function sayHello(helloFn){
	helloFn(); //here helloFn is and value function which is accepted as argument
}
//  And then in say hello function we are passing funciton as argument
sayHello(() => {
	console.log("This is say hello function passed as arrow function");
});











