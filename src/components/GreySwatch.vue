<template>
  <v-container>
    <v-row no-gutters>
      <GreyPreview v-for="n in 10" :key="n" :color="color" />
    </v-row>
    {{ colorHSL }}
  </v-container>
</template>

<script lang="ts">
import { Settings } from 'models'
import convert from 'color-convert'
import Vue, { PropType } from 'vue'
import { HSL } from 'color-convert/conversions'
import GreyPreview from '@/components/GreyPreview.vue';

export default Vue.extend({
  props: {
    settings: Object as PropType<Settings | null>
  },

  components: {
    GreyPreview,
  },

  computed: {
    color (): string {
      return this.settings?.color || '#000000'
    },

    colorHSL (): HSL {
      return convert.hex.hsl(this.color)
    }
  }
})
</script>
