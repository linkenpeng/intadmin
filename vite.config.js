import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 手动引入
import ElementPlus from 'unplugin-element-plus/vite'
import {resolve} from 'path'

// 自动引入
/*
import Components from 'unplugin-vue-components/vite'
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
import AutoImport from 'unplugin-auto-import/vite'
*/

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, "src")
      },
      {
        find: 'components',
        replacement:resolve(__dirname, "src/components")
      },
      {
        find: 'views',
        replacement:resolve(__dirname, "src/views")
      }
    ]
  },
  plugins: [
    vue(),
    // 手动引入
    ElementPlus()

    // 自动引入
    /*
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
    */
  ],
  base: process.env.NODE_ENV === "production" ? "/intadmin/" : "/",
})
