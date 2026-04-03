// Smooth scrolling for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});

// Simple welcome alert
window.onload = () => {
    console.log("Portfolio Loaded Successfully 🚀");
};
