<template>
  <v-content class="grey lighten-2">
    <v-container>
      <v-layout column align-content-center align-center justify-center>
        <v-flex xs12 md12 lg12>
          <v-img
            :src="require('@/assets/404.svg')"
            class="grey lighten-2"
            max-height="60rem"
            max-width="40rem"
          ></v-img>
        </v-flex>
        <v-flex xs12 md12 lg12>
          <p class="font-weight-bold" style="font-size:2.5rem">{{this.otherError}}</p>
        </v-flex>
        <v-flex xs12 md12 lg12>
          <v-btn large color="primary" outlined :ripple="false" @click="$router.go(-1)">Go back</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  layout: 'ErrorLayout',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
