const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }

    });
});

hiddenElements.forEach(element => {
    observer.observe(element);
});
function ubahTema() {
    document.body.classList.toggle("dark");
}