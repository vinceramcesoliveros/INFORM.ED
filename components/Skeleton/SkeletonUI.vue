<template>
  <v-layout v-if="loading">
    <p>Loading...</p>
  </v-layout>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data:()=>({loading:false}),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
    fail() {}
  }
})
</script>

<style>
</style>