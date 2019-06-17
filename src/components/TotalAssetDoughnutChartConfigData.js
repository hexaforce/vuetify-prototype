import Chart from "chart.js"
import moment from "moment"

// export const dataMock = {
//   randomNumber: function(min, max) {
//     return Math.random() * (max - min) + min
//   },
//   randomBar: function(date, lastClose) {
//     var open = dataMock.randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
//     var close = dataMock.randomNumber(open * 0.95, open * 1.05).toFixed(2);
//     return {
//       t: date.valueOf(),
//       y: close
//     }
//   },
//   generateData : function(){
//     var dateFormat = "MMMM DD YYYY"
//     var date =  moment("April 01 2017", dateFormat)
//     var data = [this.randomBar(date, 30)]
//     while (data.length < 60) {
//       date = date.clone().add(1, "d")
//       if (date.isoWeekday() <= 5) {
//         data.push(this.randomBar(date, data[data.length - 1].y))
//       }
//     }
//     return data
//   }
// }

var dataLabelPlugin = {
    afterDatasetsDraw: function (chart, easing) {
        // To only draw at the end of animation, check for easing === 1
        var ctx = chart.ctx;
        chart.data.datasets.forEach(function (dataset, i) {
            var meta = chart.getDatasetMeta(i)
            if (!meta.hidden) {
                meta.data.forEach(function (element, index) {
                    // Draw the text in black, with the specified font
                    ctx.fillStyle = 'rgb(0, 0, 0)'
                    var fontSize = 16
                    var fontStyle = 'normal'
                    var fontFamily = 'Helvetica Neue'
                    ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily)
                    // Just naively convert to string for now
                    var dataString = dataset.data[index].toString()
                    // Make sure alignment settings are correct
                    ctx.textAlign = 'center'
                    ctx.textBaseline = 'middle'
                    var padding = 5;
                    var position = element.tooltipPosition();
                    ctx.fillText(dataString, position.x, position.y - (fontSize / 2) - padding)
                })
            }
        })
    }
}

export const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Orange", "Pink"],
    datasets: [{
        data: [20000, 5000, 10000, 15000, 10000, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#339900", "#ff6633", "#cc0099"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#339900", "#ff6633", "#cc0099"]
    }]
}

// export const DoughnutChartData = {
//     type: 'doughnut',
//     data: data,
//      options: {
//         legend: {
//             position: "bottom"
//             // onClick: function(event, legendItem) {}     
//         },
//         tooltips: {
//             enabled: false
//         }
//      }
// }

export const DoughnutChartData = {
  type: "doughnut",
  data: data,
  options: {
    legend: {
        position: "bottom"
    },
    // scales: {
    //   xAxes: [
    //     {
    //       type: "time",
    //       distribution: "series",
    //       ticks: {
    //         source: "data",
    //         autoSkip: true
    //       }
    //     }
    //   ],
    //   yAxes: [
    //     {
    //       scaleLabel: {
    //         display: true,
    //         labelString: "Bitcoin price ($)"
    //       }
    //     }
    //   ]
    // },
    tooltips: {
        enabled: false
    //   intersect: false,
    //   mode: "index",
    //   callbacks: {
    //     label: function(tooltipItem, myData) {
    //       var label = myData.datasets[tooltipItem.datasetIndex].label || "";
    //       if (label) {
    //         label += ": ";
    //       }
    //       label += parseFloat(tooltipItem.value).toFixed(2);
    //       return label;
    //     }
    //   }
    },
    plugins: [dataLabelPlugin]
  }
}

export default DoughnutChartData
