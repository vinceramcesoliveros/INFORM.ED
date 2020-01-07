<template>
  <v-layout justify-center align-content-center>
    <PostComponent :posts="getPosts" v-if="getPosts" />
    <div v-else-if="getError">
      <v-col>
        <p class="title">{{getError}}</p>
      </v-col>
    </div>
    <v-skeleton-loader v-else-if="!getPosts" min-width="90%" class="mx-auto mt-5" type="article"></v-skeleton-loader>
    <PostButton />
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'

const title: string = 'Dashboard'
export default Vue.extend({
  async fetch({ app: { $accessor } }) {
    try {
      if (process.client) {
        if (!navigator.onLine) {
          throw new Error('No Internet Connection')
        }
      }
      if (!$accessor.posts.GET_POSTS) {
        await $accessor.posts.FETCH_POSTS()
      }
    } catch (error) {
      $accessor.SET_ERROR(error.message)
      console.log(error)
    }
  },
  head() {
    return {
      titleTemplate: title
    }
  },
  computed: {
    getPosts() {
      return this.$accessor.posts.GET_POSTS
    },
    getError() {
      return this.$accessor.GET_ERRORS
    }
  },
  async mounted() {
    this.$accessor.UI.updateTitle({ title })
  },
  components: {
    PostComponent: () =>
      import('@/components/DashboardComponent/PostComponent.vue'),
    PostButton: () => import('@/components/DashboardComponent/PostButton.vue')
  }
})
</script>
