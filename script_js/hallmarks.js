// hallmarks.js
document.addEventListener('DOMContentLoaded', () => {
  const svg = document.getElementById('hallmarks-svg');
  const sectors = svg.querySelectorAll('[id^="hallmark-"]');
  const infoTitulo = document.getElementById('info-titulo');
  const infoTexto = document.getElementById('info-texto');
  const infoBox = document.getElementById('hallmark-info');
  let data = {};
  let autoInterval = null;

  // Cargar JSON y activar sector inicial
  fetch('script_json/hallmarks.json')
    .then(r => r.json())
    .then(json => {
      data = json;
      startAutoChange();
    })
    .catch(e => console.error(e));

  // Configurar eventos de hover en sectors
  sectors.forEach(sec => {
    sec.style.cursor = 'pointer';
    sec.addEventListener('mouseenter', () => {
      stopAutoChange();
      highlightSector(sec);
      showPanel(sec.id);
    });
    sec.addEventListener('mouseleave', () => {
      clearHighlight(sec);
      startAutoChange();
    });
  });

  function showPanel(id) {
    const d = data[id];
    if (!d) return;
    infoTitulo.textContent = d.titulo;
    infoTexto.textContent = d.texto;
    infoBox.className = `info-box ${id}`;
  }

  function highlightSector(sec) {
    sec.classList.add('hover');
  }

  function clearHighlight(sec) {
    sec.classList.remove('hover');
  }

  function startAutoChange() {
    stopAutoChange();
    autoInterval = setInterval(() => {
      const choice = randomSector();
      sectors.forEach(s => clearHighlight(s));
      highlightSector(choice);
      showPanel(choice.id);
    }, 5000);
  }

  function stopAutoChange() {
    if (autoInterval) clearInterval(autoInterval);
  }

  function randomSector() {
    return sectors[Math.floor(Math.random() * sectors.length)];
  }
});

