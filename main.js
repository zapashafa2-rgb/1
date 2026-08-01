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
//form
const form = document.getElementById("form");

form.addEventListener("submit", async function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const regex = /^[A-Za-z ]+$/;

    if(!regex.test(name)){
        alert("Nama hanya boleh huruf");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
        alert("Email tidak valid");
        return;
    }

    if(message.length < 10){
        alert("Pesan minimal 10 karakter");
        return;
    }

    const formData = new FormData(form);

    await fetch("https://script.google.com/macros/s/AKfycbzxUfFSt_0t3HBJwl9WzadXw3c7uhbOsgPH10PnPvT-RsmAcNdnTyQMsGyusly5t76YRQ/exec", {
    method: "POST",
    mode: "no-cors",
    body: formData
    });

    alert("Pesan berhasil dikirim!");
    form.reset();
});