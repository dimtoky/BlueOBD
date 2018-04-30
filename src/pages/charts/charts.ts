import { ShareService } from './../../providers/share-service/share-service';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Storage } from '@ionic/storage';



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
  monthsArray = ["Jan", "Fev", "Mars", "Avril", "Mai", "Juin", "Juill", "Aout", "Sept", "Oct", "Nov", "Déc"]
  currentMonth;
  valuesArray:String[] = [];
  moyListRT = [null, null, null, null, null, null];
  listRT = ["0", "0", "0", "0", "0", "0"];

  constructor(public navCtrl: NavController,
    private shareService: ShareService,
    private storage: Storage) {

    this.currentMonth = new Date().getUTCMonth();



   /* setInterval(() => {
      if (this.connected) {
        this.listRT = shareService.getData();
        this.updateSum();
      }
    }, 1000);

    setInterval(() => {
      storage.get('moylistRT').then((val) => {
        storage.set('Month'+this.monthsArray.toString() , val) ;
      });
    }, 60000);*/


  }
  ionViewDidEnter(){
    for (let i = 0 ; i < 12 ; i++){
      this.storage.get('Month'+i.toString()).then((val) => {
        this.valuesArray[i] = val ;

      });
    }
    console.log(this.valuesArray);
}
  ionViewDidLoad() {


    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
        // labels: ["",this.monthsArray[this.getMonth(this.currentMonth-2)], "",this.monthsArray[this.getMonth(this.currentMonth-1)],"", this.monthsArray[this.getMonth(this.currentMonth)]],
        labels: [this.monthsArray[this.getMonth(this.currentMonth - 5)], this.monthsArray[this.getMonth(this.currentMonth - 4)], this.monthsArray[this.getMonth(this.currentMonth - 3)], this.monthsArray[this.getMonth(this.currentMonth - 2)], this.monthsArray[this.getMonth(this.currentMonth - 1)], this.monthsArray[this.getMonth(this.currentMonth)]],
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
            data: [this.valuesArray[this.getMonth(this.currentMonth - 5)],this.valuesArray[this.getMonth(this.currentMonth - 4)],this.valuesArray[this.getMonth(this.currentMonth - 3)],this.valuesArray[this.getMonth(this.currentMonth - 2)],this.valuesArray[this.getMonth(this.currentMonth - 1)],this.valuesArray[this.getMonth(this.currentMonth)] ],
            spanGaps: false,
          }
        ]
      }

    });



    this.lineChart2 = new Chart(this.lineCanvas2.nativeElement, {

      type: 'line',
      data: {
        //labels: ["",this.monthsArray[this.getMonth(this.currentMonth-2)], "",this.monthsArray[this.getMonth(this.currentMonth-1)],"", this.monthsArray[this.getMonth(this.currentMonth)]],
        labels: [this.monthsArray[this.getMonth(this.currentMonth - 5)], this.monthsArray[this.getMonth(this.currentMonth - 4)], this.monthsArray[this.getMonth(this.currentMonth - 3)], this.monthsArray[this.getMonth(this.currentMonth - 2)], this.monthsArray[this.getMonth(this.currentMonth - 1)], this.monthsArray[this.getMonth(this.currentMonth)]],

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
            data: [30, 25, 27, 23, 40, 26],
            spanGaps: false,
          }
        ]
      }

    });

    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        // labels: [this.monthsArray[this.getMonth(this.currentMonth-2)], this.monthsArray[this.getMonth(this.currentMonth-1)], this.monthsArray[this.getMonth(this.currentMonth)]],
        labels: [this.monthsArray[this.getMonth(this.currentMonth - 5)], this.monthsArray[this.getMonth(this.currentMonth - 4)], this.monthsArray[this.getMonth(this.currentMonth - 3)], this.monthsArray[this.getMonth(this.currentMonth - 2)], this.monthsArray[this.getMonth(this.currentMonth - 1)], this.monthsArray[this.getMonth(this.currentMonth)]],

        datasets: [{
          label: '# de codes d\'erreur ',
          data: [2, 0, 1, 0, 0, 1],
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
              beginAtZero: true
            }
          }]
        }
      }

    });
  }


  getMonth(mois) {
    if (mois < 0) {
      mois = 12 + mois;
    }
    return mois;
  }

  updateSum() {
    this.moyListRT[0] = ((parseInt(this.moyListRT[0]) + parseInt(this.listRT[0])) / 2).toString();
    this.moyListRT[1] = ((parseInt(this.moyListRT[1]) + parseInt(this.listRT[1])) / 2).toString();
    this.moyListRT[2] = ((parseInt(this.moyListRT[2]) + parseInt(this.listRT[2])) / 2).toString();
    this.moyListRT[3] = ((parseInt(this.moyListRT[3]) + parseInt(this.listRT[3])) / 2).toString();
    this.moyListRT[4] = ((parseInt(this.moyListRT[4]) + parseInt(this.listRT[4])) / 2).toString();
    this.moyListRT[5] = ((parseInt(this.moyListRT[5]) + parseInt(this.listRT[5])) / 2).toString();
  }

  initStorage() {
    if (window.localStorage && !(window.localStorage.getItem('firstRunFinished') == "true")) {
      // DO HERE WHAT YOU WANT TO DO ON THE FIRST RUN
      console.log("first run");
      this.storage.set('moylistRT', ["0", "0", "0", "0", "0", "0"]);
      for (let i = 0; i < 12; i++) {
        this.storage.set(i.toString(), ["0", "0", "0", "0", "0", "0"]);
      }
      window.localStorage.setItem('firstRunFinished', "true");
    }
    if (new Date().getUTCDate() == 1) {
      this.storage.set('moylistRT', ["0", "0", "0", "0", "0", "0"]);
    }
  }

}

