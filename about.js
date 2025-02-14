gsap.from(".about-section h3", { opacity: 0, y: -20, duration: 1 });
gsap.from(".about-section p", { opacity: 0, y: 20, duration: 1.2, delay: 0.2 });

// Final GSAP Animations
gsap.from(".section-title", {
    opacity: 0,
    x: -50,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".who-we-are",
        start: "top center"
    }
});

gsap.from(".main-paragraph", {
    opacity: 0,
    x: 50,
    duration: 0.8,
    delay: 0.3,
    scrollTrigger: {
        trigger: ".who-we-are",
        start: "top center"
    }
});

gsap.from(".stat-circle", {
    opacity: 0,
    scale: 0,
    duration: 0.6,
    stagger: {
        each: 0.2,
        from: "start"
    },
    delay: 0.6,
    scrollTrigger: {
        trigger: ".who-we-are",
        start: "top center"
    }
});




