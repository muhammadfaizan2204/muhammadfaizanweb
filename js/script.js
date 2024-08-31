window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
});

const header = document.querySelector('header');
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0)
});


let menuIcon = document.querySelector('#menu-bars');
let navList = document.querySelector('.navlist');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('ri-close-large-line')
    navList.classList.toggle('active')
}