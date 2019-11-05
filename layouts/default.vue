<template>
  <v-app>
    <nav-bar></nav-bar>
    <misc />
    <v-content>
      <nuxt />
    </v-content>

    <side-bar></side-bar>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {
    'side-bar': () => import('@/components/LayoutComponent/SideBar.vue'),
    'nav-bar': () => import('@/components/LayoutComponent/NavBar.vue'),
    misc: () => import('@/components/LayoutComponent/Misc.vue')
  },
  data() {
    return {}
  },
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
