<script setup lang="ts">
import GreyPreview from '@/components/GreyPreview.vue'
import type { Settings } from '@/types/global'
import { useColor } from '@/composables/useColor'

defineProps<{
  settings: Settings
}>()
</script>

<template>
  <v-container>
    <v-row no-gutters class="overflow-hidden elevation-2 rounded">
      <GreyPreview v-for="n in settings.size" :key="n" :color="useColor(settings, n)" />
    </v-row>
  </v-container>
</template>
