<template>
  <v-app>
    <v-content class="grey darken-3">
      <v-container fill-height>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
  mounted() {
    if (process.client) {
      window.addEventListener('resize', () => {
        this.$accessor.UI.updateWidth(window.innerWidth)
      })
      if (window.innerWidth < 1260) {
        this.$accessor.UI.mobileView()
      } else {
        this.$accessor.UI.desktopView()
      }
    } 
  },
  beforeDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', () => {
        this.$accessor.UI.updateWidth(window.innerWidth)
      })
    }
  }
})
</script>