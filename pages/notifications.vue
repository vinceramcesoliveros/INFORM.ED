<template>
  <v-container>
    <v-row>
      <v-col align-self="start" class="text-left">Notifications</v-col>
      <v-col class="text-right" align-self="end">
        <v-btn small outlined :ripple="false">Clear All</v-btn>
      </v-col>
    </v-row>
    <v-list>
      <v-list-item v-for="todo in todos" :key="todo.id">
        <v-card>
          <v-card-title v-text="todo.title"></v-card-title>
        </v-card>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $axios }) {
    const { data } = await $axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    )
    console.log(data)
    return {
      todos: data
    }
  }
})
</script>
<style>
</style>