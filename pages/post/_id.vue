<template>
  <v-layout
    ><v-skeleton-loader
      v-if="!post.title"
      min-width="90%"
      class="mx-auto mt-5"
      type="article"
    ></v-skeleton-loader>
    <v-col v-else>
      <v-card class="mt-3 mt-1" outlined>
        <v-list-item>
          <v-list-item-avatar color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="post.title" />
          </v-list-item-content>
        </v-list-item>
        <v-card-text v-text="post.body"></v-card-text>
        <v-row class="px-5">
          <v-col cols="1" sm="1" class="hidden-md-and-down">
            <v-avatar color="grey" size="2.5rem"></v-avatar>
          </v-col>
          <v-col cols="10" sm="10">
            <v-textarea
              v-model="comment"
              autofocus
              rows="1"
              auto-grow
              placeholder="Comment..."
              flat
              outlined
              dense
              style="border-radius:24px"
            ></v-textarea>
          </v-col>
          <v-col cols="1" sm="1">
            <v-btn icon large>
              <v-icon @click="addComment">mdi-comment</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <CommentLists :comments="userComments" />
      </v-card>
    </v-col>
  </v-layout>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: `%s - ${this.post.title}`
    }
  },
  data() {
    return {
      userComments: [],
      comment: '',
      post: {}
    }
  },
  methods: {
    addComment() {
      this.userComments.unshift({
        name: 'Guest',
        body: this.comment
      })
      this.comment = ''
    }
  },
  async mounted() {
    if (!this.post.title) {
      const fetchPost = await this.$axios.get(
        `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
      )
      this.post = fetchPost.data
    }
    if (!this.userComments.body) {
      const fetchComment = await this.$axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${this.$route.params.id}`
      )
      this.userComments = fetchComment.data
    }
  },
  components: {
    CommentLists: () =>
      import('@/components/DashboardComponent/CommentComponent/CommentList.vue')
  }
}
</script>

<style></style>
