// TODO: function statements/declarations , expressions , fat arrow functions

// let fnc = function(){
//     console.log("Hello from function expression");
// }

// fnc();

// let fnc = () => {
//     console.log("Hello from fat arrow function");
// }

// TODO: REST operator
// let result = (...value) => {
//     let sum = 0;
//     value.forEach((value) => {
//         sum += value;
//     })
//     return sum;
// }

// console.log(result(1, 2, 3, 4, 5)); 



// TODO: Higher order function
// function abcd(val){
//     val();
// }
// abcd(function(){
//     console.log("hello");
// })


// (
//     function (){
//         console.log("Hello, World!");
//     }
// )();


// function discountClaculator(discount){
//     return function(val){
//         return val - (val * (discount / 100));
//     }
// }

// let discounter = discountClaculator(20);
// console.log(discounter(200))

// console.log(greet);
// let greet; //tdz 


// abcd();

//hoisting example for function declaration
// function abcd() {
//     console.log("Hello from function declaration");
// }

// hoisting example for function expression
// let abcd = function() {
//     console.log("Hello from function expression");
// }



//Discount calculator

// function discountCalculator(discount){
//     return function (amount) {
//         return amount - amount * (discount / 100);
//     }
// }

// let discounter = discountCalculator(10);
// console.log(discounter(200));


// TODO: DESTRUCTURED OBJECT AS FUNCTION PARAMETER
// function abcd({name , age}) {
//     console.log(name,age);
// }


// abcd({name : "Superman",age : 30});


// FAT ARROW FUNCTIONS aka arrow functions
// ()=>{} 

// Immediately Invoked Function Expression (IIFE)
// (function () {
//     console.log("IIFE");
// })();

//anonymous function -> benami (jiska koe naam nah ho)
// var func = function () {}

//Callback function (Jab koe function apne paramerter me koi function leta hai to use callback function kehte hain)

// function abcd(callback) {}
// abcd(function() {})
// function inside abcd is a callback fnction








