import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import react from "@vitejs/plugin-react-swc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Fidyahku",
        short_name: "Fidyahku",
        start_url: "/",
        description:
          "Lakukan pembayaran fidyah untuk puasa yang terlewat selama ramadhan yang lalu",
        theme_color: "#5DC3B2",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "ss-1.jpg",
            sizes: "1080x1920",
            type: "image/jpg",
            form_factor: "wide",
            label: "Homescreen Fidyahku",
          },
          {
            src: "ss-2.jpg",
            sizes: "1080x1920",
            type: "image/jpg",
            form_factor: "wide",
            label: "Bayar Fidyah Haid",
          },
          {
            src: "ss-3.jpg",
            sizes: "1080x1920",
            type: "image/jpg",
            form_factor: "wide",
            label: "Salurkan Fidyah",
          },
           {
            src: "ss-4.jpg",
            sizes: "1080x1920",
            type: "image/jpg",
            form_factor: "wide",
            label: "Salurkan Fidyah",
          },
          {
            src: "ss-1.jpg",
            sizes: "1080x1920",
            type: "image/jpg",
            form_factor: "narrow",
            label: "Homescreen Fidyahku",
          },
          {
            src: "ss-2.jpg",
            sizes: "1080x1920",
            type: "image/jpg",
            form_factor: "narrow",
            label: "Bayar Fidyah Haid",
          },
          {
            src: "ss-3.jpg",
            sizes: "1080x1920",
            type: "image/jpg",
            form_factor: "narrow",
            label: "Salurkan Fidyah",
          },
           {
            src: "ss-4.jpg",
            sizes: "1080x1920",
            type: "image/jpg",
            form_factor: "narrow",
            label: "Salurkan Fidyah",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@fidyah": path.resolve(__dirname, "src"),
    },
  },
});
