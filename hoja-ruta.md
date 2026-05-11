1. Hoja de Ruta del Proyecto (Roadmap)
He dividido el desarrollo en 4 fases para que no te agobies.

Fase 1: Cimientos y Estructura (Frontend Base)
Diseño UI: Crear el layout con HTML/CSS (puedes usar :root para los colores de la app).

Lógica de Usuarios: Crear la interfaz para añadir/quitar amigos dinámicamente con JavaScript.

Calculadora de Gastos: Programar la lógica que suma los platos individuales y muestra el total.

Fase 2: Interactividad y "El Azar"
Desarrollo de la Ruleta: Crear el componente visual con Canvas o animaciones CSS.

Lógica del Sorteo: Vincular los nombres de los usuarios cargados con los segmentos de la ruleta.

Fase 3: Persistencia (Base de Datos y Backend)
Diseño de la BBDD: Crear las tablas (Usuarios, Historial de Cenas).

Conexión API: Crear los "puentes" (scripts en PHP o funciones de Supabase) para guardar quién pagó y cuánto.

Módulo de Historial: Crear la vista donde se consultan las salidas anteriores desde la BBDD.

Fase 4: Notificaciones y Despliegue
Sistema de Correos: Integrar la API (ej. Resend o PHPMailer) para enviar el resumen al pulsar el botón.

Hosting: Subir la web a un servidor (Netlify, Vercel o un hosting tradicional).