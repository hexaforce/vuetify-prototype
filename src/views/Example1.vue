<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 lg5 mb-3>
        <v-expansion-panel popout>
          <!--           
      <v-flex xs12 lg5 offset-lg2>
        <v-expansion-panel inset> 
          -->
          <draggable v-model="tabs" class="v-expansion-panel__container">
            <v-expansion-panel-content v-for="tab in tabs" :key="tab.id" :expand-icon="tab.icon">
              <template v-slot:header>
                <div>{{ tab.name }}</div>
              </template>
              <v-card>
                <v-card-text>{{ tab.text }}</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </draggable>
        </v-expansion-panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "example1",
  components: {
    draggable
  },
  methods: {},
  data() {
    return {
      active: 0,
      tabs: [
        {
          id: 1,
          icon: "fab fa-bitcoin",
          name: "1st Tab",
          text: "This is a 1st tab"
        },
        {
          id: 2,
          icon: "fab fa-ethereum",
          name: "2nd Tab",
          text: "This is a 2nd tab"
        },
        {
          id: 3,
          icon: "fab fa-bitcoin",
          name: "3rd Tab",
          text: "This is a 3rd tab"
        }
      ]
    }
  }
}
</script>
