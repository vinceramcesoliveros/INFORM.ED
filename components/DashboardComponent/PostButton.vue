<template>
  <v-dialog transition="scroll-y-reverse-transition" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn
        class="text-xs-center d-none d-sm-none d-lg-flex d-xl-flex"
        rounded
        bottom
        color="primary"
        depressed
        fixed
        v-on="on"
      >
        <v-icon class="mr-3">mdi-pencil-plus</v-icon>Post
      </v-btn>
    </template>
    <PostForm @closeDialog="dialog=false" :dialog="dialog"></PostForm>
  </v-dialog>
</template>

<script script="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {
    PostForm: () => import('@/components/DashboardComponent/PostForm.vue')
  },
  data() {
    return {
      dialog: false
    }
  }
})
</script>

<style></style>
