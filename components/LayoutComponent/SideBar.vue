<template>
  <v-navigation-drawer v-model="$store.state.UI.drawer" fixed app>
    <v-list rounded>
      <v-list-item
        :ripple="false"
        v-for="(item, i) in getItems"
        :key="i"
        :to="item.to"
        router
        exact
        active-class="green lighten-2 white--text"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({
  computed: {
    ...mapGetters({
      getItems: 'UI/getItems'
    })
  }
})
</script>
<style>
</style>