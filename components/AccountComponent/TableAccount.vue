<template>
  <div>
    <v-row v-if="accounts.length" justify="center">
      <v-card style="width:95%">
        <v-text-field label="Search" id="searchId" style="width:75%" class="ml-5" v-model="search"></v-text-field>
        <v-card-title></v-card-title>
        <!-- <v-data-table :items="accounts" :search="search" :headers="headers" filterable></v-data-table> -->
        <v-row class="mx-2">
          <v-col cols="4" v-for="account in accounts" :key="account._id">
            <v-card class="text-center" outlined>
              <v-avatar color="primary"></v-avatar>
              <v-card-title v-html="account.firstName"></v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-row>

    <v-skeleton-loader v-else min-width="100%" class="mx-auto mt-5" type="table"></v-skeleton-loader>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    accounts: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      search: ''
    }
  }
})
</script>

<style>
</style>
