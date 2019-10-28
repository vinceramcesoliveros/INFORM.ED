<template>
  <v-layout>
    <v-flex class="text-center">
      <img src="/v.png" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
const title: string = 'Second Dashboard'
import Vue from 'vue'
export default Vue.extend({
  head() {
    return {
      titleTemplate: title
    }
  },
  created() {
    this.$store.commit('UI/updateTitle', { title: title })
  }
})
</script>