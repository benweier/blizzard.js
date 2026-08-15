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
  lint: {
    ignorePatterns: ['dist/**'],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    overrides: [
      {
        // asserting on spied prototype methods trips unbound-method in every spec
        files: ['test/**'],
        rules: {
          'typescript/unbound-method': 'off',
        },
      },
    ],
  },
  fmt: {
    printWidth: 120,
    semi: false,
    singleQuote: true,
  },
})
