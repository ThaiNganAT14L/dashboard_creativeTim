const btn = document.querySelector('.btn_login');

btn.addEventListener('click',()=>{  
    var user = document.querySelector('.user');
    var pass = document.querySelector('.pass');
    if (user.value !=='' && pass.value !=='') {
        if(checkAccount(user.value, pass.value) == false){
            createAccount(user.value, pass.value);
            user.value = '';
            pass.value = '';
            alert('Created Account');
        }
        else {
            alert ("User is used");
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
        if(element.user == user){
            check = true;
        }
    });
    return check;
}

function createAccount(user, pass) {
    var array = JSON.parse(localStorage.getItem('account'));
    if (array ==='') {
        array = [];
    }
    array.push({user: user, pass: pass});
    localStorage.setItem('account', JSON.stringify(array));
}