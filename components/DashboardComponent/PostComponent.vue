<template>
  <div style="width:100%">
    <v-col v-for="(post, index) in posts" :key="post.id">
      <nuxt-link :to="`post/${post.id}`" style="text-decoration:none"
        ><v-card class="mt-3 mt-1" outlined :ripple="false">
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="post.title" />
            </v-list-item-content>
          </v-list-item>
          <v-card-text v-text="post.body"></v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="primary"
              small
              :ripple="false"
              @click="$router.push(`/post/${post.id}`)"
              >See more</v-btn
            >
          </v-card-actions>
        </v-card></nuxt-link
      >

      <div v-if="index === posts.length - 1" class="text-center">
        <v-btn text ref="loadButton" :ripple="false" color="primary"
          >Load more</v-btn
        >
      </div>
    </v-col>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
