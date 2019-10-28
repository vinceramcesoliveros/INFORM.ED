<template>
  <v-layout row></v-layout>
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
  created() {
    this.$store.commit('UI/updateTitle', { title: title })
  }
})
</script>
