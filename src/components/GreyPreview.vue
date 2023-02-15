<template>
  <v-col class="text-truncate text-center">
    <v-tooltip
      v-model="showTooltip"
      location="top"
      text="Copy to clipboard"
    >
      <template #activator="{ props }">
        <v-responsive
          v-ripple
          v-bind="props"
          :style="style"
          :aspect-ratio="3/4"
          @click="onClick"
        />
        {{ color }}
      </template>
    </v-tooltip>
  </v-col>
</template>

<script setup lang="ts">
import { computed, ref, StyleValue } from 'vue'

interface Props {
  color: string
}

const componentProps = defineProps<Props>()

const showTooltip = ref<boolean>(false)
const style = computed<StyleValue>(() => ({
  backgroundColor: componentProps.color
}))

const onClick = () => {
  showTooltip.value = true
  setTimeout(() => {
    showTooltip.value = false
  }, 2000)
  navigator.clipboard.writeText(componentProps.color)
}
</script>
