<template>
  <v-container>
    <v-layout text-xs-center row wrap>

    <TotalAssetChart />

    </v-layout>
  </v-container>
</template>

<script>
import TotalAssetChart from "@/components/TotalAssetChart.vue"
export default {
  name: "example2",
  components: {
    TotalAssetChart
  }
}
</script>
