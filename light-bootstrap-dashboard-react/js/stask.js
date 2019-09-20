// Stask
var myStask = [];
const btn_add = document.querySelector('.add_task button');
const input_add = document.querySelector('.add_task input');
const list_stask = document.querySelector('.task_canvas');
var article_stask = document.querySelectorAll('.task_canvas article');
reset_stask();

btn_add.addEventListener('click',()=>{
    if (input_add.value !=='') {
        myStask.push({content: input_add.value, checked: 0});
        reset_stask_html(myStask);
        input_add.value ='';
    }
})

function reset_stask() {
    stasks_String = localStorage.getItem('Stasks');
    stasks_array = JSON.parse(stasks_String);
    if (stasks_array !== null) {
        myStask = stasks_array;    
    }
    reset_stask_html(myStask);
}


function reset_stask_html(params) {
    if (params !== []) {
        string_html_stask ='';
        params.forEach(element => {
            string_html_stask += '<article class="f_row_center"><div class="left_task f_row_center"><input type="checkbox" id=""><p>' + 
            element.content +'</p></div><div class="icons_task"><i class="fas fa-edit"></i><i class="fas fa-trash-alt"></i></div></article>'
        });
        list_stask.innerHTML = string_html_stask;
        article_stask = document.querySelectorAll('.task_canvas article');
        checked_myStask();
        add_delete();
    }
}

function checked_myStask() {
    for (let index = 0; index < myStask.length; index++) {
        var input_Checked = article_stask[index].querySelector('input');
        if (myStask[index].checked == 1) {
            input_Checked.checked = 1;
        }
        else input_Checked.checked = 0;
    }
}

function add_delete() {
    for (let index = 0; index < article_stask.length; index++) {
        const element = article_stask[index];
        const elementchild = article_stask[index].querySelector('.fa-trash-alt');
        elementchild.addEventListener('click',()=>{  
            checkText(element.innerText);
            reset_stask_html(myStask);
        });
    }
}

function checkText(params) {
    for (let index = 0; index < myStask.length; index++) {
        if (params == myStask[index].content) {
            myStask.splice(index,1);
        }
    }
}

window.addEventListener('beforeunload', ()=>{
    for (let index = 0; index < article_stask.length; index++) {
        const element = article_stask[index].querySelector('input');
        if (element.checked == 1) {
            myStask[index].checked = 1;
        } else {
            myStask[index].checked = 0;
        }
    }
    localStorage.setItem('Stasks',JSON.stringify(myStask));
})

