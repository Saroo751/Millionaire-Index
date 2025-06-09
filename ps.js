let netWorthEl = document.getElementById('networth');
let worth = 0;
let targetWorth = 7000000;
let interval = setInterval(() => {
    worth += 200000;
    netWorthEl.textContent = "$" + worth.toLocaleString();
    if (worth >= targetWorth) clearInterval(interval);
}, 30);

const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
    threshold: 0.1

});

fadeEls.forEach(el => observer.observe(el));