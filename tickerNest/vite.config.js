/* eslint-env node */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/TickerNest/tree/main/tickerNest",
  plugins: [react()],
});
