import { SplashScreen } from '@ionic-native/splash-screen';
import { ShareService } from './../../providers/share-service/share-service';
import { SettingsPage } from '../settings/settings';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  listRT = ["0", "0", "0", "0", "0", "0"];

  connected: boolean = false;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    private navParams: NavParams,
    private shareService: ShareService,
    private storage: Storage) {

  }

  ionViewDidLoad(){
    if (!this.connected) {
      this.navCtrl.push(SettingsPage);
    }

    setInterval(() => {
      this.connected = this.shareService.getCoState();
      if (this.connected) {
        this.listRT = this.shareService.getData();
      }
    }, 1000);
}


  infoMsg(msg): void {
    switch (msg) {
      case 1: {
        let alert = this.alertCtrl.create({
          title: 'Vitesse du véhicule',
          subTitle: 'Vous renséigne sur la vitesse du véhicule en temps réel',
          buttons: ['OK']
        });
        alert.present();
        break;
      }
      case 2: {
        let alert = this.alertCtrl.create({
          title: 'Régime Moteur',
          subTitle: 'Vous renséigne sur le nombre de tour par minute du moteur',
          buttons: ['OK']
        });
        alert.present();
        break;
      }
      case 3: {
        let alert = this.alertCtrl.create({
          title: 'Température moteur (Huile)',
          subTitle: 'Vous renséigne sur la température de l\'huile du circuit moteur',
          buttons: ['OK']
        });
        alert.present();
        break;
      }
      case 4: {
        let alert = this.alertCtrl.create({
          title: 'Température moteur (Air)',
          subTitle: 'Vous renséigne sur la température ambiante du moteur',
          buttons: ['OK']
        });
        alert.present();
        break;
      }
      case 5: {
        let alert = this.alertCtrl.create({
          title: 'Niveau de carburant',
          subTitle: 'Vous donne le pourcentage de carburant présent dans le réservoir de la voiture',
          buttons: ['OK']
        });
        alert.present();
        break;
      }
      case 6: {
        let alert = this.alertCtrl.create({
          title: 'Consommation de carburant',
          subTitle: 'Vous renséigne sur consommation en litre par heure de carburant  du véhicule en temps réel',
          buttons: ['OK']
        });
        alert.present();
        break;
      }
      default: {
        break;
      }
    }
  }




}
