let nm = document.querySelector('#name');
let form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.dir(nm.value);
    //name ka validation
    if(nm.value.length <= 2){
        document.querySelector('#msg').style.display = 'block';
    }else{
        document.querySelector('#msg').style.display = 'none';
    }


})

