<template>
  <v-container>
    <v-row>
      <v-col align-self="start" class="text-left">Notifications</v-col>
      <v-col class="text-right" align-self="end">
        <v-btn small outlined :ripple="false">Clear All</v-btn>
      </v-col>
    </v-row>
    <v-list three-line>
      <v-list-item v-for="todo in todos" @click="$router.push(todo.url)" :key="todo.id">
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="todo.title"></v-list-item-title>
          <v-list-item-subtitle v-text="todo.title"></v-list-item-subtitle>
        </v-list-item-content>
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
    return {
      todos: {...data,url:''}
    }
  }
})
</script>
<style>
</style>