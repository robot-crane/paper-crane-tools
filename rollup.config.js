import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import babel from 'rollup-plugin-babel'
// import { visualizer } from 'rollup-plugin-visualizer';

export default {
  input: 'src/index.ts', // 入口文件
  output: [
    {
      file: 'out/crane-tools.esm.js', // ES模块格式的输出文件
      format: 'es',
      strict: true,
      entryFileNames: '[name].mjs',
      sourcemap: true
    },
  ],
  plugins: [
    nodeResolve(),
    typescript(), // 使用TypeScript插件
    terser(), // 压缩输出
    babel({
      exclude: 'node_modules/**'
    }),
    // visualizer({ filename: './bundle-analysis.html', open: true })
  ],
  treeshake: true, // 确保树摇启用
  external: ['radash', 'ulid', 'date-fns']
};
