// =========================
// LENIS
// =========================

const lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
    smoothTouch: false
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// =========================
// AOS
// =========================

AOS.init({
    duration:1000,
    once:false,
    easing:"ease-in-out",
    offset:100
});

// =========================
// GSAP HERO
// =========================

// Navbar

gsap.from(".dashboard",{
    y:-80,
    opacity:0,
    duration:1
});

// Hero Text

gsap.from(".one h2",{
    x:-100,
    opacity:0,
    duration:1,
    delay:.3
});

gsap.from(".one p",{
    x:-100,
    opacity:0,
    duration:1,
    delay:.6
});

// Button

gsap.from(".one button",{
    y:50,
    opacity:0,
    duration:.8,
    delay:1,
    stagger:.2
});

// Hero Image

gsap.from(".team img",{
    x:120,
    opacity:0,
    duration:1.2,
    delay:.5
});