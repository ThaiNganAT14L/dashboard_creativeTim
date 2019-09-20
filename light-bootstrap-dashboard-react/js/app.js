const icon_menu = document.querySelector ('.fa-bars');
const sidebar = document.querySelector('.sidebar')

icon_menu.addEventListener('click', ()=>{
    sidebar.classList.toggle('sidebar-active');
    icon_menu.classList.toggle('icon-bar-active');
});


const notification = document.querySelector('.notifications_main');
const notification_box = document.querySelector('.notifications_main .box-nav-header');
const droppdown = document.querySelector('.droppdown_home');
const droppdown_box = document.querySelector('.droppdown_home .box-nav-header');

notification.addEventListener('click', ()=>{
    notification_box.classList.toggle('d_block');
});

droppdown.addEventListener('click', ()=>{
    droppdown_box.classList.toggle('d_block');
});