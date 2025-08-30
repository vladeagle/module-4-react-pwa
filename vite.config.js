import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugin = {
  registerType: "prompt",
  workbox: {
    globPatterns: ["**/*.{js,jsx,css,html,ico,png,svg,webp}"],
    runtimeCaching: [
      {
        urlPattern: ({ url }) => {
          return url.pathname.startsWith("/api");
        },
        handler: "CacheFirst",
        options: {
          cacheName: "api-cache",
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  manifest: {
    name: "Module 4 React PWA",
    short_name: "React PWA",
    description: "Реализация задания по переводу приложения на PWA",
    icons: [
      {
        src: "/icon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icon-72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/icon-96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/icon-144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#ffe54c",
    background_color: "#282c34",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait-primary",
  },
};

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@hooks": "/src/hooks",
      "@contexts": "/src/contexts",
      "@components": "/src/components",
    },
  },
});
