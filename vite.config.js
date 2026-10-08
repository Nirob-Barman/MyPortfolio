import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { validateEnv } from './vite.env-check';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  validateEnv(mode);
  return {
    plugins: [react()],
  };
})
