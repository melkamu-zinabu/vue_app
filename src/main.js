import { createApp } from 'vue'
import './style.css'
import '@mdi/font/css/materialdesignicons.css'; // Import the Material Design Icons CSS
import App from './App.vue'
import { vuetify } from './plugins/vuetify.js'
import { createVuetify } from 'vuetify'
const app=createApp(App)
app.use(vuetify)
app.mount('#app')
