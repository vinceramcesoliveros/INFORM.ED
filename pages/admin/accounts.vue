<template>
  <v-layout column>
    <v-container>
      <v-row>
        <v-col align-self="start" class="text-left">
          <p class="title">Accounts</p>
        </v-col>
        <v-col align-self="end" class="text-right">
          <v-btn outlined :ripple="false">
            <v-icon>mdi-plus</v-icon>Account
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-data-table v-if="getAccounts" :items="getAccounts" :headers="getHeaders"></v-data-table>
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
  data: () => ({
    accounts: [] as Account[],
    headers: [] as Header[]
  }),
  computed: {
    getAccounts() {
      return this.accounts
    },
    getHeaders() {
      return this.headers
    }
  },
  methods: {
    // We will move this to a mixin class if reusability counts.
    // If we find it somehow repititive if it is being used in
    // the admin panel.
    // makeTable<T>(data: T)
    // makeKeyTable(key: T)
    makeAccounts<T extends Account[]>(data: Account[]) {
      return data.map(account => {
        return {
          ...account
        }
      })
    },
    makeKeyAccounts(accounts: any) {
      let key: string[] = []
      for (const account of accounts) {
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
    try {
      const res: AxiosResponse<Account[]> = await this.$axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      this.accounts = this.makeAccounts<Account[]>(res.data)
      this.headers = this.makeKeyAccounts(this.accounts)
    } catch (error) {
      console.log(error)
    }
  }
})
</script>

<style>
</style>