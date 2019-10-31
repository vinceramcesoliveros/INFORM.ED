<template>
  <v-layout>
    <v-skeleton-loader min-width="90%" class="mx-auto mt-5" type="article"></v-skeleton-loader>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
const title: string = 'Dashboard'
export default Vue.extend({
  head() {
    return {
      titleTemplate: 'Dashboard'
    }
  },
  computed: {
    getPosts() {
      return this.$accessor.posts.GET_POSTS
    }
  },
  components: {},
  async beforeCreate() {
    this.$accessor.UI.updateTitle({ title })
    await this.$accessor.posts.FETCH_POSTS()
  }
})
</script>
