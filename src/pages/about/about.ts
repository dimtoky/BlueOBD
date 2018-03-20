import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

@NgModule({
  providers: [
    BluetoothSerial
  ]
})

export class AboutPage {


  constructor(public navCtrl: NavController,
              private bs: BluetoothSerial,
              public alertCtrl: AlertController) {


  }



  enableBluetooth() {
    this.bs.available()
  }




}
