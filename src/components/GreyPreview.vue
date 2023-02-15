<template>
  <v-col class="text-truncate text-center">
    <v-tooltip
      v-model="showTooltip"
      location="top"
      text="Copy to clipboard"
    >
      <template #activator="{ activatorProps }">
        <v-responsive
          v-ripple
          v-bind="activatorProps"
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

const props = defineProps<Props>()

const showTooltip = ref<boolean>(false)
const style = computed<StyleValue>(() => ({
  backgroundColor: props.color
}))

const onClick = () => {
  showTooltip.value = true
  setTimeout(() => {
    showTooltip.value = false
  }, 2000)
  navigator.clipboard.writeText(props.color)
}
</script>
