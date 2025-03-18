import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { addJsonToSession, getJsonFromSession } from '@/utils/globalMethods'

const app = createApp(App)
app.config.globalProperties.$jsontosession = addJsonToSession
app.config.globalProperties.$jsonfromsession = getJsonFromSession
app.use(router)
app.mount('#app')
import 'bootstrap/dist/js/bootstrap'
