<template>
  <div>
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" outlined :ripple="false">
          <v-icon>mdi-plus</v-icon>Account
        </v-btn>
      </template>
      <v-form @submit.prevent="addAccount" v-model="valid">
        <v-card>
          <v-card-title>
            <span class="headline">Account</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" md="12" sm="12">
                  <v-text-field label="name" v-model="name" aria-required="true" required></v-text-field>
                </v-col>
                <v-col cols="12" md="12" sm="12">
                  <v-text-field label="email" v-model="email" required></v-text-field>
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
    <v-snackbar
      v-model="snackbar"
      class="text-center"
      :color="message !== `Successfully added` ? 'error':'primary'"
      :timeout="5000"
    >{{ message }}</v-snackbar>
  </div>
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
      dialog: false,
      snackbar: false,
      message: ''
    }
  },
  methods: {
    async addAccount() {
      this.message = ''

      this.$accessor.accounts.CLEAR_ERROR()
      await this.$accessor.accounts.validateAccount({
        name: this.name,
        email: this.email
      })
      this.finishValidate()
    },
    closeDialog() {
      this.dialog = false
      this.email = ''
      this.name = ''
    },

    finishValidate() {
      if (this.$accessor.accounts.GET_ACCOUNT_ERRORS) {
        this.message = this.$accessor.accounts.GET_ACCOUNT_ERRORS
      } else {
        this.message = 'Successfully added'
      }

      this.snackbar = true
      this.closeDialog()
    }
  }
})
</script>

<style></style>
