// let tm = setTimeout(function(){
//     console.log("This message is displayed after 3 seconds");
// },3000);

//setInterval har 3 sec mein chalta rahegah , according to interval time
// let tm = setInterval(function(){
//     console.log("This message is displayed after 3 seconds");
// },3000);

// clearInterval(tm); // Cancels the interval before it executes

//counter
// let counter = 10;

// let int = setInterval(function(){
//   console.log(counter--); 
//   if(counter < 0){
//     console.log("Countdown finished");
//     clearInterval(int);
//   } 
// },1000)

// TODO: download ko 3sec mein 100% pe phaunchana hai
// let downloadProgress = 0;
// let sec = 3;
// let progressFill = document.querySelector('.progress-fill');
// let percent = document.querySelector('.percent');
// let h2 = document.querySelector('h2');

// let int =  setInterval(function(){
//     downloadProgress = downloadProgress + 1;
//     progressFill.style.width = downloadProgress + '%';
//     percent.textContent = downloadProgress + '%';
//     // console.log(downloadProgress);
//     if(downloadProgress >= 100){
//         h2.innerText = "Downloaded ✅";
//         clearInterval(int);
//     }
// },(sec*1000)/100)
