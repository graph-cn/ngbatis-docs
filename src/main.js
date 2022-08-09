import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n, { useChinese } from './language'
import router from './router'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { mdSettings } from './md-editor-settings'


const app = createApp(App)

mdSettings(app)

app.use(ElementPlus, {
  locale: useChinese ? zhCn : en,
})

app.use(i18n)
app.use(router)
app.mount('#app')

