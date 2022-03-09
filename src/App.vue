<template>
  <v-app>
    <v-main>
      <GreySettings @change="onChangeSettings"/>
      <GreySwatch/>
      <GreySwatch :settings="settings"/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import type { Settings } from 'models';
import Vue from 'vue';
import GreySettings from './components/GreySettings.vue';
import GreySwatch from './components/GreySwatch.vue';

export default Vue.extend({
  name: 'App',

  components: {
    GreySettings,
    GreySwatch
  },

  data: () => ({
    settings: null as Settings | null
  }),

  methods: {
    onChangeSettings (settings: Settings) {
      this.settings = settings
    }
  }
});
</script>
