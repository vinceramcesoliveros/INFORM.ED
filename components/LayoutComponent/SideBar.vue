<template>
  <v-navigation-drawer v-model="$store.state.UI.drawer" fixed app width="20rem">
    <v-list dense nav>
      <v-list-item
        id="style-1"
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
  beforeMount() {}
})
</script>
<style  scoped>
#style-1::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
  color: #d3d3d3;
}

#style-1::-webkit-scrollbar-track {
  box-shadow: #555;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

#style-1::-webkit-scrollbar-thumb {
  box-shadow: #555;
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>

