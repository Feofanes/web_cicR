
  const panel = document.getElementById('descripcion-panel');
  let hideTimeout;

  function mostrarPanel(card) {
    const titulo = card.getAttribute('data-nombre');
    const desc = card.getAttribute('data-descripcion');

    document.getElementById('panel-titulo').innerText = titulo;
    document.getElementById('panel-texto').innerText = desc;

    const email = 'contacto@instituto.org';
    const asunto = encodeURIComponent(`Consulta sobre ${titulo}`);
    document.getElementById('panel-boton').href = `mailto:${email}?subject=${asunto}`;


    panel.classList.add('visible');

    // Cancelar cualquier intento de ocultar anterior
    clearTimeout(hideTimeout);
  }

  function ocultarPanelConRetraso() {
    hideTimeout = setTimeout(() => {
      panel.classList.remove('visible');
    }, 3000); // Esperar 3 segundos
  }

  // Eventos en cada card
  //document.querySelectorAll('.servicio-card').forEach(card => {
   // card.addEventListener('mouseenter', () => mostrarPanel(card));
   // card.addEventListener('mouseleave', ocultarPanelConRetraso);
 // });


  document.querySelectorAll('.servicio-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    mostrarPanel(card); // sigue mostrando el panel

    // Si estamos en la página de proyectos
    if (botonProyectos) {
      const nombreProyecto = card.getAttribute('data-nombre');
      const url = proyectoUrls[nombreProyecto] || "#";
      botonProyectos.onclick = () => window.location.href = url;
    }
  });

  card.addEventListener('mouseleave', ocultarPanelConRetraso);
});




  // Si el mouse entra al panel, cancelar la ocultación
  panel.addEventListener('mouseenter', () => clearTimeout(hideTimeout));

  // Si el mouse sale del panel, iniciar la cuenta regresiva para ocultarlo
  panel.addEventListener('mouseleave', ocultarPanelConRetraso);




  
const botonProyectos = document.getElementById("panel-boton-proyectos");

if (botonProyectos) {
  const proyectoUrls = {
    "Proteínas Vav en melanoma cutáneo": "./proyecto_vav.html",
    "Proteínas sinucleínas en melanoma cutáneo": "./proyecto_sinucleinas.html",
    "El rol de Rac1 en la resistencia a quimioterapias": "./proyecto_rac1.html",
    "Rol de Rac1 en colangiocarcinoma": "./proyecto_colangio.html",
    "Cáncer de mama": "./proyecto_cancer_mama.html"
  };

  document.querySelectorAll('.servicio-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const nombreProyecto = card.getAttribute('data-nombre');
      const url = proyectoUrls[nombreProyecto] || "#";
      botonProyectos.onclick = () => window.location.href = url;
    });
  });
}

