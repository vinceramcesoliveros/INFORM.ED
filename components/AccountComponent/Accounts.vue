<template>
  <div>
    <v-col v-for="account in accounts" :key="account.id">
      <v-card>
        <v-card-title class="title text-center">{{account.firstname}}</v-card-title>
      </v-card>
    </v-col>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    accounts: []
  }),
  computed: {
    getAccounts() {
      return this.accounts
    }
  },
  async mounted() {
    const { data } = await this.$axios.get('http://localhost:1337/accounts')
    this.accounts = data
  }
})
</script>
<style>
</style>