<template>
  <v-layout align-center justify-center>
    <v-row>
      <v-col xl="6" lg="6" sm="12" md="12" xs="12" class="d-none d-lg-flex d-xl-none">
        <v-img :src="require('@/assets/login.svg')" max-height="350" aspect-ratio="1" contain></v-img>
      </v-col>
      <v-col xl="6" lg="6" sm="0" md="0" xs="12" align-self="start">
        <v-card outlined max-height="600" max-width="400">
          <v-card-title class="title">INFORM.ED</v-card-title>
          <v-card-subtitle class="subtitle">Information Education Platform</v-card-subtitle>
          <v-card-text>
            <v-form @submit.prevent="login" ref="formLogin">
              <v-text-field
                id="login-form"
                label="Login"
                hint="Your ID number from the unversity you're currently enrolled"
                name="login"
                prepend-icon="mdi-account"
                type="text"
                required
              />

              <v-text-field
                id="password-form"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                required
              />

              <v-btn color="primary" :ripple="false" class="elevation-0" type="submit" block>Login</v-btn>
            </v-form>
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
interface User {
  name: string | null
  password: string | null
}
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      user: {
        name: null,
        password: null
      } as User
    }
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
  },
  methods: {
    login(e: Event) {
      console.log(e.target)
      console.log(this.$refs.formLogin)
    }
  }
})
</script>
<style>
</style>