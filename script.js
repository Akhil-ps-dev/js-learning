// console.log('hello world');
// console.log(1234);
// console.log(null);
// console.log(undefined);

// var age = 12;
// var boolean =true;
// var decimal = 2.43;
// console.log(decimal);
// console.log(age);

// console.log("Age:" ,age);
// console.log("name:" ,boolean);

// var fullName = ["John", "Akhil", "Deo"];

// var something= [
// "akhil",
// 1234,
// "asdasd"

// ];

// console.log(fullName[2]);
// fullName.push("divya");

// fullName.pop();
// fullName.pop(0);
// console.log(fullName);
// map function
// fullName.map((name)=>{
// console.log(name);

// }
// )

// //Objects
// var objects = {
//   age: 23,
//   string: "akhil",
//   name: "lemonade",
//   happy: true,
//   friends: ["akhil", "divya", "deo"],

// };
// console.log(objects);
// console.log(objects.friends);

//combination of array and obj
// var student = [
//   {
//     name: "akhil",
//   },

//   {
//     age: 26,
//   },

//   {
//     std: " 12th",
//   },
// ];
// console.log(student);

//object
// var userData = {
//   name: "akhil",
//   age: 50,
//   branch: "computer science",
//   friends: ["divya", "deo", "koli"],
//   marrird: true,
// };

// console.log(userData);

// var stdData = [
//   {
//     name: "akhil",
//   },

//   {
//     name: "akhii",
//   },
// ];

// stdData.map((data) => {
//   // console.log(data.name);
//   console.log(data);

// });
// var data = {
//   name : "akhil"
// }

//  data.age = 12;
// data.name = "divya";
//  console.log(data);

//String manipulation

//  var age = "twelve";

//  console.log(age.toUpperCase());
//  console.log(age.slice(0,4));

//  var code = "js is amazing";
//  var hie = code.replace("js","flutter");
//  console.log(code);
// console.log(hie);

// concatunation

// var number = "10";
//  number = parseInt(number)

// console.log(number + 1);


// var string = "123w";

// operators

// var a =10;

// var b =10;

// var sum = a+b;

// console.log(sum);


//! Loops

// for( let i=0; i<5; i++){
//   console.log(i);
// }

// let names = ["akhil", "divya","deo"];

// for( let i=0; i<4; i++){
//   console.log(names[i]);
// }

// let i=0;

// while (i<5){
//   console.log(i);
//   i++;
// }

// //! Functions
// //fun delcare
// function akhil( ){
// console.log("this is  function");

// }

// akhil(); //call function

  // function print(a){
  // console.log(a);

  // }
  // print("Hey")
//!!!!!2nd parameter

//   function fun(a,b ){
// console.log(a,b);


//   }

//   fun("hey", "hello");


//!prompt

// let promtItem = prompt("Enter your Name");

// function meg(a,b){
//   console.log(a,b);
// }
//  meg("hello","world");

// function addOne(a){
//   return a+1;

// }

// addOne(3);
// let result = addOne(10);

// console.log(result);


// function hello(a){

//   return a  * 10;
// }


//  let hh = hello(20);
// console.log(hh);

//! array operations

// let array = [1,2,3,4,5,6,7,];

// array.push(8);
// console.log(array);
// array.unshift(1);
// console.log(array);

// array.pop();
// array.shift();
// console.log(array);


// //!how to update elementsin ana array

// array.splice(2,1,"heey");
// console.log(array);

//  let array = [1,2,3,4,5,6,7,];
// array.forEach((storage, index)=>{
// console.log(storage);  
// array.splice(index,1 , storage+1);

// });
// console.log(array);  


//!prompt global var
// console.log(window.innerWidth);
// window.alert("hell0");
// var prompted =  window.prompt("Enter your Name");
// console.log(prompted);

//!this
// console.log(this);

// const car={
//   name: 'Bmw',
//   model: 'X5',
//   moving: function(){
//     console.log("moving");
//     console.log(this);
//   }
// }

// car.moving();

//!constructor

class Car{
  constructor(name,model){
    console.log(this);
    this.name = name;

  }
  
}
const car1 = new Car("tata","iton");
console.log(car1);