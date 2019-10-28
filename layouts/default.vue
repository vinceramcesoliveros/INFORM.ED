<template>
  <v-app dark>
    <side-bar></side-bar>
    <nav-bar></nav-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import SideBar from '@/components/LayoutComponent/SideBar.vue'
import NavBar from '@/components/LayoutComponent/NavBar.vue'
import { mapMutations, mapGetters } from 'vuex'
export default Vue.extend({
  components: {
    SideBar,
    NavBar
  },
  data() {
    return {}
  }
})
</script>
