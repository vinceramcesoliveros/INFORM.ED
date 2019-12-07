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
    <account-table
      :accounts="getAccounts"
      :headers="getHeaders"
    ></account-table>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { AxiosResponse } from 'axios'
import { IAccount } from 'interfaces/Account'
import { accountHeader } from '@/usecases/accounts'
type Header = {
  text: string
  value: string
}
export default Vue.extend({
  components: {
    'account-add-dialog': () =>
      import('@/components/AccountComponent/AddAccount.vue'),
    'account-table': () =>
      import('@/components/AccountComponent/TableAccount.vue')
  },
  data: () => ({
    search: '',
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
      const item: Header[] = accountHeader(key, accounts)
      return item
    }
  },

  async mounted() {
    if (!this.$accessor.accounts.GET_ACCOUNTS.length) {
      await this.$accessor.accounts.FETCH_ACCOUNTS()
    }
    this.headers = this.makeKeyAccounts(this.$accessor.accounts.GET_ACCOUNTS)
  }
})
</script>

<style></style>
