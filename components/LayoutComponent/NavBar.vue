<template>
  <v-app-bar fixed app>
    <v-app-bar-nav-icon @click.stop="updateDrawer" />

    <v-toolbar-title v-text="getTitle" />
    <v-spacer />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex'
export default Vue.extend({
  methods: {
    ...mapMutations({
      updateDrawer: 'UI/updateDrawer'
    })
  },
  computed: {
    ...mapGetters({
      getTitle: 'UI/getTitle'
    })
  }
})
</script>
<style>
</style>