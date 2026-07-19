AOS.init({
    duration:1000,
    once:false,
    easing:"ease-in-out",
    offset:100
});

const lenis = new Lenis({
  duration: 1.5,
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.5,
  infinite: false
});
lenis.on("scroll", AOS.refresh);

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// =========================
// SCROLLSPY
// =========================
const indicator = document.querySelector(".indicator");
const navLinks = document.querySelectorAll(".dashboard a");
function moveIndicator(link){
    const rect = link.getBoundingClientRect();
    const parent = link.parentElement.getBoundingClientRect();
    indicator.style.left = (rect.left - parent.left) + "px";
    indicator.style.width = rect.width + "px";
}
navLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        navLinks.forEach(l=>l.classList.remove("active"));
        link.classList.add("active");
        moveIndicator(link);
    });
});
window.addEventListener("load",()=>{
    moveIndicator(document.querySelector(".dashboard a.active") || navLinks[0]);
});

const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.id;
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
            moveIndicator(link);   // <-- INI YANG BIKIN GARIS IKUT GESER
        }
    });
});