import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1976d2',
        },
      },
      dark: {
        colors: {
          primary: '#039be5',
        },
      },
    },
  },
})
