<template>
  <v-app >
    <nuxt />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex'
export default Vue.extend({
  methods: {
    updateDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  },
  computed: {
    getDarkMode(): boolean {
      return this.$vuetify.theme.dark
    }
  }
})
</script>

<style>
</style>