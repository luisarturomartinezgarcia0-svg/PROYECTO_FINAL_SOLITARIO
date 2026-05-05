// ===========================
// MENÚ HAMBURGUESA
// ===========================
 
function toggleMenu() {
  const menu    = document.getElementById('sideMenu');
  const ham     = document.getElementById('hamburger');
  const overlay = document.getElementById('overlay');
 
  menu.classList.toggle('open');
  ham.classList.toggle('open');
  overlay.classList.toggle('show');
}
 
function closeMenu() {
  document.getElementById('sideMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}
 
// ===========================
// SLIDER DE TESTIMONIOS
// ===========================
 
let current = 0;
const total = 3;
 
function goToSlide(n) {
  current = n;
  document.getElementById('testimonialTrack').style.transform = `translateX(-${n * 100}%)`;
 
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === n);
  });
}
 
// Avance automático cada 4 segundos
setInterval(() => {
  goToSlide((current + 1) % total);
}, 4000);
 
// ===========================
// SCROLL REVEAL
// ===========================
 
const reveals = document.querySelectorAll('.reveal');
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });
 
reveals.forEach(el => observer.observe(el));