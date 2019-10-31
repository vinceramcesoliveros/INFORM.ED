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
        active-class="green lighten-1 white--text"
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
  data() {
    return {
      min: true
    }
  },
  computed: {
    getItems() {
      return this.$accessor.UI.getItems
    },
    getAdministrator() {
      return this.$accessor.UI.getAdministrator
    },
    getCurrentRoute(): boolean {
      return this.$route.path.match('/admin') ? true : false
    }
  },
  beforeMount() {},

})
</script>
<style>
</style>