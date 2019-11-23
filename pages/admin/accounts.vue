<template>
  <v-layout column>
    <v-container>
      <v-row>
        <v-col align-self="start" class="text-left">
          <p class="title">Accounts</p>
        </v-col>
        <v-col align-self="end" class="text-right">
          <account-add-dialog />
        </v-col>
      </v-row>
    </v-container>

    <v-row v-if="getAccounts" justify="center">
      <v-card style="width:95%">
        <v-data-table :items="getAccounts" :headers="getHeaders"></v-data-table>
      </v-card>
    </v-row>

    <v-skeleton-loader v-else min-width="100%" class="mx-auto mt-5" type="table"></v-skeleton-loader>
  </v-layout>
</template>


<script lang="ts">
import Vue from 'vue'
import { AxiosResponse } from 'axios'
import { Account } from 'interfaces/Account'
type Header = {
  text: string
  value: string
}
export default Vue.extend({
  components: {
    'account-add-dialog': () =>
      import('@/components/AccountComponent/AddAccount.vue')
  },
  data: () => ({
    headers: [] as Header[]
  }),
  computed: {
    getAccounts() {
      return this.$accessor.accounts.accounts
    },
    getHeaders() {
      return this.headers
    }
  },
  methods: {
    makeKeyAccounts(accounts: any) {
      let key: string[] = []
      for (const account of this.getAccounts) {
        key = Object.keys(account)
      }
      const item: Header[] = key.map((element, index) => {
        const newElement = accounts[index]
        if (typeof newElement[element] !== 'object') {
          return {
            text: element ? element : '',
            value: element ? element : ''
          }
        }
        return {
          text: '',
          value: ''
        }
      })
      return item
    }
  },

  async mounted() {
    await this.$accessor.accounts.FETCH_ACCOUNTS()
    this.headers = this.makeKeyAccounts(this.$accessor.accounts.GET_ACCOUNTS)
  }
})
</script>

<style>
</style>