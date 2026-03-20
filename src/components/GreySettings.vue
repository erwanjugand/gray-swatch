<script setup lang="ts">
import { useLocalTheme } from '@/composables/useLocalTheme'
import type { Settings } from '@/composables/useSettings'

const drawer = defineModel<boolean>({ required: true })
const form = defineModel<Settings>('settings', { required: true })
const { localTheme } = useLocalTheme()
</script>

<template>
  <v-navigation-drawer v-model="drawer" app :width="320">
    <v-form>
      <v-container>
        <v-row>
          <v-col :cols="12">
            <v-color-picker v-model="form.color" :elevation="0" :width="288" />
          </v-col>

          <v-col :cols="12">
            <p class="text-body-medium ma-2">Use complementary color</p>
            <div class="px-2">
              <v-switch v-model="form.complementary" density="compact" color="primary" hide-details />
            </div>
          </v-col>

          <v-col :cols="12">
            <p class="text-body-medium ma-2">Hue enhancement</p>
            <v-slider v-model="form.tint" :min="0" :max="100" :step="1" thumb-label color="primary" hide-details />
          </v-col>

          <v-col :cols="12">
            <p class="text-body-medium ma-2">Exponent</p>
            <v-slider v-model="form.exponent" :min="0" :max="10" :step="1" thumb-label color="primary" hide-details />
          </v-col>

          <v-col :cols="12">
            <p class="text-body-medium ma-2">Number of grays</p>
            <v-slider v-model="form.size" :min="3" :max="20" :step="1" thumb-label color="primary" hide-details />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <template #append>
      <v-form class="d-flex justify-center align-center">
        <v-switch
          v-model="localTheme"
          inset
          prepend-icon="mdi-weather-night"
          append-icon="mdi-white-balance-sunny"
          :indeterminate="localTheme === 'system'"
          true-value="light"
          false-value="dark"
          hide-details
          color="primary"
        />
      </v-form>
    </template>
  </v-navigation-drawer>
</template>
