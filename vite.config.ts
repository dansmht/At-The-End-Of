import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      '@src': fileURLToPath(new URL('./src', import.meta.url)),
      '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@images': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      '@constants': fileURLToPath(new URL('./src/constants', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
    },
  },
});
