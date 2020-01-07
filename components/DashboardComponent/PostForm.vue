<template>
  <v-card flat>
    <v-card-title>
      <span class="headline">User Profile</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Legal first name*" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Legal last name*"
              hint="example of persistent helper text"
              persistent-hint
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Email*" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Password*" type="password" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-autocomplete
              :items="[
                'Skiing',
                'Ice hockey',
                'Soccer',
                'Basketball',
                'Hockey',
                'Reading',
                'Writing',
                'Coding',
                'Basejump'
              ]"
              label="Interests"
              multiple
            ></v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text @click="closeWindow">Close</v-btn>
      <v-btn text @click="closeWindow">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    dialog: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    closeWindow() {
      if (this.$accessor.UI.width < 1200) {
        this.$router.go(-1)
      }
      this.$emit('closeDialog')
    }
  }
})
</script>

<style></style>
