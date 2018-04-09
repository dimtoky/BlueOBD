import { Component, ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';



@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html'
})
export class ChartsPage {

  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('lineCanvas2') lineCanvas2;
  @ViewChild('barCanvas') barCanvas;

  lineChart: any;
  lineChart2: any;
  barChart: any;
  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
          labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet"],
          datasets: [
              {
                  label: "Moyenne Litre/Heure par mois",
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: "rgba(75,192,192,0.4)",
                  borderColor: "rgba(75,192,192,1)",
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: "rgba(75,192,192,1)",
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: "rgba(75,192,192,1)",
                  pointHoverBorderColor: "rgba(220,220,220,1)",
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [4, 5, 3, 4, 4, 2, 5],
                  spanGaps: false,
              }
          ]
      }

  });

  this.lineChart2 = new Chart(this.lineCanvas2.nativeElement, {

    type: 'line',
    data: {
        labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet"],
        datasets: [
            {
                label: "Moyenne Km/H par mois",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgb(51, 51, 255)",
                borderColor: "rgb(51, 51, 255)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgb(51, 51, 255)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgb(51, 51, 255)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [32, 30, 25, 27,23 , 40, 26],
                spanGaps: false,
            }
        ]
    }

});

this.barChart = new Chart(this.barCanvas.nativeElement, {

  type: 'bar',
  data: {
      labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet","Aout","Spetembre","Octobre","Novembre","Decembre" ],
      datasets: [{
          label: '# de codes d\'erreur ' ,
          data: [0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 0, 1],
          backgroundColor: [
              'rgb(255, 0, 0)',
              'rgb(255, 0, 0)',
              'rgb(255, 0, 0)',
              'rgb(255, 0, 0)',
              'rgb(255, 0, 0)',
              'rgb(255, 0, 0)',
              'rgb(255, 0, 0)',
              'rgb(255, 0, 0)',
              'rgb(255, 0, 0)',
              'rgb(255, 0, 0)',
              'rgb(255, 0, 0)',
              'rgb(255, 0, 0)',


          ],
          borderColor: [
            'rgb(255, 0, 0)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero:true
              }
          }]
      }
  }

});
}



}

