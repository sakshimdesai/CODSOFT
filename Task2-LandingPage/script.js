window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(s => {
    const t = s.getBoundingClientRect().top;
    if (t < window.innerHeight - 100) {
      s.style.opacity = '1';
      s.style.transform = 'translateY(0)';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section').forEach(s => {
    s.style.opacity = '0';
    s.style.transform = 'translateY(40px)';
    s.style.transition = 'all 0.6s ease-out';
  });
});
