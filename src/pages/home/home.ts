import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  infoMsg() : void{
    let alert = this.alertCtrl.create({
      title: 'Vitesse du véhicule',
      subTitle: 'Vous renséigne sur la vitesse du véhicule en temps réel',
      buttons: ['OK']
    });
    alert.present();
  }

}
