<template>
  <v-navigation-drawer app permanent :width="320">
    <v-form>
      <v-container>
        <v-row fluid>
          <v-col cols="12">
            <v-color-picker v-model="form.color" dot-size="25" swatches-max-height="200" @input="onChangeSettings" />
          </v-col>

          <v-col cols="12">
            <v-subheader class="pl-0">
              Use complementary color
            </v-subheader>
            <v-switch v-model="form.complementary" @change="onChangeSettings" />
          </v-col>

          <v-col cols="12">
            <v-subheader class="pl-0">
              Hue enhancement
            </v-subheader>
            <v-slider v-model="form.tint" min="0" max="100" thumb-label @input="onChangeSettings" />
          </v-col>

          <v-col cols="12">
            <v-subheader class="pl-0">
              Exponent
            </v-subheader>
            <v-slider v-model="form.exponent" min="0" max="10" thumb-label @input="onChangeSettings" />
          </v-col>

          <v-col cols="12">
            <v-subheader class="pl-0">
              Number of grays
            </v-subheader>
            <v-slider v-model="form.size" min="3" max="20" thumb-label @input="onChangeSettings" />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-form class="d-flex justify-center">
      <v-icon aria-hidden="false">
        mdi-weather-night
      </v-icon>
      <v-switch v-model="lightMenu" @change="onChangeTheme" />
      <v-icon aria-hidden="false">
        mdi-white-balance-sunny
      </v-icon>
    </v-form>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import type { Settings } from 'models'
export default Vue.extend({
  data () {
    return {
      form: {
        color: '#44c0ff',
        complementary: true,
        tint: 10,
        exponent: 3,
        size: 11
      } as Settings,
      lightMenu: true
    }
  },

  methods: {
    onChangeSettings () {
      this.$emit('change', this.form)
    },

    onChangeTheme (value: boolean) {
      this.$vuetify.theme.dark = !value
    }
  }
})
</script>
