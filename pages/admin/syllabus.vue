<template>
  <v-layout justify-center align-content-center>
    <v-row>
      <!-- <v-col cols="12">
        <v-skeleton-loader min-width="90%" class="mx-auto mt-5" type="article"></v-skeleton-loader>
      </v-col>-->

      <v-col cols="6">
        <v-list style="height:100%">
          <h3 class="title text-center">To do</h3>
          <draggable :list="listSubject" group="subject">
            <v-list-item class="drag-cursor mb-5" v-for="subject in listSubject" :key="subject.id">
              <v-card max-width="300" style="width:100%" :color="subject.color">
                <v-card-title class="title white--text">{{subject.name}}</v-card-title>
                <v-card-actions>
                  <v-btn
                    @click="deleteItem(subject.id)"
                    color="primary"
                    rounded
                    tile
                    depressed
                  >DELETE</v-btn>
                </v-card-actions>
              </v-card>
            </v-list-item>
          </draggable>
        </v-list>
      </v-col>
      <v-col cols="6">
        <v-list>
          <h3 class="title text-center">Done</h3>
          <draggable :list="secondSubject" group="subject">
            <v-list-item
              class="drag-cursor mb-5"
              v-for="subject in secondSubject"
              :key="subject.id"
            >
              <v-card max-width="300" style="width:100%" :color="subject.color">
                <v-card-title>{{subject.name}}</v-card-title>
              </v-card>
            </v-list-item>
          </draggable>
        </v-list>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      listSubject: [
        {
          name: 'a',
          description: 'a',
          id: 2,
          color: 'red'
        },
        {
          name: 'b',
          description: 'b',
          id: 1,
          color: 'purple'
        },

        {
          name: 'c',
          description: 'c',
          id: 3,
          color: 'teal'
        }
      ],
      secondSubject: [
        {
          name: 'd',
          description: 'd',
          id: 4,
          color: 'red'
        },
        {
          name: 'e',
          description: 'e',
          id: 5,
          color: 'purple'
        },

        {
          name: 'f',
          description: 'f',
          id: 6,
          color: 'teal'
        }
      ]
    }
  },
  methods: {
    deleteItem(id: number) {
      const findIndex = this.listSubject.findIndex(item => item.id === id)
      if (findIndex > -1) {
        this.listSubject.splice(findIndex, 1)
      }
    }
  }
})
</script>
<style>
.drag-cursor {
  cursor: move;
}
</style>
