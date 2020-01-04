<template>
  <v-form @submit.prevent="login" v-model="valid" ref="formLogin" lazy-validation>
    <v-text-field
      id="login-form"
      v-model="user.name"
      label="Login"
      hint="Your username or school ID"
      name="login"
      :rules="[v => !!v||'Account must be provided']"
      prepend-icon="mdi-account"
      type="text"
      :placeholder="getDate"
      required
    />

    <v-text-field
      v-model="user.password"
      :rules="[v => !!v || 'Input password' ]"
      id="password-form"
      label="Password"
      name="password"
      prepend-icon="mdi-lock"
      type="password"
      required
    />

    <v-btn color="primary" :ripple="false" depressed type="submit" block class="mb-2">
      <div v-if="loading" class="text-center">
        <v-progress-circular :size="20" color="white" indeterminate></v-progress-circular>
      </div>
      <div v-else>Login</div>
    </v-btn>
    <v-btn class="grey darken-2 white--text mb-2" @click="$router.push('/')" block :ripple="false">
      <v-icon class="mr-3">mdi-github-circle</v-icon>Sign in with GitHub
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import { User } from 'interfaces/Users'
export default Vue.extend({
  data() {
    return {
      valid: true,
      loading: false,
      user: {
        name: null,
        password: null
      } as User
    }
  },
  computed: {
    getDate() {
      const date = new Date()
      return `Example: ${date.getFullYear()}${date.getMonth()}${date.getDate()} or pikachu123`
    }
  },
  methods: {
    login(e: Event) {
      //@ts-ignore
      if (this.$refs['formLogin'].validate()) {
        this.loading = true
        setTimeout(() => {
          this.$router.push('/')
          this.loading = false
        }, 3000)
      }
    }
  }
})
</script>
<style>
</style>
