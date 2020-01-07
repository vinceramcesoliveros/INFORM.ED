<template>
  <v-row>
    <v-col
      cols="12"
      sm="12"
      md="12"
      lg="12"
      xl="12"
      v-for="comment in comments"
      :key="comment.id"
    >
      <v-card flat>
        <v-list-item>
          <v-list-item-avatar color="grey"></v-list-item-avatar>
          <v-list-item-title v-text="comment.name"></v-list-item-title>
        </v-list-item>
        <v-card-text v-text="comment.body"></v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>

<style></style>
