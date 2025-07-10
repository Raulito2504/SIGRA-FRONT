/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define tus colores personalizados aquí
        // Usar los mismos nombres que las clases de Tailwind por defecto es una opción
        // O puedes crear nombres nuevos como 'custom-black', 'login-bg-white', etc.
        'black': '#000000', // Redefinir si el negro por defecto no es exacto
        'white': '#ffffff', // Redefinir si el blanco por defecto no es exacto
        'gray-200': '#e4e4e7', // Si tu gris-200 es este hex
        'gray-600': '#71717a', // Si tu gris-600 es este hex
        'gray-50': '#fafafa',  // Si tu gris-50 es este hex
        'gray-100': '#f4f4f5', // Si tu gris-100 es este hex
        'gray-800': '#27272a', // Si tu gris-800 es este hex
        'red-600': '#dc2626', // Si tu rojo-600 es este hex
        'red-700': '#b91c1c', // Si tu rojo-700 es este hex
        'gray-400': '#a1a1aa', // Si tu gris-400 es este hex
        'zinc-600': '#3f3f46', // Para el border del wrapper del formulario
        'gray-400': '#a1a1aa', // Para labels y texto de "¿Ya tienes cuenta?"
        'gray-50': '#fafafa',   // Para el fondo de los inputs
        'gray-100': '#e4e4e7',  // Para el borde de los inputs
        'gray-800': '#27272a',  // Para el focus ring de los inputs
        'red-600': '#dc2626',   // Para el botón y enlaces de acento
        'red-700': '#b91c1c',   // Para el hover del botón y enlaces
        // Si no estás seguro si tus hex son los de Tailwind, puedes dejarlos así
        // o usar nombres como 'clr-black', 'clr-white', 'clr-gray-200', etc.
        // y luego actualizar tus clases @apply en globals.css
      },
    },
  },
  plugins: [],
};