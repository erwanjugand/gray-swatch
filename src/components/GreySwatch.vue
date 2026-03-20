<script setup lang="ts">
import GreyPreview from '@/components/GreyPreview.vue'
import { useColor } from '@/composables/useColor'
import type { Settings } from '@/composables/useSettings'

defineProps<{ settings: Settings }>()
</script>

<template>
  <v-container>
    <v-row :gap="0" class="overflow-hidden elevation-2 rounded">
      <GreyPreview v-for="n in settings.size" :key="n" :color="useColor(settings, n)" />
    </v-row>
  </v-container>
</template>
