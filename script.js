AOS.init({ duration: 1000, once: true });

const textElement = document.getElementById('typing-text');
const phrase = "Sistem Informasi Student • Dreamer • Creator";
let index = 0;

function typeEffect() {
    if (index < phrase.length) {
        textElement.innerHTML += phrase.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
    }
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih, Maylova sudah menerima pesanmu! ✨');
        contactForm.reset(); 
    });
}

window.onload = () => {
    typeEffect();
};