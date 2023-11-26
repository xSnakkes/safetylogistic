document.addEventListener('click', documentClick);

function documentClick(event) {
    const targetItem = event.target;
    if(targetItem.closest('.menu__burger')){
        document.documentElement.classList.toggle('menu__open');
    } 
}

window.onload = (e) => {
    document.querySelector('.preloader').classList.add('hide');
};