// let obj = {
//     name: "John",
//     age: 30,
//     address: {
//         city: "New York",
//         zip: "10001",
//         location:{
//             lat: 40.7128,
//             lng: -74.0060
//         }
//     },
// }

// console.log(obj["name"]);

//Object destructuring 
// let {lat , lng} = obj.address.location;
// console.log(`Latitude: ${lat}, Longitude: ${lng}`); // This will log undefined for lan since it's a typo

// Looping : for-in , Objects.keys . Object.entries

// let obj = {
//     name: "John",
//     age: 30,
// }

// for (const key in obj) {
//     console.log(key, obj[key]);
// }

// console.log(Object.keys(obj)); //keys ko arrays mein convert kr deta hai
// console.log(Object.entries(obj)); //har key , value ka ek alag array bana lia , arrays of arrays

// TODO:
//Copying objects : spread , Object.assign , deep clone
// let obj = {
//     name: "John",
//     age: 30,
// }
// let obj2 = {...obj}; // spread operator
// console.log(obj2); // { name: 'John', age: 30 }

//deep copy
// let role = "admin";
// let obj = {
//     name: "John",
//     age: 30,
//     address: {
//         city: "New York",
//         zip: "10001",
//         location:{
//             lat: 40.7128,
//             lng: -74.0060
//         }
//     },
//     [role]: true, // computed property(agr aap bahar wali variable ki key banaan chahte ho toh aese likhte hain tph fr voh obj mein as a key add ho jata hai and usko likkhne ka tareeka yeh hai jaise yeh role likha hai )
// }
// console.log(obj);
// agr hum spread ki trah copy krte hain toh andar ka joh nested object hai wo reference copy hota hai es cheez ko solve kene ke liye humein JSON.stringify and JSON.parse ka use karna padta hai
// let obj2 = {...obj};
// obj2.address.city = "Michigan"; // This will affect obj
// console.log(obj.address.city); // Michigan
// console.log(obj2.address.city); // Michigan

// let obj2 = JSON.parse(JSON.stringify(obj)); // deep copy
// console.log(obj2);
// obj2.address.city = "Los Angeles"; // This will not affect obj
// console.log(obj.address.city); // New York
// console.log(obj2.address.city); // Los Angeles

//Optional chaining , computed properties
//esmein hum ? laga dete hain har key ke aage taki agr voh key nah ho toh error nah throw hoye uski jagah undefine ho jaye
// console.log(obj.add?.location);
// console.log(obj);


//destructure the key "first-name" as a variable called firstName 
// const user = {
//     "first-name":"Umang"
// }
// let {"first-name": firstName} = user;
// console.log(firstName);

// const course = {
//     title: "JS",
//     duration: "4 weeks"
// }

// Object.entries(course).forEach(function(val){
//     console.log(`${val[0]} : ${val[1]}`);
// })

// const obj1 = {info: {name: "John", age: 30}};
// const obj2 = JSON.parse(JSON.stringify(obj1)); 
// obj2.info.name = "Doe"; // This will not affect obj1
// console.log(obj1.info.name); // John
// console.log(obj2.info.name); // Doe

let obj = {
    name: "umang"
}
// delete obj.name; //delete key 
// console.log(obj);

// for (const key in obj) {
//     console.log(obj[key]);
// }




