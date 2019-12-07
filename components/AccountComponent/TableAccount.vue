<template>
  <div>
    <v-row v-if="accounts.length" justify="center">
      <v-card style="width:95%">
        <v-text-field label="Search" id="searchId" style="width:75%" class="ml-5" v-model="search"></v-text-field>
        <v-card-title></v-card-title>
        <v-data-table :items="accounts" :search="search" :headers="headers" filterable></v-data-table>
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
