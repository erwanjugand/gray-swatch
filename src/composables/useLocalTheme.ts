import { computed } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs'

export function useLocalTheme() {
  const theme = useTheme()

  const setLocalTheme = (newTheme: string) => {
    localStorage.setItem('vuetify-theme', newTheme)
    theme.global.name.value = newTheme
  }

  const getLocalTheme = () => {
    const localTheme = computed<string | null>(() => {
      return localStorage.getItem('vuetify-theme')
    })

    if (localTheme.value) {
      theme.global.name.value = localTheme.value
    } else {
      const prefertedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      setLocalTheme(prefertedTheme)
    }
  }

  return {
    getLocalTheme,
    setLocalTheme,
  }
}
