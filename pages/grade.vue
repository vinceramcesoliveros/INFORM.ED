<template>
<v-layout>
  Grade
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