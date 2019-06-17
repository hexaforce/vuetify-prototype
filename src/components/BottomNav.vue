<template>
  <v-card height="200px">
    <v-bottom-nav :active.sync="bottomNav" :color="color" :value="true" absolute dark shift>
      <v-btn to='/' dark>
        <span>Video</span>
        <v-icon>fa-yen-sign</v-icon>
      </v-btn>
      <v-btn to='/example1' dark>
        <span>Book</span>
        <v-icon>fa-credit-card</v-icon>
      </v-btn>
      <v-btn to='/example2' dark>
        <span>Book</span>
        <v-icon>fa-credit-card</v-icon>
      </v-btn>
      <v-btn to='/example3' dark>
        <span>Book</span>
        <v-icon>fa-credit-card</v-icon>
      </v-btn>
      <v-btn to='/about' dark>
        <span>Music</span>
        <v-icon>fa-coins</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 3
    }
  },
  computed: {
    color() {
      switch (this.bottomNav) {
        case 0:
          return "blue-grey"
        case 1:
          return "teal"
        case 2:
          return "brown"
        case 3:
          return "indigo"
        case 4:
          return "indigo"
        case 5:
          return "indigo"
      }
      return "white"
    }
  }
}
</script>