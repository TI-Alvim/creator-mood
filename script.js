// Toggle Mobile Menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// WhatsApp Direct Budget Function
function openWhatsAppBudget(serviceName) {
    const phoneNumber = "5511971551104";
    const message = `Olá! Gostaria de falar sobre um projeto de *${serviceName}* visto no site da Creator Mood. Como podemos prosseguir?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}
