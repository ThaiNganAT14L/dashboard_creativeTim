const btn = document.querySelector('.btn_login');

btn.addEventListener('click',()=>{
    var user = document.querySelector('.user');
    var pass = document.querySelector('.pass');
    if (user.value !=='' && pass.value !=='') {
        if(checkAccount(user.value, pass.value) == true){
            window.open('../index.html');
        }
        else {
            alert ("User or Password is Fail");
        }
    } 
});


function checkAccount(user, pass) {
    var array = JSON.parse(localStorage.getItem('account'));
    var check = false;
    if (array ==='') {
        array = [];
    }
    array.forEach(element => {
        if(element.user == user && element.pass == pass){
            check = true;
        }
    });
    return check;
}