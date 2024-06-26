import { createApp } from 'vue'
import './style.css'

// 引入element
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
//import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(ElementPlus, {size:'small', zIndex: 3000})
app.use(router)
app.use(store)
app.mount('#app')
