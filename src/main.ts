import App from './App.vue'
import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import 'unfonts.css'

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
const app = createApp(App)
app.use(vuetify)
app.mount('#app')
