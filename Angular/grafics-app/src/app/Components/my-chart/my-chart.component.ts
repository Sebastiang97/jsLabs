import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { SharingService } from 'src/app/core/sevice/sharing.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements OnInit {

  chart: any

  constructor(private sharingService: SharingService) {
    sharingService.sharingObservableData = { name: 'la información cambió' }
  }

  ngOnInit() {
    this.sharingService.sharingObservable.subscribe(data => console.log(data))

    // new Chart('myChart1',{

    // })
    // Chart.plugins.register(ChartDataLabels);

    new Chart('myChart1', {
      type: 'bubble',
      data: {
        datasets: [{
          labels: ['First Dataset', "asdf"],
          data: [{
            title: "dataTitle1",
            x: 20,
            y: 30,
            r: 15,
          }, {
            title: "dataTitle2",
            x: 40,
            y: 10,
            r: 10
          }],
          backgroundColor: 'rgb(255, 99, 132)'
        }]
      },
      plugins: [ChartDataLabels],
      options: {
        plugins: {
          datalabels: {
            formatter: function (value: any, context: any) {

              return value.title;
            }
          }
        }
      }
    } as any)

    // new Chart('myChart1', {
    //   type: 'bar',
    //   data: {
    //     labels: ["65", "59", "80", "81", "56", "55", "40"],
    //     datasets: [{
    //       label: 'My First Dataset',
    //       data: [65, 59, 80, 81, 56, 55, 40],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(255, 159, 64, 0.2)',
    //         'rgba(255, 205, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(201, 203, 207, 0.2)'
    //       ],
    //       borderColor: [
    //         'rgb(255, 99, 132)',
    //         'rgb(255, 159, 64)',
    //         'rgb(255, 205, 86)',
    //         'rgb(75, 192, 192)',
    //         'rgb(54, 162, 235)',
    //         'rgb(153, 102, 255)',
    //         'rgb(201, 203, 207)'
    //       ],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     }
    //   },
    // })

    // this.chart = new Chart('myChart1', {
    //   type: 'bubble',
    //   data: {
    //     labels: "Africa",
    //     datasets: [{
    //       label: ["China"],
    //       backgroundColor: "rgba(255,221,50,0.2)",
    //       borderColor: "rgba(255,221,50,1)",
    //       title: "dataTitle1",
    //       data: [{
    //         x: 21269017,
    //         y: 5.245,
    //         r: 15
    //       }]
    //     }, {
    //       label: ["Denmark"],
    //       backgroundColor: "rgba(60,186,159,0.2)",
    //       borderColor: "rgba(60,186,159,1)",
    //       title: "dataTitle2",
    //       data: [{
    //         x: 258702,
    //         y: 7.526,
    //         r: 10
    //       }]
    //     }, {
    //       label: ["Germany"],
    //       backgroundColor: "rgba(0,0,0,0.2)",
    //       borderColor: "#000",
    //       title: "dataTitle3",
    //       data: [{
    //         x: 3979083,
    //         y: 6.994,
    //         r: 15
    //       }]
    //     }, {
    //       label: ["Japan"],
    //       backgroundColor: "rgba(193,46,12,0.2)",
    //       borderColor: "rgba(193,46,12,1)",
    //       title: "dataTitle4",
    //       data: [{
    //         x: 4931877,
    //         y: 5.921,
    //         r: 15
    //       }]
    //     }]
    //   },
    //   plugins: {
    //     afterDatasetsDraw: (chart: any) => {
    //       console.log({ chart })
    //       var ctx = chart.ctx;
    //       chart.data.datasets.forEach((dataset: any, i: any) => {
    //         var meta = chart.getDatasetMeta(i);
    //         if (meta.type == "bubble") { //exclude scatter
    //           meta.data.forEach((element: any, index: any) => {
    //             ctx.fillStyle = 'rgb(0, 0, 0)';
    //             var fontSize = 13;
    //             var fontStyle = 'normal';
    //             var fontFamily = 'Helvetica Neue';
    //             // ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily)
    //             var dataString = dataset.data[index].toString();
    //             ctx.textAlign = 'center';
    //             ctx.textBaseline = 'middle';
    //             var padding = 15;
    //             var position = element.tooltipPosition();
    //             ctx.fillText(dataset.title, position.x, position.y - (fontSize / 2) - padding);
    //           });
    //         }
    //       });
    //     }
    //   },
    //   options: {
    //     // title: {
    //     //   display: true,
    //     //   text: 'Predicted world population (millions) in 2050'
    //     // },
    //     // scales: {
    //     //   y: {
    //     //     scaleLabel: {
    //     //       display: true,
    //     //       labelString: "Happiness"
    //     //     }
    //     //   },
    //     //   x: {
    //     //     scaleLabel: {
    //     //       display: true,
    //     //       labelString: "GDP (PPP)"
    //     //     }
    //     //   }
    //     // }
    //   }
    // } );
    // // Chart.register({
    //   afterDatasetsDraw: (chart: any) => {
    //     var ctx = chart.ctx;
    //     chart.data.datasets.forEach((dataset: any, i: any) => {
    //       var meta = chart.getDatasetMeta(i);
    //       if (meta.type == "bubble") { //exclude scatter
    //         meta.data.forEach((element: any, index: any) => {
    //           ctx.fillStyle = 'rgb(0, 0, 0)';
    //           var fontSize = 13;
    //           var fontStyle = 'normal';
    //           var fontFamily = 'Helvetica Neue';
    //           // ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily)
    //           var dataString = dataset.data[index].toString();
    //           ctx.textAlign = 'center';
    //           ctx.textBaseline = 'middle';
    //           var padding = 15;
    //           var position = element.tooltipPosition();
    //           ctx.fillText(dataset.title, position.x, position.y - (fontSize / 2) - padding);
    //         });
    //       }
    //     });
    //   }
    // } as any);


  }

}
