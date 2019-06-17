import Chart from "chart.js"
import moment from "moment"

export const dataMock = {
  randomNumber: function(min, max) {
    return Math.random() * (max - min) + min
  },
  randomBar: function(date, lastClose) {
    var open = dataMock.randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
    var close = dataMock.randomNumber(open * 0.95, open * 1.05).toFixed(2);
    return {
      t: date.valueOf(),
      y: close
    }
  },
  generateData : function(){
    var dateFormat = "MMMM DD YYYY"
    var date =  moment("April 01 2017", dateFormat)
    var data = [this.randomBar(date, 30)]
    while (data.length < 60) {
      date = date.clone().add(1, "d")
      if (date.isoWeekday() <= 5) {
        data.push(this.randomBar(date, data[data.length - 1].y))
      }
    }
    return data
  }
}

export const TimeSeriesChartData = {
  type: "bar",
  data: {
    datasets: [
      {
        label: "DMM - DMM FinTech Corporation",
        backgroundColor: Chart.helpers.color("rgb(255, 99, 132)").alpha(0.5).rgbString(),
        borderColor: "rgb(255, 99, 132)",
        data: dataMock.generateData(),
        type: "line",
        pointRadius: 0,
        fill: false,
        lineTension: 0,
        borderWidth: 2
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          type: "time",
          distribution: "series",
          ticks: {
            source: "data",
            autoSkip: true
          }
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Bitcoin price ($)"
          }
        }
      ]
    },
    tooltips: {
      intersect: false,
      mode: "index",
      callbacks: {
        label: function(tooltipItem, myData) {
          var label = myData.datasets[tooltipItem.datasetIndex].label || "";
          if (label) {
            label += ": ";
          }
          label += parseFloat(tooltipItem.value).toFixed(2);
          return label;
        }
      }
    }
  }
}

export default TimeSeriesChartData
