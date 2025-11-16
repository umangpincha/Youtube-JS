// var a = 12; declare + initialize (initialize matlab pehle baar value denah)
// var a; declare krnah

// TODO: en problems se bache ke liye hum let , const ka estemal krte hain
// window mein add ho jata hai
// function scope hote hain
// redeclare ho jate hain


//TODO: SCOPE (global , block , functional)
// var functional scope hota hai aur let , const block scope hote hain
// global scope : pure code mein kahin bhi access kr skte hain
// block scope : {} ke andar wala scope
// functional scope : function ke andar wala scope

// var functional scope hota hai


//TODO: reassignment and redeclaration
// var b = 13; //declare + initialize
// b = 14; // reassignment
// var b = 23; //redeclaration(jab var yaa let laga dete hain variable ke name ke aage and fr se vohi variable declare kr dete hain usse redeclare bolte hain.)


// let a = 12; //declate + initialize
// a = 200 // reassign

// In var we can do redeclaration but not in let 


// TODO: Temporal dead zone
// utna area jitne mein js ko pata hai ki ye variable  exist krta hai but yeh apko value nhn de skta

// necche example mein line no 36 se 42  tak tdz hai
 
// console.log(tdz); // ref error






// let tdz = 18 


// console.log(tdz);
// var tdz = 90 



// hoisting -> ek variable ko jb js mein banate hain toh voh variable do hisso mein toot jata hai aur uska declare wala part upar chale jata hai aur uska initialization wala part necche reh jata hai

//Eg:
// var a = undefine
// console.log(a);
// let a = 34

// var -> hoist -> undefined
// let -> hoist -> TDZ (reference error)
//const -> hoist -> TDZ (reference error)


// TODO: Sec 2 (Data Types)
// primitive : aese sare values jinhe copy krne pa humhe real copy mil jaye
// string , number , boolean , undefined , null , symbol , bigint

// primitive
// let a = 10
// let b = a; [Copied value] 
// a=a+2; 
// console.log(a);//12
// console.log(b); 10

//reference: aese sare values jinhe copy krne par tumeh real copy nhn milti but uska reference milegah parent ka
// arrays , functions , objects
// [] , {} , ()

// let arr = [1,2,3,4];
// let b = arr;
// b[0]="Umang" //ref copy hua hai parent ka toh arr ki value bhi change ho jayegi agr b ki value change hogi toh.
// console.log(b);
// console.log(arr);

//string
// '' -> single quotes
// "" -> double quotes
// `` -> template literals (backticks)

// number
// 12
// 12.3
 
// null
// null ka matlab hai apne jaan bujh kr koe value nhn  di


// undefined
// apaneh ek variable banaya but usko koe value nhn di but usse by default joh value mili hai woh undefined hai

//Eg of undefined:  let a; //here value of a is undefined

// symbol -> unique immutable value
// let u1 = Symbol("uid")
// let u2 = Symbol("uid")
// console.log(u1 === u2);


// let obj = {
//     uid:1,
//     name: "John",
// }

// let u1 = Symbol("uid");
// obj[u1] = 1; // unique key
// console.log(obj);

// bigInt number ke aage n lahgaye
// let a = 9007199254740991n

// TODO: REFERENCE DATA TYPES
//DYNAMIC TYPING -> data ka type hum change kr skte hain kbhi bhi
//typeof QUIRKS (EG , typeoff null==='object') js mein kch atpati chezein

// type coersion (== vs ===)
// concept jismein apka type convert ho jata hai automatically
// "5" + 1 = 51



// False values: 0 , false , "", null , undefined , NaN , document.all
// rest all apart from above are true
// agar falsy yaa truthy value check krnah hai to !! prefix mein laga kr fataft cehck kr lo yeh ek shortcut hai


// Why type of NaN is number? 
// typeof NaN
// Ans: Because NaN ek failed operation ka result hai
// 2 * "umang" -> NaN


 



 























