<template>
  <v-flex xs6>
    <canvas id="TimeSeriesChart"></canvas>
    <v-btn-toggle v-model="text">
      <v-btn outline @click="reRenderChart1" value="1">１週</v-btn>
      <v-btn outline @click="reRenderChart2" value="2">１ヶ月</v-btn>
      <v-btn outline @click="reRenderChart3" value="3">３ヶ月</v-btn>
      <v-btn outline @click="reRenderChart4" value="4">６ヶ月</v-btn>
      <v-btn outline @click="reRenderChart5" value="5">１年</v-btn>
    </v-btn-toggle>
  </v-flex>
</template>

<script>
import Chart from "chart.js";
import { TimeSeriesChartData, dataMock } from "./TimeSeriesChartData.js";

export default {
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
    reRenderChart1() {
      this.reRenderChart(this.data1)
    },
    reRenderChart2() {
      this.reRenderChart(this.data2)
    },
    reRenderChart3() {
      this.reRenderChart(this.data3)
    },
    reRenderChart4() {
      this.reRenderChart(this.data4)
    },
    reRenderChart5() {
      this.reRenderChart(this.data5)
    },
    reRenderChart(data) {
      this.chart.data.datasets.forEach(dataset => {
        dataset.data = data
      })
      this.chart.update()
    }
  }
}
</script>
