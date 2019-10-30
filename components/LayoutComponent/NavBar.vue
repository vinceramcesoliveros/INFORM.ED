<template>
  <v-app-bar fixed app flat dense :clipped-right="false">
    <v-app-bar-nav-icon @click="updateDrawer" />
    <v-toolbar-title v-text="getTitle" v-if="!getMobileView" class="mr-3" />
    <v-spacer></v-spacer>
    <v-text-field
      type="search"
      prepend-inner-icon="mdi-magnify"
      class="mr-5 mt-5"
      placeholder="Search Student"
    ></v-text-field>
    <v-spacer />
    <v-badge color="red lighten-2" overlap>
      <template v-slot:badge>
        <!-- Notification Count badge, -->
        <span>1</span>
      </template>
      <v-icon @click="clickedNotification">mdi-bell</v-icon>
    </v-badge>
    <v-btn icon v-if="getMobileView" @click="updateRightDrawer" class="ml-3">
      <v-icon>mdi-message-alert</v-icon>
    </v-btn>
    <v-btn icon @click="updateDarkMode" v-if="!getMobileView" :ripple="false">
      <v-icon>{{ getDarkMode ? 'mdi-lightbulb':'mdi-lightbulb-on'}}</v-icon>
    </v-btn>

    <v-menu bottom left>
      <template v-slot:activator="{on}">
        <!-- Reserved for account name or image icon -->
        <v-btn v-on="on" icon :ripple="false">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item @click="updateDarkMode" v-if="getMobileView">
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
      width: 9999,
      items: [
        {
          name: 'Profile',
          icon: 'mdi-account',
          /**
           * you can put arrow function here
           * but you can't call `this.action()` inside of a data class.
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
      console.log('CLICKED NOTIFICATION')
    }
  },
  computed: {
    ...mapGetters({
      getTitle: 'UI/getTitle'
    }),
    getDarkMode(): boolean {
      return this.$vuetify.theme.dark
    },
    getMobileView(): boolean {
      return this.width < 1260
    }
  },
  beforeMount() {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth
    })
    console.log(this.width)
  }
})
</script>
<style>
</style>