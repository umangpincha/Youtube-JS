// TODO: SELECT ELEMENT
// let abcd = document.querySelector("h1"); //node will be stored in a variable
// console.dir(abcd);

// abcd.innerText = "Hello World!"; //changing the text of h1 element
// abcd.innerHTML = "<em>Hello World!</em>"; //changing the text of h1 element with HTML tags

// TODO: GET ATTRIBUTE , SET ATTRIBUTE , REMOVE ATTRIBUTE
// let link = document.querySelector("a");
// console.dir(link);
// link.href = "https://www.google.com"; //set attribute
// let myAttr = link.getAttribute("href"); //get attribute
// console.log(myAttr);
// link.removeAttribute("href"); //remove attribute


// TODO: DYNAMIC DOM MANIPULATION (CREATE ELEMENT , REMOVE ELEMENT , APPEND CHILD PREPEND)
// let h1 = document.createElement("h1"); //create element
// h1.innerText = "This is a dynamically created heading"; //set text of created element
// document.querySelector("body").append(h1); //append child


// let h1 = document.querySelector("h1");
// h1.style.color = "red"; //change style
// h1.style.backgroundColor = "yellow"; //change style
// h1.classList.add("my-class"); //add class
// h1.classList.remove("my-class"); //remove class
// h1.classList.toggle("my-class"); //toggle class
// console.dir(h1);


// TODO: TASKS

//Q1
// let heading = document.querySelector("#heading");
// heading.innerText = "Welcome to DOM Manipulation";
// console.log(typeof heading);

//Q2
// let list = document.querySelectorAll("li");
// console.log(list);
// list.forEach(function(item){
//     console.log(item.textContent);
// })

//Q3
// let p = document.querySelector("p");
// p.innerHTML = "<b>Updated</b> by Javascript";

// Q4
// let src = document.querySelector("img");
// console.log(src.src);

//Q5
// let link = document.querySelector("img");
// console.log(link.getAttribute("src"));

// Q6
// let link = document.querySelector("a");
// link.href = "https://sheryians.com/";

// Q7
// let title = document.querySelector("div");
// console.dir(title);
// title.setAttribute("title" , "my-title");


// // Q8
// let btn = document.querySelector("button");
// btn.removeAttribute("disabled")

// // Q9
// let div = document.querySelector("div");
// div.removeChild(div.querySelector("h1"));


//Q10
// let ul = document.querySelector("ul");
// console.dir(ul);
// let li = document.createElement("li");
// li.innerText = "Item last";
// ul.appendChild(li);

// Q11
// let img = document.createElement("img");
// let div = document.querySelector("div");
// img.setAttribute("src" , "https://via.placeholder.com/150");
// div.prepend(img);

// Q12

// let ul = document.querySelectorAll("ul li:nth-child(2n)");
// // console.dir(ul);
// ul.forEach(function(item){
//     item.classList.add("highlight");
// })


let p = document.querySelectorAll("p");
p.forEach(function(item){
    item.style.fontSize = "18px";
});