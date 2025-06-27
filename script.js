// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll effect for internal links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  
    // Animate elements on scroll (fade-in)
    const faders = document.querySelectorAll("section");
    const appearOptions = {
      threshold: 0.1
    };
  
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(section => {
      section.classList.add("fade-in");
      appearOnScroll.observe(section);
    });
  });
  