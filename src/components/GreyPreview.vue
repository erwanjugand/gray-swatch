<template>
  <v-col class="text-truncate text-center">
    <v-tooltip v-model="showTooltip" top>
      <template v-slot:activator="{}">
        <v-responsive v-ripple :style="style" :aspect-ratio="3/4" @click="onClick"/>
        {{ color }}
      </template>
      <span>Copy to clipboard</span>
    </v-tooltip>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    color: String
  },

  data () {
    return {
      showTooltip: false
    }
  },

  computed: {
    style (): Partial<CSSStyleDeclaration> {
      return {
        backgroundColor: this.color
      }
    }
  },

  methods: {
    onClick () {
      this.showTooltip = true
      setTimeout(() => { this.showTooltip = false }, 2000)
      navigator.clipboard.writeText(this.color)
    }
  }
})
</script>
