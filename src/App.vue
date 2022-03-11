<template>
  <v-app>
    <v-main class="align-center">
      <GreySettings @change="onChangeSettings" />
      <GreySwatch :settings="defaultSettings" />
      <GreySwatch :settings="settings || defaultSettings" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import type { Settings } from 'models'
import Vue from 'vue'
import GreySettings from './components/GreySettings.vue'
import GreySwatch from './components/GreySwatch.vue'

export default Vue.extend({
  name: 'App',

  components: {
    GreySettings,
    GreySwatch
  },

  data () {
    return {
      settings: null as Settings | null
    }
  },

  mounted() {
    if (this.isDarkTheme === null) {
      const defaultDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      localStorage.setItem('darkTheme', (+defaultDarkTheme).toString())
      this.$vuetify.theme.dark = defaultDarkTheme
    } else {
      this.$vuetify.theme.dark = this.isDarkTheme
    }
  },

  computed: {
    isDarkTheme (): boolean | null {
      let localValue = localStorage.getItem('darkTheme')
      return localValue === null ? localValue : !!+localValue
    },

    defaultSettings (): Settings {
      return {
        color: '#000000',
        complementary: false,
        tint: 0,
        exponent: 0,
        size: this.settings?.size || 11
      }
    }
  },

  methods: {
    onChangeSettings (settings: Settings) {
      this.settings = settings
    }
  }
})
</script>
