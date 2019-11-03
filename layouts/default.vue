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
import Misc from '@/components/LayoutComponent/Misc.vue'
import SideBar from '@/components/LayoutComponent/SideBar.vue'
import NavBar from '@/components/LayoutComponent/NavBar.vue'
export default Vue.extend({
  components: {
    'side-bar': () => import('@/components/LayoutComponent/SideBar.vue'),
    'nav-bar': () => import('@/components/LayoutComponent/NavBar.vue'),
    misc: () => import('@/components/LayoutComponent/Misc.vue')
  },
  data() {
    return {}
  },
  created() {
    if (process.client) {
      window.addEventListener('resize', () => {
        this.$accessor.UI.updateWidth(window.innerWidth)
      })
      if (window.innerWidth < 1260) {
        this.$accessor.UI.mobileView()
      } else {
        this.$accessor.UI.desktopView()
      }
      console.log('CLIENT')
    } else {
      console.log('SERVER')
    }
  }
})
</script>
