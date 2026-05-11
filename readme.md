# 💸 Split & Spin: ¿Quién paga hoy?

**Split & Spin** es una aplicación web diseñada para grupos de amigos que quieren eliminar el estrés de dividir la cuenta y añadirle un toque de diversión al momento de pagar. 

No más cálculos infinitos ni discusiones de "yo pagué la última vez". Con esta app, la transparencia y el azar van de la mano.

## 🚀 Funcionalidades Principales

1.  **División Inteligente:** Cada usuario registra su consumo individual y la app calcula el total por persona de forma automática.
2.  **La Ruleta del "Pringao":** ¿No queréis dividir? Deja que la ruleta elija aleatoriamente quién se hace cargo de la cuenta completa.
3.  **Historial de Salidas:** Conexión a base de datos para registrar quién pagó en cada ocasión, evitando que siempre le toque al mismo.
4.  **Notificaciones vía Email:** Envío de un resumen detallado con los gastos y el pagador directamente al correo de los participantes.

## 🛠️ Stack Tecnológico

*   **Frontend:** HTML5, CSS3 (Custom Properties), JavaScript (ES6+).
*   **Backend:** PHP / Node.js (según elección).
*   **Base de Datos:** MySQL / Supabase.
*   **Notificaciones:** API de correo (Resend/SendGrid).

## 📋 Estructura de la Base de Datos

La aplicación utiliza un modelo relacional para mantener los datos organizados:
*   `users`: Almacena los perfiles de los amigos.
*   `sessions`: Registra cada cena o evento.
*   `records`: El histórico de quién fue el pagador seleccionado por la ruleta.

## 🎨 Instalación y Uso

1. Clona este repositorio.
2. Configura tus credenciales de base de datos en el archivo de configuración.
3. Abre `index.html` en tu navegador o despliega en tu hosting favorito.

---
Desarrollado con ❤️ para facilitar las cenas entre amigos.