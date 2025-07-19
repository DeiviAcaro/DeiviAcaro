document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links (if you add them later in a nav)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // You can add more interactive JavaScript here if needed.
    // For example, a simple animation on scroll or a contact form validation.
    // The hover effects for images and buttons are primarily handled by CSS.

    // Example of a simple console log to confirm script is loaded
    console.log("Script 'script.js' cargado correctamente.");
});