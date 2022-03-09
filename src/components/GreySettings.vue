<template>
  <v-navigation-drawer app permanent :width="320">
    <v-form>
      <v-container>
        <v-row fluid>
          <v-col cols="12">
            <v-color-picker v-model="form.color" @input="onChange" dot-size="25" swatches-max-height="200" />
          </v-col>

          <v-col cols="12">
              <v-subheader class="pl-0">
                Use complementary color
              </v-subheader>
              <v-switch v-model="form.complementary" @input="onChange"></v-switch>
          </v-col>

          <v-col cols="12">
            <v-subheader class="pl-0">
              Hue enhancement
            </v-subheader>
            <v-slider v-model="form.tint" @input="onChange" min="0" max="100" thumb-label>
            </v-slider>
          </v-col>

          <v-col cols="12">
            <v-subheader class="pl-0">
              Exponent
            </v-subheader>
            <v-slider v-model="form.exponent" @input="onChange" min="0" max="10" thumb-label>
            </v-slider>
          </v-col>

        </v-row>
      </v-container>
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
        exponent: 3
      } as Settings
    }
  },

  methods: {
   onChange ()  {
     this.$emit('change', this.form)
   }
  }
})
</script>
