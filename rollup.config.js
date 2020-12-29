import resolve from '@rollup/plugin-node-resolve'
import ts from '@rollup/plugin-typescript'
import typescript from 'typescript'

export default [
  {
    input: {
      index: 'src/index.ts',
      core: 'src/core/index.ts',
      d3: 'src/d3/index.ts',
      sc2: 'src/sc2/index.ts',
      wow: 'src/wow/index.ts',
    },
    output: {
      dir: './dist',
      format: 'cjs',
      preserveModules: true,
    },
    external: ['querystring', 'axios'],
    plugins: [
      resolve(),
      ts({
        typescript,
      }),
    ],
  },
]
