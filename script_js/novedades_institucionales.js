fetch('./script_json/novedades_actualizacion.json')
  .then(res => res.json())
  .then(novedades => {
    novedades.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    const isIndex = document.querySelector('#novedades-home');
    const isLista = document.querySelector('#novedades-todas');

    if (isIndex) {
      novedades.slice(0, 3).forEach((n, i) => {
        isIndex.innerHTML += generarCardNovedad(n, i);
      });
    }

    if (isLista) {
      novedades.forEach((n, i) => {
        isLista.innerHTML += generarNoticiaCompleta(n, i);
      });
    }
  })
  .catch(e => console.error('Error cargando novedades:', e));

function resumenPalabras(texto, cantidad = 50) {
  const palabras = texto.trim().split(/\s+/);
  return palabras.slice(0, cantidad).join(" ") + (palabras.length > cantidad ? "..." : "");
}

function generarCardNovedad(n, i) {
  return `
    <div class="col-12 col-md-4 card-novedad">
      <a href="novedades_individual.html?id=${i}">
        <div class="card contenido-card">
          <img src="${n.imagen}" alt="${n.titulo}" />
          <div class="card_contenido">
            <h5>${n.titulo}</h5>
            <time class="card_fecha">${n.fecha}</time>
            <p>${resumenPalabras(n.noticia_completa, 50)}</p>
          </div>
        </div>
      </a>
    </div>`;
}

function generarNoticiaCompleta(n, i) {
  return `
    <article class="noticia-item mb-4">
      <div class="row align-items-center g-3">
        <div class="col-md-4">
          <img src="${n.imagen}" alt="${n.titulo}" class="img-fluid rounded novedades-img" />
        </div>
        <div class="col-md-8">
          <h2 class="noticia-titulo">${n.titulo}</h2>
          <time class="noticia-fecha" datetime="${n.fecha}">${n.fecha}</time>
          <p class="noticia-resumen">${resumenPalabras(n.noticia_completa)}</p>
          <a href="novedades_individual.html?id=${i}" class="btn btn-link">Leer más →</a>
        </div>
      </div>
    </article>`;
}
