<script setup lang="ts">
import { ref, watch } from 'vue'
import { useDisplay } from 'vuetify'
import GreySettings from '@/components/GreySettings.vue'
import GreySwatch from '@/components/GreySwatch.vue'
import { useSettings } from '@/composables/useSettings'

const { settings, defaultSettings } = useSettings()

// Drawer
const { mobile } = useDisplay()
const drawer = ref(!mobile.value)

watch(mobile, () => {
  drawer.value = true
})
</script>

<template>
  <v-app>
    <GreySettings v-model="drawer" v-model:settings="settings" />
    <v-app-bar v-if="mobile" collapse>
      <template #prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
      </template>
    </v-app-bar>
    <v-main class="d-flex flex-column justify-center">
      <GreySwatch :settings="defaultSettings" />
      <GreySwatch :settings="settings" />
    </v-main>
  </v-app>
</template>
