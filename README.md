# React + Vite

## Tecnologias
   * React
   * Vite
   * Tailwind

## Init Project

   1. ```npm create vite@latest```

   2. Nombra tu proyecto y Selecciona tu opcion

   3. ```npm install```

   4. Para iniciar el proyecto ```npm run dev``` y ```npm build``` para construirlo y verificar errores de compilacion

## Init Tailwind

   1. install Tailwind: ```npm install -D tailwindcss postcss autoprefixer```

   2. init Tailwind: ```npx tailwindcss init -p``` , este comando actualiza los package.json y crea archivos como tailwind.config.js

   3. Luego en tailwind.config.js pegar la siguiente configuracion:

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Dirijete a ``src/index.css`` y pega lo siguiente

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
5. Ya estas listo para utilizar Tailwind: ``<h1 className="text-3xl font-bold underline">Hello world! </h1> ``

