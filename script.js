/* ==========================================
   MutualSetu Showcase
   JavaScript - Part 1
========================================== */

console.log("MutualSetu Showcase Loaded");

// Smooth scroll for navigation

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// Hero Buttons

const buttons = document.querySelectorAll(".hero button");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        alert("🚧 Public Demo Coming Soon");

    });

});
/* ==========================================
   Part 2
========================================== */

// Fade Animation

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="all .8s ease";

    observer.observe(section);

});

// Footer Year

const footer=document.querySelector(".footer");

if(footer){

    const year=new Date().getFullYear();

    footer.innerHTML += `<br><small>Updated ${year}</small>`;

}

console.log("Animations Enabled");