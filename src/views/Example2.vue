<template>
  <v-container>
    <v-layout text-xs-center row wrap>
      <TotalAssetChart/>
    </v-layout>
    <v-layout text-xs-center row wrap>
      <TotalAssetDoughnutChart/>
    </v-layout>
  </v-container>
</template>

<script>
import TotalAssetChart from '@/components/TotalAssetChart.vue'
import TotalAssetDoughnutChart from '@/components/TotalAssetDoughnutChart.vue'
export default {
  name: 'example2',
  components: {
    TotalAssetChart,
    TotalAssetDoughnutChart
  }
}
</script>
