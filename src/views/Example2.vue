<template>
  <v-container>
    <canvas id="planet-chart"></canvas>
  </v-container>
</template>

<script>
import Chart from "chart.js"
import planetChartData from "./chart-data.js"

export default {
  name: "example2",
  components: {},
  data() {
    return {
      planetChartData: planetChartData
    }
  },
  mounted() {
    this.createChart("planet-chart", this.planetChartData)
  },
  methods: {
    createChart(chartId, chartData) {

      const ctx = document.getElementById(chartId)

      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      })

    }
  }
}
</script>
