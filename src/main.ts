import { createApp } from 'vue'
// tailwindcss必须放在最前面, 否则会导致element按钮样式出错, 详见https://github.com/element-plus/element-plus/issues/5693
import './index.css'
import App from './App.vue'

createApp(App).mount('#app')