<template>
  <v-app>
    <v-main class="d-flex flex-column justify-center">
      <GreySettings
        v-model="settings"
        @update:modelValue="onChangeSettings"
      />
      <GreySwatch :settings="defaultSettings" />
      <GreySwatch :settings="settings || defaultSettings" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import GreySettings from './components/GreySettings.vue'
import GreySwatch from './components/GreySwatch.vue'
import { Settings } from './types/global'
import { useLocalTheme } from './composables/useLocalTheme'

useLocalTheme().getLocalTheme()

// Settings
const settings = ref<Settings>({
  color: '#44c0ff',
  complementary: true,
  tint: 10,
  exponent: 3,
  size: 11
})

const defaultSettings = computed<Settings>(() => {
  return {
    color: '#000000',
    complementary: false,
    tint: 0,
    exponent: 0,
    size: settings.value.size
  }
})

const onChangeSettings = (newSettings: Settings) => {
  settings.value = newSettings
}
</script>
