
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

        //scroll to other links

        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            // console.log(sectionEl);
            sectionEl.scrollIntoView({behavior: "smooth"});
        }

        //Close mobile navigation
        if(link.classList.contains('main-nav-link'))
            headerEl.classList.toggle("nav-open");
    });
});

/////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(function (entries) {
    const ent = entries[0];
    console.log(ent);
    if(ent.isIntersecting === false)
    document.querySelector('.header').classList.add("sticky");
},
{
    // In the viewport
    root: null,
    threshold: 0,
});
obs.observe(sectionHeroEl);