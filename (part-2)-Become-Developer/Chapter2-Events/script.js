// TODO: ADD EVENT LISTENER
// let h1 = document.querySelector('h1');
// function dblCLick() {
//     h1.style.color = "red"
// }
// h1.addEventListener('dblclick', dblCLick);
// h1.removeEventListener('dblclick' , dblCLick);

// TODO: INPUT EVENT LISTENER
// let inp = document.querySelector('input');
// inp.addEventListener('input', function(char) {
//     if(char.data !== null) {
//         console.log(char.data);
//     }
// });

// TODO: CHANGE
// let select = document.querySelector(".ice-cream");
// // let result = document.querySelector(".result");
// let h2 = document.querySelector('h2');
// select.addEventListener('change', function(dets) {
//     h2.textContent = "Your favorite ice-cream is " +  dets.target.value;
// });

// TODO: TASK1
// let h1 = document.querySelector('h1');
// document.addEventListener("keydown" , function (val){
//     console.log(val);
//     if(val.key === " ") {
//         h1.textContent = "SPC";
//         return;
//     }
//     h1.textContent = val.key;
// })


// TODO: TASK 2
// let btn = document.querySelector('#btn');
// let inp = document.querySelector('#myFile');
// btn.addEventListener('click', function() {
//     // console.dir(inp);
//     inp.click();
// });


// inp.addEventListener('change', function(f) {
//     if(f?.target?.files[0]?.name){
//         btn.textContent =  f?.target?.files[0]?.name;
//     }else{
//         btn.textContent = "Upload"
//     }
// })


// TODO: TASK 3 submit task
// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// form.addEventListener("submit" , function(dev) {
//     dev.preventDefault(); //prevent from reload
//     let card = document.createElement("div");
//     card.classList.add("card");
//     let myimg = document.createElement("div");
//     myimg.classList.add("myimg");
//     let myCard = document.createElement("div");
//     myCard.classList.add("myCard");
//     let img = document.createElement("img");
//     myimg.appendChild(img);
//     let h1 = document.createElement("h1");
//     let h5 = document.createElement("h5");
//     let p = document.createElement("p");
//     myCard.appendChild(h1);
//     myCard.appendChild(h5);
//     myCard.appendChild(p);
//     card.appendChild(myimg);
//     card.appendChild(myCard);

    
//     let name = inputs[0].value;
//     let email = inputs[1].value;
//     let age = inputs[2].value;
//     let photo = inputs[3].value;

//     img.setAttribute("src" , photo);
//     h1.textContent = name;
//     h5.textContent = email;
//     p.textContent = age;  

//     let body = document.querySelector("body");
//     body.appendChild(card);
//     dev.target.reset();
//     return false;
// })

// TODO: TASK 4 MOUSEOVER
// let div = document.querySelector("#mydiv");
// console.log(div);
// div.addEventListener("mouseover", function(){
//     div.style.backgroundColor = "blue";
// })
// div.addEventListener("mouseout", function(){
//     div.style.backgroundColor = "red";
// })

// TODO: TASK 5
// let div = document.querySelector("#mydiv");

// window.addEventListener("mousemove", function (dets) {
//   div.style.top = dets.clientY + "px";
//   div.style.left = dets.clientX + "px";
//   console.log(dets.clientY, dets.clientX);
// });

// TODO: TASK 6 (Event Delegation)
// Event Bubbling
// let ul = document.querySelector("ul");
// ul.addEventListener("click" , function(params){
//     // ul.style.textDecoration = "line-through";
//     // params.target.style.textDecoration = "line-through";
//     params.target.classList.toggle("lt");
//     // console.dir(params);
// })
// console.log(ul);
// TODO: TASK 7: Event Capturing/Bubbling// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let but = document.querySelector("button");

// a.addEventListener("click" , function(){
//     console.log("A Capturing ...");
// });

// b.addEventListener("click" , function(){
//     console.log("B Capturing ...");
// })

// c.addEventListener("click" , function(){
//     console.log("C Capturing ...");
// },true)

// but.addEventListener("click" , function(){
//     console.log("Button Click hua ...");
// });



let inp = document.querySelector('input');
let h1 = document.querySelector('.area');
let count = 0;
inp.addEventListener('input', function() {
    h1.textContent = inp.value.length;
    // if(event.data === null){
    //     count = count -1;
    //     h1.textContent = count;
    // }else{
    //     count = count + 1;
    //     h1.textContent = count;
    // }
})

