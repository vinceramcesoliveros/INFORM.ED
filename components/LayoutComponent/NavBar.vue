<template>
  <v-app-bar app flat dense :clipped-right="false">
    <v-app-bar-nav-icon @click="updateLeftDrawer" class="d-sm-flex d-lg-none d-xl-none" />
    <v-toolbar-title v-text="getTitle" class="mr-2 title" />
    <v-spacer />
    <!-- The binding of the value will show if there are notifications -->
    <v-badge color="primary lighten-2" overlap :value="notificationCount !== 0">
      <template v-slot:badge>
        <!-- Notification Count badge, -->
        <span>{{notificationCount}}</span>
      </template>
      <v-icon @click="clickedNotification">mdi-bell</v-icon>
    </v-badge>
    <v-btn icon class="d-sm-flex d-md-flex ml-2" @click="updateRightDrawer">
      <v-icon>mdi-message-alert</v-icon>
    </v-btn>
    <v-tooltip bottom eager class>
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
    <InfoMenu />
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations, mapGetters } from 'vuex'

export default Vue.extend({
  data() {
    return {
      width: 4000,
      notificationCount: 0
    }
  },
  components: {
    InfoMenu: () => import('./Menu.vue')
  },
  methods: {
    ...mapMutations({
      updateLeftDrawer: 'UI/updateLeftDrawer',
      updateRightDrawer: 'UI/updateRightDrawer'
    }),
    updateDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.darkMode = this.$vuetify.theme.dark
    },
    clickedNotification() {
      this.notificationCount = 0
      this.$router.push('/notifications')
    }
  },
  computed: {
    getTitle() {
      /**
       * Splits the name by '-'
       * We'll use this to return
       * a set of strings,
       * from teacher-subjects
       * to teacher subjects
       *
       */
      const splitable = this.$route.name
        ? this.$route.name.split('-')
        : undefined
      if (this.$route.name === 'index') {
        return 'DASHBOARD'
      }
      if (splitable) {
        let newTitle: string = ''
        for (let word of splitable) {
          newTitle += `${word.toUpperCase()} `
        }
        return newTitle
      }
      return this.$route.name
        ? this.$route.name.toUpperCase()
        : this.$route.name
    },
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
    if (this.$route.name !== 'notifications') {
      // Please don't use ternary operator in this logic.
      this.notificationCount = Math.floor(Math.random() * 100 + 1)
    } else {
      this.notificationCount = 0
    }
    if (process.browser) {
      this.$vuetify.theme.dark =
        localStorage.getItem('darkMode') === 'true' ? true : false
    }
  }
})
</script>
<style>
</style>
