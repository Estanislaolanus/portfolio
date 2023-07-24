const hiddenElements = document.querySelectorAll(".hidden");

const tween = KUTE.fromTo(
    '#blob1',
    {path: "#blob1"},
    {path: "#blob2"},
    {repeat: 999, duration: 2000, yoyo: true}
);
tween.start();
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    })
});

hiddenElements.forEach(el => observer.observe(el));
