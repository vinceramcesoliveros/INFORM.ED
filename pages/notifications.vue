<template>
  <v-container>
    <v-row row justify-space-between>
      <v-col md="6" lg="10" sm="6">Notifications</v-col>
      <v-spacer></v-spacer>
      <v-col class="mx-auto">
        <v-btn small outlined :ripple="false">Clear All</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
<style>
</style>