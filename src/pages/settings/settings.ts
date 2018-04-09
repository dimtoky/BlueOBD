import { ShareService } from './../../providers/share-service/share-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertController } from 'ionic-angular';






@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})

export class SettingsPage {


  devices;
  buff;
  connected = false;
  statut;
  list: string[] = ["0"];
  macAddress = "00:00:00:00:00:00";

  constructor(public navCtrl: NavController,
    private bs: BluetoothSerial,
    public alertCtrl: AlertController,
  private shareService: ShareService) {
   //this.showDevices();

    setInterval(() => {

      shareService.setData(this.list , this.connected);

      this.bs.isConnected().then(success => {
        this.connected = true;
        this.statut = "connecté";
        this.receiveData();
      }, failure => {
        this.connected = false;
        this.statut = "non-connecté";
      });

    }, 1000);

  }




  receiveData() {
    this.bs.readUntil("\n").then((data) => {
      this.buff = data;
    });
    this.list = this.buff.split("%");
  }



  connectBluetooth() {
    this.bs.connect(this.macAddress).subscribe((data) => {
      let alert = this.alertCtrl.create({
        title: 'Bluetooth',
        subTitle: data,
        buttons: ['ok']
      });
      alert.present();
    }, error => {
      let alert = this.alertCtrl.create({
        title: 'Bluetooth',
        subTitle: error,
        buttons: ['ok']
      });
      alert.present();
    });
  }


  showDevices() {
    this.bs.list().then((data) => {
      this.devices = data;
    });
  }

  setMacAddress(inp) {
    this.macAddress = inp["address"];
  }

}
