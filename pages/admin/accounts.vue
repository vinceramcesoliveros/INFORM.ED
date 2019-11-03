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
    <v-skeleton-loader v-else min-width="90%" class="mx-auto mt-5" type="table"></v-skeleton-loader>
  </v-layout>
</template>


<script lang="ts">
import Vue from 'vue'
import { AxiosResponse } from 'axios'
type Header = {
  text: string
  value: string
}
interface Account {
  id: number
  accountID: number
  firstname: string
  middlename?: string | ''
  lastname: string
  gender: Gender
  email: string
  img_profile: any
}
enum Gender {
  male,
  female
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
  async mounted() {
    try {
      const res: AxiosResponse<Account[]> = await this.$axios.get(
        'http://localhost:1337/accounts'
      )
      this.accounts = res.data.map(account => {
        return {
          id: account.id,
          accountID: account.accountID,
          firstname: account.firstname,
          middlename: account.middlename,
          lastname: account.lastname,
          gender: account.gender,
          email: account.email,
          img_profile: account.img_profile
        }
      })

      this.accounts.forEach((account, index) => {
        const key = Object.keys(account)
        const item: Header[] = key.map(element => {
          return {
            text: element ? element : '',
            value: element ? element : ''
          }
        })
        this.headers = item
      })
    } catch (error) {
      console.log(error)
    }
  }
})
</script>

<style>
</style>