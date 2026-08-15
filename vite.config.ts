import { defineConfig } from 'vite-plus'
import pkg from './package.json' with { type: 'json' }

export default defineConfig({
  define: {
    __VERSION__: JSON.stringify(pkg.version),
  },
  pack: {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    define: {
      __VERSION__: JSON.stringify(pkg.version),
    },
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
