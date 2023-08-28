// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.js'),
      name: 'WshTestTools',
      // the proper extensions will be added
      fileName: 'wsh_test_tools',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})




// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   build: {
//     outDir: 'dist', // 输出目录
//     target: 'es2020',
//   },
//   publicDir:false,
//   lib:{
//     entry: 'src/index.js',
//     name: 'wshTestTools',
//     fileName: 'wsh_test_tools'
//   },
//   rollupOptions: { 
//     // 打包时想要排除的包，减少体积
//     external: ['vue'],
//     output: {
//       // UMD模式下为外部化的依赖提供全局化变量
//       global: {
//         vue: 'Vue'
//       }
//     }
//   }
// })
