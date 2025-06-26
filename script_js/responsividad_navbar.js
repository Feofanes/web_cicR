window.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav.navbar');
  if (nav) {
    const altura = nav.offsetHeight;
    document.body.style.paddingTop = `${0}px`;
  }
});
