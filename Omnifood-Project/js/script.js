
//Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function (){
    headerEl.classList.toggle("nav-open");
});

//Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');
// console.log(allLinks);

allLinks.forEach(function(link){
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = link.getAttribute("href");


        //scroll back top

    });
});