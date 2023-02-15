<template>
  <v-navigation-drawer
    app
    permanent
    :width="320"
  >
    <v-form>
      <v-container>
        <v-row fluid>
          <v-col :cols="12">
            <v-color-picker
              v-model="form.color"
              :elevation="0"
              :dot-size="25"
              :modes="['rgb', 'hex', 'hsl']"
              :swatches-max-height="200"
            />
          </v-col>

          <v-col :cols="12">
            <p class="text-body-2 pa-2">
              Use complementary color
            </p>
            <div class="px-2">
              <v-switch
                v-model="form.complementary"
                density="compact"
                color="primary"
              />
            </div>
          </v-col>

          <v-col :cols="12">
            <p class="text-body-2 pa-2">
              Hue enhancement
            </p>
            <v-slider
              v-model="form.tint"
              :min="0"
              :max="100"
              :step="1"
              thumb-label
              color="primary"
            />
          </v-col>

          <v-col :cols="12">
            <p class="text-body-2 pa-2">
              Exponent
            </p>
            <v-slider
              v-model="form.exponent"
              :min="0"
              :max="10"
              :step="1"
              thumb-label
              color="primary"
            />
          </v-col>

          <v-col :cols="12">
            <p class="text-body-2 pa-2">
              Number of grays
            </p>
            <v-slider
              v-model="form.size"
              :min="3"
              :max="20"
              :step="1"
              thumb-label
              color="primary"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <template #append>
      <v-form class="d-flex justify-center align-center">
        <v-icon>
          mdi-weather-night
        </v-icon>
        <div class="flex-shrink-1 mx-2">
          <v-switch
            v-model="currentTheme"
            true-value="light"
            false-value="dark"
            hide-details
            color="primary"
            @update:model-value="onChangeTheme"
          />
        </div>
        <v-icon>
          mdi-white-balance-sunny
        </v-icon>
      </v-form>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useLocalTheme } from '@/composables/useLocalTheme'
import { Settings } from '@/types/global'
import { computed, ref } from 'vue'
import { useTheme } from 'vuetify/lib/framework.mjs'

// Form
interface Props {
  modelValue: Settings
}

interface Emit {
  (e: 'update:modelValue', settings: Settings): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emit>()

const form = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})

// Set Theme
const theme = useTheme()
const { setLocalTheme } = useLocalTheme()
const currentTheme = ref(theme.global.name.value)

const onChangeTheme = () => {
  setLocalTheme(currentTheme.value)
}
</script>
