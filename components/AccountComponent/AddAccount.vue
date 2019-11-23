<template>
  <v-dialog v-model="dialog" max-width="600">
    <template v-slot:activator="{on}">
      <v-btn v-on="on" outlined :ripple="false">
        <v-icon>mdi-plus</v-icon>Account
      </v-btn>
    </template>
    <v-form @submit.prevent="addAccount" v-model="form">
      <v-card>
        <v-card-title>
          <span class="headline">Account</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="12" sm="12">
                <v-text-field label="name" v-model="name"></v-text-field>
              </v-col>
              <v-col cols="12" md="12" sm="12">
                <v-text-field label="email" v-model="email"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secondary" type="submit">Add Account</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations } from 'vuex'
export default Vue.extend({
  data() {
    return {
      valid: false,
      name: '',
      email: '',
      dialog: false
    }
  },
  methods: {
    addAccount() {
      this.$accessor.accounts.ADD_ACCOUNT({
        name: this.name,
        email: this.email
      })
    }
  }
})
</script>

<style>
</style>