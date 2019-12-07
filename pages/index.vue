<template>
  <v-layout justify-center align-content-center>
    <div v-if="getPosts" style="width:100%">
      <v-col v-for="(post,index) in getPosts" :key="post.id">
        <v-card class="mt-3 mt-1" outlined>
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="post.title" />
            </v-list-item-content>
          </v-list-item>
          <v-card-text v-text="post.body"></v-card-text>
          <v-card-actions>
            <v-btn text color="primary" small :ripple="false">See more</v-btn>
          </v-card-actions>
        </v-card>

        <div v-if="index === getPosts.length -1" class="text-center">
          <v-btn text ref="loadButton" :ripple="false" color="primary">Load more</v-btn>
        </div>
      </v-col>
    </div>

    <div v-else-if="getError">
      <v-col>
        <p class="title">{{getError}}</p>
      </v-col>
    </div>
    <v-skeleton-loader v-else min-width="90%" class="mx-auto mt-5" type="article"></v-skeleton-loader>

    <v-btn class="text-xs-center" rounded bottom color="primary" depressed fixed>
      <v-icon class="mr-3">mdi-pencil-plus</v-icon>Post
    </v-btn>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
const title: string = 'Dashboard'
export default Vue.extend({
  async fetch({ app: { $accessor } }) {
    try {
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
      titleTemplate: 'Dashboard'
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
  components: {},
  async mounted() {
    this.$accessor.UI.updateTitle({ title })
  }
})
</script>
