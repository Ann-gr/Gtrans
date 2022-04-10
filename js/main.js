const services = document.getElementById('services');
const content = document.querySelectorAll('.content');

const changeClass = el => {
    for(let i = 0; i < services.children.length; i++) {
        services.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

services.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
})