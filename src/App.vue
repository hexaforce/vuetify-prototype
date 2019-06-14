<template>
  <div id="app" dark>
    <v-app>
      <v-content>
        <router-view/>
        <BottomNav/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import BottomNav from "@/components/BottomNav.vue"
export default {
  name: "app",
  components: {
    BottomNav
  }
}
</script>
