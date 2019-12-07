<template>
  <v-layout align-center justify-center>
    <v-row>
      <Images />
      <v-col xl="6" lg="6" sm="0" md="12" xs="12" align-self="start">
        <v-card outlined max-height="600" min-width="100">
          <v-card-title class="title">INFORM.ED</v-card-title>
          <v-card-subtitle class="subtitle">Information Education Platform</v-card-subtitle>
          <v-card-text>
            <login-form />
          </v-card-text>
          <v-card-actions>
            <nuxt-link to="/forgot-password">Forgot Password?</nuxt-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {
    Images: () => import('@/components/LoginComponent/Images.vue'),
    'login-form': () => import('@/components/LoginComponent/LoginForm.vue')
  },

  head() {
    return {
      title: 'Login'
    }
  },
  layout: 'login',
  computed: {
    isMobile() {
      return this.$accessor.UI.width < 1260
    }
  }
})
</script>
<style>
</style>
