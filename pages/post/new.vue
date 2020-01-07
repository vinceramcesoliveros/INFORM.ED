<template>
  <v-layout>
    <v-row>
      <PostForm />
    </v-row>
  </v-layout>
</template>

<script>
export default {
  components: {
    PostForm: () => import('@/components/DashboardComponent/PostForm.vue')
  }
}
</script>

<style></style>
