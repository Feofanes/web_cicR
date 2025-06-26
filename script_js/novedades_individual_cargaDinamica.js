// Obtener 'id' de la URL
const params = new URLSearchParams(window.location.search);
const noticiaId = params.get('id');

const contenedor = document.getElementById('noticia-articulo');

if (noticiaId === null) {
  contenedor.innerHTML = '<p>Noticia no encontrada.</p>';
} else {
  fetch('./script_json/novedades_actualizacion.json')
    .then(res => res.json())
    .then(novedades => {
      const nota = novedades[parseInt(noticiaId)];
      if (!nota) {
        contenedor.innerHTML = '<p>Noticia no encontrada.</p>';
        return;
      }
      // Completar contenido
      document.getElementById('noticia-titulo').textContent = nota.titulo;
      document.getElementById('noticia-fecha').textContent = nota.fecha;
      const img = document.getElementById('noticia-imagen');
      img.src = nota.imagen;
      img.alt = nota.titulo;

      document.getElementById('noticia-texto').innerHTML =
        nota.noticia_completa
          .split('\n\n')
          .map(p => `<p>${p}</p>`)
          .join('');
    })
    .catch(err => {
      console.error(err);
      contenedor.innerHTML = '<p>Error al cargar la noticia.</p>';
    });
}
