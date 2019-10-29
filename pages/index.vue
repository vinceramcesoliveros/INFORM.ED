<template>
  <v-layout row>
    Hello World
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
const title: string = 'Dashboard'
export default Vue.extend({
  head() {
    return {
      titleTemplate: 'Dashboard'
    }
  },
  components: {},
  beforeCreate() {
    this.$store.commit('UI/updateTitle', { title: title })
  }
})
</script>
