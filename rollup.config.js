import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import babel from 'rollup-plugin-babel';
import alias from '@rollup/plugin-alias';
import { dts } from 'rollup-plugin-dts';
// import { visualizer } from 'rollup-plugin-visualizer';

export default [
  {
    input: 'src/index.ts', // 入口文件
    output: [
      {
        file: 'out/crane-tools.esm.js', // ES模块格式的输出文件
        format: 'es',
        strict: true,
        entryFileNames: '[name].mjs',
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
      typescript({ removeComments: true }), // 使用TypeScript插件
      terser(), // 压缩输出
      babel({
        exclude: ['node_modules/**'],
      }),
      alias({
        entries: [
          { find: '@lib', replacement: './src/lib' }, // 将 '@utils' 解析到 'src/utils' 目录
        ],
      }),
      // visualizer({ filename: './bundle-analysis.html', open: true })
    ],
    treeshake: true, // 确保树摇启用
    external: ['radash', 'ulid', 'date-fns'],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'out/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
];
