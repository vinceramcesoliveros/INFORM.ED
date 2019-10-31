<template>
  <v-layout justify-center align-content-center>
    <div v-if="getPosts" style="width:100%">
      <v-col v-for="post in getPosts" :key="post.id">
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
      </v-col>
    </div>

    <div v-else-if="getError">
      <v-col>
        <p class="title">{{getError}}</p>
      </v-col>
    </div>
    <v-skeleton-loader v-else min-width="90%" class="mx-auto mt-5" type="article"></v-skeleton-loader>
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
    },
    getError() {
      return this.$accessor.GET_ERRORS
    }
  },
  components: {},
  async beforeCreate() {
    this.$accessor.UI.updateTitle({ title })
    try {
      await this.$accessor.posts.FETCH_POSTS()
    } catch (error) {
      this.$accessor.SET_ERROR(error.message)
      console.log(error)
    }
  }
})
</script>
