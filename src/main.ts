import App from './App.vue'
import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import 'unfonts.css'

const app = createApp(App)
app.use(vuetify)
app.mount('#app')
