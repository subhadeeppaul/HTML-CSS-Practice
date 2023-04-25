
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
        // console.log(href);

        //scroll back top
        if (href === "#") window.scrollTo({
            top:0,
            behavior: "smooth",
        });

        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            console.log(sectionEl);
        }


    });
});