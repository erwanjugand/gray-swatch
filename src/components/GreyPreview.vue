<template>
  <v-col>
    <v-responsive :style="style" :aspect-ratio="3/4" />
      {{ color }}
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    color: String
  },

  computed: {
    style(): Partial<CSSStyleDeclaration> {
      return {
        backgroundColor: this.color
      }
    }
  }
})
</script>
