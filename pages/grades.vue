<template>
  <v-layout>
    <v-skeleton-loader min-width="35rem" class="mx-auto mt-5" type="article"></v-skeleton-loader>
  </v-layout>
</template>

<script lang="ts">
const title: string = 'Grades'
import Vue from 'vue'
export default Vue.extend({
  head() {
    return {
      titleTemplate: title
    }
  }
})
</script>

<style>
</style>