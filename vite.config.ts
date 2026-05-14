import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');

  const isGithubPages = env.VITE_DEPLOY_TARGET === 'github';

  return {
    base: isGithubPages ? '/portfolio/' : '/',

    plugins: [react(), tailwindcss()],
    server: {
      allowedHosts: ['.ngrok-free.app',
        '.tiny.site',
        'surajdombale.github.io'
      ]
    },
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
