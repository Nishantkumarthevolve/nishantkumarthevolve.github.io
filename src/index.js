import "./style.css"

console.log('helo, world')
window.addEventListener('scroll', (e) => {
    const header = document.querySelector('.header-container');
    console.log(window.scrollY);
    if(window.scrollY !== 0){
        header.classList.add('head-scroll');
    }else{
        header.classList.remove('head-scroll');
    }
});