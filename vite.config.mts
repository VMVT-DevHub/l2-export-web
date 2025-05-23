import { default as react } from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import { manifestForPlugIn } from './manifest';

export default () => {
  const env = loadEnv('all', process.cwd());

  return defineConfig({
    plugins: [react()],
	base: '/',
    server: {
      proxy: {
        '/api': {
          target: env.VITE_PROXY_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    assetsInclude: ['**/*.png'],
    define: {
      // Some libraries use the global object, even though it doesn't exist in the browser.
      // Alternatively, we could add `<script>window.global = window;</script>` to index.html.
      // https://github.com/vitejs/vite/discussions/5912
      global: {},
    },
  });
};
