<template>
  <v-menu bottom nudge-bottom="30" left>
    <template v-slot:activator="{on}">
      <!-- Reserved for account name or image icon -->
      <v-icon v-on="on" icon :ripple="false" class="ml-3">mdi-account-circle</v-icon>
    </template>
    <v-list dense>
      <v-list-item
        @click="updateDarkMode"
        class="d-none d-sm-flex d-md-flex d-lg-none d-xl-none ml-2"
      >
        <v-list-item-action>
          <v-icon>{{ getDarkMode ? 'mdi-lightbulb':'mdi-lightbulb-on'}}</v-icon>
        </v-list-item-action>
        <v-list-item-title>Dark Mode</v-list-item-title>
      </v-list-item>
      <v-list-item v-for="(item,index) in items" :key="index" @click="item.action">
        <v-list-item-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-item-action>
        <v-list-item-title v-text="item.name"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      items: [
        {
          name: 'Profile',
          icon: 'mdi-account',
          /**
           * you can put arrow function here
           * but you can't call `this.action()` inside of a data method.
           */
          action: () => this.$router.push('/account')
        },
        {
          name: 'Settings',
          icon: 'mdi-settings',
          action: () => this.$router.push('/settings')
        },
        {
          name: 'Logout',
          icon: 'mdi-logout',
          action: () => this.$router.push('/login')
        }
      ]
    }
  },
   methods: {
    updateDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
  computed: {
    getDarkMode(): boolean {
      return this.$vuetify.theme.dark
    },
    /**
     * We will keep this function to determine if the mobile has
     * a kind of functionality the same as the browser from the
     * desktop.
     */
    getMobileView(): boolean {
      return this.$accessor.UI.width < 1260
    }
  },
})
</script>

<style>
</style>