<template>
  <v-flex>
    <canvas id="TimeSeriesChart"/>
    <v-btn-toggle>
      <v-btn outline @click="reRenderChart(1)" value="1">１週</v-btn>
      <v-btn outline @click="reRenderChart(2)" value="2">１ヶ月</v-btn>
      <v-btn outline @click="reRenderChart(3)" value="3">３ヶ月</v-btn>
      <v-btn outline @click="reRenderChart(4)" value="4">６ヶ月</v-btn>
      <v-btn outline @click="reRenderChart(5)" value="5">１年</v-btn>
    </v-btn-toggle>
  </v-flex>
</template>

<script>
import Chart from "chart.js";
import { TimeSeriesChartData, dataMock } from "./TotalAssetChartConfigData.js";

export default {
  name: "TimeSeriesChart",
  data() {
    return {
      chart: null,
      timeSeriesChartData: TimeSeriesChartData,
      data1: dataMock.generateData(),
      data2: dataMock.generateData(),
      data3: dataMock.generateData(),
      data4: dataMock.generateData(),
      data5: dataMock.generateData()
    };
  },
  mounted() {
    this.initialRenderChart(document.getElementById("TimeSeriesChart").getContext("2d"), this.timeSeriesChartData)
  },
  methods: {
    initialRenderChart(canvas, chartData) {
    this.chart = new Chart(canvas, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      })
    },
    reRenderChart(x) {
      switch(x){
        case 1:
          this.reRender(this.data1)
          break
        case 2:
          this.reRender(this.data2)
          break
        case 3:
          this.reRender(this.data3)
          break
        case 4:
          this.reRender(this.data4)
          break
        case 5:
          this.reRender(this.data5)
          break
      }
    },
    reRender(data) {
      this.chart.data.datasets[0].data = data
      this.chart.update()
    }
  }
}
</script>
