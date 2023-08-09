const hiddenElements = document.querySelectorAll(".hidden");
const about = document.querySelector(".about");

// Blob animation
const tween = KUTE.allFromTo(
    '.blob1',
    {path: ".blob1"},
    {path: ".blob2"},
    {repeat: 1000, duration: 2500, yoyo: true}
);
tween.start();
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

// Adaptable header
document.addEventListener("scroll", () => {
        const navbar = document.querySelector("#navbar");
        const navbarRect = navbar.getBoundingClientRect();
        const aboutRect = about.getBoundingClientRect();
        console.log(navbarRect.bottom, aboutRect.top, aboutRect.bottom,navbarRect.bottom >= aboutRect.top)
        if(navbarRect.bottom >= aboutRect.top && navbarRect.bottom <= aboutRect.bottom) {
            navbar.classList.add("bg-2");
            navbar.classList.remove("bg-1");
        } else {
            navbar.classList.add("bg-1");
            navbar.classList.remove("bg-2");
        }

})
hiddenElements.forEach(el => observer.observe(el));