
  document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('panel-boton');

    // Obtener el path de la URL actual (ej: /fluorescencia.html)
    const path = window.location.pathname;

    // Tabla de configuración: página => [destinatario, asunto]
    const config = {
      "/servicio_microscopia.html": ["destinatario_1@instituto.org", "Consulta sobre el servicio de microscopia"],
      "/servicio_inVivo.html": ["destinatario_2@instituto.org", "Consulta sobre servicios de ensayos in vivo"],
      "/servicio_inVitro.html": ["destinatario_3@instituto.org", "Consulta sobre servicios de ensayos in vitro"],
      "/servicio_SPF.html": ["destinatario_4@instituto.org", "Consulta sobre Modelos SPF"],
      "/servicio_personalizados.html": ["destinatario_5@instituto.org", "Consulta sobre diseño de servicios personalizados"]
    };

    // Buscar la configuración según el path actual
    const [destinatario, asunto] = config[path] || ["info@instituto.org", "Consulta general"];

    // Aplicar dinámicamente el href
    boton.setAttribute("href", `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}`);
  });

