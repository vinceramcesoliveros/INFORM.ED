<template>
  <v-layout>
    <v-col>
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
        <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12"
            lg="12"
            xl="12"
            v-for="comment in userComments"
            :key="comment.id"
          >
            <v-card flat>
              <v-list-item>
                <v-list-item-avatar color="grey"></v-list-item-avatar>
                <v-list-item-title v-text="comment.name"></v-list-item-title>
              </v-list-item>
              <v-card-text v-text="comment.body"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-layout>
</template>

<script>
export default {
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
  }
}
</script>

<style>
</style>
