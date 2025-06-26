const panel = document.getElementById('descripcion-panel');
const botonVerMas = document.getElementById('panel-boton');
let hideTimeout;

// Diccionario: nombre del proyecto → URL
const proyectoUrls = {
  "Proteínas Vav en melanoma cutáneo": "./proyecto_vav.html",
  "Proteínas sinucleínas en melanoma cutáneo": "./proyecto_sinucleinas.html",
  "El rol de Rac1 en la resistencia a quimioterapias": "./proyecto_rac1.html",
  "Rol de Rac1 en colangiocarcinoma": "./proyecto_colangio.html",
  "Cáncer de mama": "./proyecto_cancer_mama.html"
};

function mostrarPanel(card) {
  const titulo = card.getAttribute('data-nombre');
  const desc = card.getAttribute('data-descripcion');

  document.getElementById('panel-titulo').innerText = titulo;
  document.getElementById('panel-texto').innerText = desc;

  // Establece la URL del botón según el proyecto activo
  const destino = proyectoUrls[titulo] || "#";
  botonVerMas.onclick = () => window.location.href = destino;

  panel.classList.add('visible');
  clearTimeout(hideTimeout); // cancelar ocultamiento anterior
}

function ocultarPanelConRetraso() {
  hideTimeout = setTimeout(() => {
    panel.classList.remove('visible');
  }, 3000);
}

// Eventos en cada card
document.querySelectorAll('.servicio-card').forEach(card => {
  card.addEventListener('mouseenter', () => mostrarPanel(card));
  card.addEventListener('mouseleave', ocultarPanelConRetraso);
});

// Cancelar desaparición si el mouse entra al panel
panel.addEventListener('mouseenter', () => clearTimeout(hideTimeout));
panel.addEventListener('mouseleave', ocultarPanelConRetraso);
