const hiddenElements = document.querySelectorAll(".hidden");
const techStack = document.querySelector("#tech-stack");
const about = document.querySelector(".about");
const hamburgerBtn = document.querySelector("#hamburger");
const sidebar = document.querySelector("#sidebar");
const navbarMobile = document.querySelector("#navbar-mobile");
const copy = document.querySelectorAll(".copy");
const text = document.querySelectorAll(".user-data");
// Blob animation
const tween = KUTE.allFromTo(
    '.blob1',
    { path: ".blob1" },
    { path: ".blob2" },
    { repeat: 1000, duration: 2500, yoyo: true }
);
tween.start();
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            if (entry.target.classList.contains("tech-stack")) {
                const children = entry.target.children;
                for (const child of children) {
                    child.classList.add("show");
                };
            }
        }
    });
});

// Adaptable header
document.addEventListener("scroll", () => {
    const navbar = document.querySelector("#navbar");
    const navbarRect = navbar.getBoundingClientRect();
    const aboutRect = about.getBoundingClientRect();
    if (navbarRect.bottom >= aboutRect.top && navbarRect.bottom <= aboutRect.bottom) {
        navbar.classList.add("bg-2");
        navbar.classList.remove("bg-1");
    } else {
        navbar.classList.add("bg-1");
        navbar.classList.remove("bg-2");
    }
})
hiddenElements.forEach(el => observer.observe(el));
observer.observe(techStack);
// Hamburger btn

hamburgerBtn.addEventListener("click", () => {
    if (hamburgerBtn.classList.contains("hamburger-active")) {
        hamburgerBtn.classList.remove("hamburger-active");
        hamburgerBtn.firstElementChild.classList.remove("bar-active");
        sidebar.classList.remove("sidebar-active");
    } else {
        hamburgerBtn.classList.add("hamburger-active");
        hamburgerBtn.firstElementChild.classList.add("bar-active")
        sidebar.classList.add("sidebar-active");
    }
});
const navChildren = navbarMobile.children;
for (const child of navChildren) {
    child.addEventListener("click", () => {
        hamburgerBtn.classList.remove("hamburger-active");
        hamburgerBtn.firstElementChild.classList.remove("bar-active");
        sidebar.classList.remove("sidebar-active");
    })
}
// Copy to clipboard
copy.forEach((element, i) => element.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(text[i].innerHTML);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}))