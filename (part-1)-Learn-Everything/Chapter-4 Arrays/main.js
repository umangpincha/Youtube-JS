let arr = [11,1,2,3,4,5];
// arr.push(1000);
// arr.pop();
// console.log(arr.shift()); //remove 1st elemnt from the array and return that value
// console.log(arr.unshift(0)); //add 0 at the start of the array and return length of array.
// arr.splice(2, 1);//remove 1 element from index 2, original array ko change kr deta hai
// let newar = arr.slice(0,3); //original array ko chnage nhn karta
// console.log(newar); //it will return the removed element in an array
// arr.reverse(); //reverse the array
// arr.sort((a, b) => a - b); //sort the array in ascending order
console.log(arr);

//TODO: foreach ,MAP , FILTER , REDUCE

// arr.forEach((value, index) => {
//     console.log(value, index);
// })


// map srf tab use krnah hai jab apko ek naya array banana hai pichle array ke data ke basis par

//map dikte hi sath mein ek blank array bana lia kro

//kab use kare map
//jab bhi apko koe aesa case dikh jaye jahan par ek array se naya array banegah and voh naya array kch values ko rakhegah  tab map lagega.
  
// let newArr = arr.map((value)=>{
//     if(value > 10) return value;
// })

// console.log(newArr);


//filter
// let newArr = arr.filter((value)=>{
//     return value > 4;
// })
// console.log(newArr);



//reduce
// let ans = arr.reduce((accumulator, value) => {
//     return accumulator + value;
// }, 0); //0 is initial value of acc
// console.log(ans); //it will return the sum of all elements in the array


// let val = arr.find((val)=>{
//     return val==1;
// });
// console.log(val);

// boolean value return krta hai .some
// let any = arr.some((val)=>{
//     return val > 10;
// });

// goes to every element and check if contion is true/false if any one not satisfy the condition it will return false  
// let ever = arr.every((val)=>{
//     return val >= 1;
// })

// console.log(ever);
// // console.log(arr); 









