import { computed, reactive } from 'vue'

export interface Settings {
  color: string
  complementary: boolean
  tint: number
  exponent: number
  size: number
}

export function useSettings() {
  const settings = reactive<Settings>({
    color: '#44c0ff',
    complementary: true,
    tint: 10,
    exponent: 3,
    size: 11,
  })

  const defaultSettings = computed<Settings>(() => {
    return {
      color: '#000000',
      complementary: false,
      tint: 0,
      exponent: 0,
      size: settings.size,
    }
  })

  return {
    settings,
    defaultSettings,
  }
}
