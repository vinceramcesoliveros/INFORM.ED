<template>
  <v-app-bar fixed app flat dense :clipped-right="false">
    <v-app-bar-nav-icon
      @click="updateDrawer"
      class="d-none d-sm-flex d-md-flex d-lg-none d-xl-none"
    />
    <v-toolbar-title v-text="getTitle" class="mr-2" />
    <v-spacer />
    <!-- The binding of the value will show if there are notifications -->
    <v-badge color="green lighten-2" overlap :value="notificationCount !== 0">
      <template v-slot:badge>
        <!-- Notification Count badge, -->
        <span>{{notificationCount}}</span>
      </template>
      <v-icon @click="clickedNotification">mdi-bell</v-icon>
    </v-badge>
    <v-btn
      icon
      class="d-none d-sm-flex d-md-flex d-lg-none d-xl-none ml-2"
      @click="updateRightDrawer"
    >
      <v-icon>mdi-message-alert</v-icon>
    </v-btn>
    <v-tooltip bottom eager  class="">
      <template v-slot:activator="{ on }">
        <v-icon
          v-on="on"
          @click="updateDarkMode"
          class="ml-2 d-none d-sm-none d-md-none d-lg-flex d-xl-flex ml-2"
          :ripple="false"
        >{{ getDarkMode ? 'mdi-brightness-3':'mdi-brightness-5'}}</v-icon>
      </template>
      <span>Toggle {{getDarkMode ? 'Light':'Dark'}} mode</span>
    </v-tooltip>
    <v-menu bottom nudge-bottom="30" left>
      <template v-slot:activator="{on}">
        <!-- Reserved for account name or image icon -->
        <v-icon v-on="on" icon :ripple="false" class="ml-3">mdi-account-circle</v-icon>
      </template>
      <v-list dense>
        <v-list-item @click="updateDarkMode" class="d-none d-sm-flex d-md-flex d-lg-none d-xl-none ml-2">
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
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex'

export default Vue.extend({
  data() {
    return {
      notificationInterval: () => {},
      width: 9999,
      notificationCount: 0,
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
    ...mapMutations({
      updateDrawer: 'UI/updateDrawer',
      updateRightDrawer: 'UI/updateRightDrawer'
    }),
    updateDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    clickedNotification() {
      this.notificationCount = 0
      this.$router.push('/notifications')
    }
  },
  computed: {
    ...mapGetters({
      getTitle: 'UI/getTitle'
    }),
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
  mounted() {
    /** Will replace this into vuex, where whenever we navigate our page,
     *  the notification count will be triggered.
     */
    this.notificationCount = Math.floor(Math.random() * 100 + 1)
  }
})
</script>
<style>
</style>