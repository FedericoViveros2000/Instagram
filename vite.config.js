import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Instagram/",
/*   server: {
    proxy: {

    }
  }, */
  plugins: [
    vue(),
    VitePWA({ 
      injectRegister: 'script',
      registrerType: 'autoUpdate',
      manifest: {
        "name": "Instagram",  
        "short_name": "Instagram",
        "start_url": ".",
        "display": "standalone",
        "background_color": "#000",
        "description": "Esta es una copia de instagram realizada con tecnologias web",
        "icons": [
          {
            "src": "icons/icon_48x48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "icons/icon_72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "icons/icon_96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "icons/icon_144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "icons/icon_192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          }
        ]
      }, 
      devOptions: {
        enabled: true,
      }
    },

  ),
  ]
}

)
