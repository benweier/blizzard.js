import { defineConfig } from 'vite-plus'

export default defineConfig({
  pack: {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
  },
  test: {
    setupFiles: ['./test/setup.ts'],
  },
})
