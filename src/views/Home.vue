<template>
  <v-container>
    <div class="home">
      <v-img :src="require('../assets/Vue.js.svg')" class="my-3" contain height="175"></v-img>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </v-container>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue"
export default {
  name: "home",
  components: {
    HelloWorld
  }
}
</script>
