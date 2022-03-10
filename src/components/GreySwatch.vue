<template>
  <v-container>
    <v-row no-gutters>
      <GreyPreview v-for="n in settings.size" :key="n" :color="newColor(settings.size - n)" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Settings } from 'models'
import convert from 'color-convert'
import Vue, { PropType } from 'vue'
import { HSL } from 'color-convert/conversions'
import GreyPreview from '@/components/GreyPreview.vue'

export default Vue.extend({
  components: {
    GreyPreview
  },

  props: {
    settings: Object as PropType<Settings>
  },

  computed: {
    colorHSL (): HSL {
      return convert.hex.hsl(this.settings.color)
    }
  },

  methods: {
    newColor (value: number): string {
      const lightness = 100 / (this.settings.size - 1) * value
      let hue = 0
      let saturation = 0

      if (this.settings) {
        hue = (this.colorHSL[0] + (this.settings.complementary ? 180 : 0)) % 360
        saturation = (!this.settings.tint ? 0 : Math.pow(100 - +lightness, this.settings.exponent) / (Math.pow(100, this.settings.exponent - 1) * 10)) * (this.settings.tint / 10)
      }

      return '#' + convert.hsl.hex([hue, saturation, lightness])
    }
  }
})
</script>
