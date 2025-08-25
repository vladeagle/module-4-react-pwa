import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@hooks": "/src/hooks",
      "@contexts": "/src/contexts",
      "@components": "/src/components",
    },
  },
});
