const sidebar =
document.getElementById('sidebar');

const openBtn =
document.getElementById('sidebar-toggle');

const closeBtn =
document.getElementById('close-btn');

openBtn.addEventListener('click', ()=>{

    sidebar.classList.add('show-sidebar');

});

closeBtn.addEventListener('click', ()=>{

    sidebar.classList.remove('show-sidebar');

});