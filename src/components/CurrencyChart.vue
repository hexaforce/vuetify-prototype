<template>
  <canvas :id=symbol />
</template>

<script>
import Chart from "chart.js"
import ConfigData from "./CurrencyChartConfigData.js"

export default {
  data: () => ({
    configData: ConfigData,
    currencyChart: null
  }),
  props: ['symbol'],
  mounted() {
    this.createChart(this.symbol, this.configData)
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      this.currencyChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      })
    }
  }
}
</script>
