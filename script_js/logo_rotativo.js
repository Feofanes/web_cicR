
document.addEventListener("DOMContentLoaded", () => {
  const logos = document.querySelectorAll('.logo-rotatorio .logo-img');
  let idx = 0;
  setInterval(() => {
    logos[idx].classList.remove('active');
    idx = (idx + 1) % logos.length;
    logos[idx].classList.add('active');
  }, 10000);
});

