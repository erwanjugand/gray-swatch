import { useLocalStorage } from '@vueuse/core'
import { watch } from 'vue'
import { useTheme } from 'vuetify'

export function useLocalTheme() {
  const { change } = useTheme()
  const localTheme = useLocalStorage<'light' | 'dark' | 'system'>('vuetify-theme', 'system')
  watch(localTheme, change)

  return { localTheme }
}
