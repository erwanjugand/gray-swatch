<template>
  <v-container>
    <v-row
      no-gutters
      class="overflow-hidden elevation-2 rounded"
    >
      <GreyPreview
        v-for="n in settings.size"
        :key="n"
        :color="newColor(settings.size - n)"
      />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import GreyPreview from '@/components/GreyPreview.vue'
import { Settings } from '@/types/global'
import convert from 'color-convert'
import { HSL } from 'color-convert/conversions';
import { computed } from 'vue'

interface Props {
  settings: Settings
}

const props = defineProps<Props>()
const colorHSL = computed<HSL>(() => {
  return convert.hex.hsl(props.settings.color)
})

const newColor = (value: number): string => {
  const lightness = 100 / (props.settings.size - 1) * value
  const hue = (colorHSL.value[0] + (props.settings.complementary ? 180 : 0)) % 360
  const saturation = (!props.settings.tint ? 0 : Math.pow(100 - +lightness, props.settings.exponent) / (Math.pow(100, props.settings.exponent - 1) * 10)) * (props.settings.tint / 10)

  return '#' + convert.hsl.hex([hue, saturation, lightness])
}


</script>
