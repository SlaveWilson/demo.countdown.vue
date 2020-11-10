import { createApp } from 'vue'
import App from './App.vue'
import "./assets/styles/index.scss"

const app = createApp(App)

app.config.performance = true

app.mount('#app')
