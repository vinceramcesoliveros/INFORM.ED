<template>
  <v-navigation-drawer v-model="$store.state.UI.drawer" fixed app width="20rem">
    <v-list dense nav>
      <v-list-item
        :ripple="false"
        v-for="(item, i) in getItems"
        :key="i"
        :to="item.to"
        router
        exact
        color="primary"
      >
        <v-list-item-action>
          <v-icon medium>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>

      <!-- Will close the current route if it is not on the admin panel -->
      <v-list-group prepend-icon="mdi-account-tie" :ripple="false" :value="getCurrentRoute">
        <template v-slot:activator>
          <v-list-item-title>Admin</v-list-item-title>
        </template>
        <v-list-item
          v-for="item in getAdministrator"
          :key="item.to"
          :to="item.to"
          active-class="blue--text"
          exact
          :ripple="false"
        >
          <v-list-item-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapGetters({
      getItems: 'UI/getItems',
      getAdministrator: 'UI/getAdministrator'
    }),
    getCurrentRoute(): boolean {
      return this.$route.path.match('/admin') ? true : false
    }
  },
  beforeMount() {
    if (window.innerWidth < 1260) {
      this.$store.commit('UI/mobileView')
    }
  }
})
</script>
<style>
</style>