/** @format */

import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        noDiscovery: true
    },
    plugins: [
        vue(),
        Components({
            resolvers: [PrimeVueResolver()]
        })
    ],
    server: {
        host: '185.96.163.101',
        port: 3005,
        proxy: {
            '/api': {
                //target: 'http://localhost:8000',
                target: 'https://my-json-server.typicode.com/penangteams/jsonserver',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
