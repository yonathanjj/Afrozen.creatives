// GSAP Animation
gsap.from(".nav-container", { opacity: 0, y: 70, duration: 1, ease: "power2.out" });
gsap.from(".logo img", { opacity: 0, x: -30, duration: 1, delay: 0.5 });
gsap.from("nav ul li", { opacity: 0, y: 15, stagger: 0.2, duration: 0.8, delay: 0.8 });


gsap.from(".hero-text", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
});

// Hover effect for individual letters in the hero text
document.querySelectorAll('.hero-text').forEach(textElement => {
  textElement.innerHTML = textElement.innerText.split('').map(letter => `<span>${letter}</span>`).join('');
});

const heroLetters = document.querySelectorAll('.hero-text span');

heroLetters.forEach(letter => {
  letter.addEventListener('mouseenter', () => {
    gsap.to(letter, { scaleY: 2, duration: 0.3, ease: 'power2.out' }); // Stretch vertically upwards on hover
  });
  letter.addEventListener('mouseleave', () => {
    gsap.to(letter, { scaleY: 1, duration: 0.3, ease: 'power2.out' }); // Return to normal on mouse leave
  });
});



