<template>
  <div>
    {{ settings }}
  </div>
</template>

<script lang="ts">
import { Settings } from 'models'
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    settings: Object as PropType<Settings>
  }
})
</script>
