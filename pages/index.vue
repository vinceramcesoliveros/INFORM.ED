<template>
  <v-layout justify-center align-content-center>
    <PostComponent :posts="getPosts" v-if="getPosts" />
    <div v-else-if="getError">
      <v-col>
        <p class="title">{{ getError }}</p>
      </v-col>
    </div>
    <v-skeleton-loader v-else-if="!getPosts" min-width="90%" class="mx-auto mt-5" type="article"></v-skeleton-loader>
    <v-btn
      depressed
      fixed
      bottom
      right
      x-large
      :ripple="false"
      class="primary white--text d-sm-flex d-lg-none d-xl-none"
      fab
      icon
      @click="$router.push('/post/new')"
    >
      <v-icon>mdi-pencil-plus</v-icon>
    </v-btn>
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
    },
    getIsMobile() {
      return this.$accessor.UI.width < 1200
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
