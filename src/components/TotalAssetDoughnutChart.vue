<template>
  <v-flex>
    <canvas id="DoughnutChart"/>
  </v-flex>
</template>

<script>
import Chart from "chart.js";
import { DoughnutChartData } from "./TotalAssetDoughnutChartConfigData.js";

export default {
  name: "TimeSeriesChart",
  data() {
    return {
      chart: null,
       doughnutChartConfigData: DoughnutChartData,
    //   data1: dataMock.generateData(),
    //   data2: dataMock.generateData(),
    //   data3: dataMock.generateData(),
    //   data4: dataMock.generateData(),
    //   data5: dataMock.generateData()
    };
  },
  mounted() {
    this.initialRenderChart(document.getElementById("DoughnutChart").getContext("2d"), this.doughnutChartConfigData)
  },
  methods: {
    initialRenderChart(canvas, chartData) {
    this.chart = new Chart(canvas, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
        plugins: chartData.plugins
      })
    },
    // reRenderChart(x) {
    //   switch(x){
    //     case 1:
    //       this.reRender(this.data1)
    //       break
    //     case 2:
    //       this.reRender(this.data2)
    //       break
    //     case 3:
    //       this.reRender(this.data3)
    //       break
    //     case 4:
    //       this.reRender(this.data4)
    //       break
    //     case 5:
    //       this.reRender(this.data5)
    //       break
    //   }
    // },
    // reRender(data) {
    //   this.chart.data.datasets[0].data = data
    //   this.chart.update()
    // }
  }
}
</script>

