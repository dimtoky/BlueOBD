import { ShareService } from './../../providers/share-service/share-service';
import { SettingsPage } from '../settings/settings';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listRT = ["0"];
  connected:boolean = false;
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    private navParams: NavParams,
    private shareService: ShareService) {

      if (!this.connected )
      {
        navCtrl.push(SettingsPage);
      }

    setInterval(() => {

      this.listRT = shareService.getData();

    }, 1000);

  }



  infoMsg(): void {
    let alert = this.alertCtrl.create({
      title: 'Vitesse du véhicule',
      subTitle: 'Vous renséigne sur la vitesse du véhicule en temps réel',
      buttons: ['OK']
    });
    alert.present();
  }

}

