import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcssNested from 'postcss-nested'; // Importa el complemento de anidamiento CSS

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss,
    postcssNested(), // Habilita el complemento de anidamiento CSS antes de Tailwind CSS
    autoprefixer,
  ],
})
