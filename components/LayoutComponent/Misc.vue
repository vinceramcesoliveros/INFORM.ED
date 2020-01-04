<template>
  <v-navigation-drawer v-model="$store.state.UI.rightDrawer" right fixed app width="20rem">
    <v-list v-if="getComments" dense nav>
      <v-list-item class="primary">
        <v-list-item-title class="title white--text text-center">Announcements</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        :ripple="false"
        v-for="(comment) in getComments"
        :key="comment.id"
        active-class=" primary--text"
        three-line
      >
        <v-card class="mt-3 mt-1" outlined>
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="comment.name" />
              <v-list-item-subtitle v-text="comment.email"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text v-text="comment.body"></v-card-text>
          <v-card-actions>
            <v-btn text color="primary" small :ripple="false">See more</v-btn>
          </v-card-actions>
        </v-card>
      </v-list-item>
    </v-list>
    <v-list v-else>
      <v-skeleton-loader min-width="20rem" class="mx-auto mt-5" type="list-item-avatar-three-line"></v-skeleton-loader>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  computed: {
    getDarkMode() {
      return this.$accessor.UI.getDarkMode
    },
    getComments() {
      return this.$accessor.comments.GET_COMMENTS
    }
  },
  async mounted() {
    try {
      await this.$accessor.comments.FETCH_COMMENTS()
    } catch (error) {
      this.$accessor.SET_ERROR(error)
    }
  }
})
</script>
<style>
</style>
