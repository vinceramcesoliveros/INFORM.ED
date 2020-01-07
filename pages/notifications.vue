<template>
  <v-container>
    <v-row>
      <v-col align-self="start" class="text-left">Notifications</v-col>
      <v-col class="text-right" align-self="end">
        <v-btn
          small
          outlined
          :ripple="false"
          @click="todos = []"
          rounded
          color="primary"
          >Clear All</v-btn
        >
      </v-col>
    </v-row>
    <v-list three-line v-if="todos.length">
      <v-list-item
        v-for="todo in todos"
        @click="$router.push(`post/${todo.id}`)"
        :key="todo.id"
      >
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="todo.title"></v-list-item-title>
          <v-list-item-subtitle v-text="todo.title"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <div v-else>
      <h2 class="headline text-center">No notificaions</h2>
    </div>
  </v-container>
</template>

<script lang="ts">
interface Todo {
  title: string
  id: number
}
import Vue from 'vue'
import { AxiosResponse } from 'axios'
export default Vue.extend({
  data() {
    return {
      todos: [] as Todo[]
    }
  },
  async mounted() {
    const { data }: AxiosResponse<Todo[]> = await this.$axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=10'
    )
    this.todos = data
  }
})
</script>
<style></style>
