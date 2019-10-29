<template>
  <v-app>
    <side-bar></side-bar>
    <nav-bar></nav-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <misc />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Misc from '@/components/LayoutComponent/Misc.vue'
import SideBar from '@/components/LayoutComponent/SideBar.vue'
import NavBar from '@/components/LayoutComponent/NavBar.vue'
export default Vue.extend({
  components: {
    SideBar,
    NavBar,
    Misc
  },
  data() {
    return {}
  },
  async beforeCreate() {
    await this.$accessor.comments.FETCH_COMMENTS()
  },
  created() {}
})
</script>
