import { ShareService } from './../../providers/share-service/share-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';



/**
 * Generated class for the AlertesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alertes',
  templateUrl: 'alertes.html',
})
export class AlertesPage {

  list = ["0"];
  connected;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private shareService: ShareService,
    public alertCtrl: AlertController) {



  }

  ionViewDidLoad(){
    setInterval(() => {
      this.connected = this.shareService.getCoState();
      if (this.connected) {
        this.list = this.shareService.getData();

      }
    }, 1000);
}

  infoAdd(msg) {
    switch (msg) {
      case 1: {
        let alert = this.alertCtrl.create({
          title: 'Contrôle du dosage air/carburant:',
          subTitle: 'CODE:P0303 ',
          message: 'Cylindre 3 : ratés d\'allumage détectés',
          buttons: ['OK']
        });
        if (this.list[6]!="0") {
          alert.present();
        }
        break;
      }
      case 2: {
        let alert = this.alertCtrl.create({
          title: 'Système d\'allumage',
          subTitle: 'CODE:P0303 ',
          message: 'Cylindre 3 : ratés d\'allumage détectés',

          buttons: ['OK']
        });
        if (this.list[7]!="0") {
          alert.present();
        }
        break;
      }
      case 3: {
        let alert = this.alertCtrl.create({
          title: 'Contrôle des émissions auxiliaires',
          subTitle: 'CODE:P0303 ',
          message: 'Cylindre 3 : ratés d\'allumage détectés',

          buttons: ['OK']
        });
        if (this.list[8]!="0") {
          alert.present();
        }
        break;
      }
      case 4: {
        let alert = this.alertCtrl.create({
          title: 'Contrôle du ralenti moteur',
          subTitle: 'CODE:P0303 ',
          message: 'Cylindre 3 : ratés d\'allumage détectés',

          buttons: ['OK']
        });
        if (this.list[9]!="0") {
          alert.present();
        }
        break;
      }
      case 5: {
        let alert = this.alertCtrl.create({
          title: 'Ordinateur de bord et sorties auxiliaires',
          subTitle: 'CODE:P0303 ',
          message: 'Cylindre 3 : ratés d\'allumage détectés',

          buttons: ['OK']
        });
        if (this.list[10]!="0") {
          alert.present();
        }
        break;
      }
      case 6: {
        let alert = this.alertCtrl.create({
          title: 'Contrôle de la transmission (boîte de vitesses)',
          subTitle: 'CODE:P0303 ',
          message: 'Cylindre 3 : ratés d\'allumage détectés',

          buttons: ['OK']
        });
        if (this.list[11]!="0") {
          alert.present();
        }
        break;
      }
      case 7: {
        let alert = this.alertCtrl.create({
          title: 'Propulsion hydride',
          subTitle: 'CODE:P0303 ',
          message: 'Cylindre 3 : ratés d\'allumage détectés',

          buttons: ['OK']
        });
        if (this.list[12]!="0") {
          alert.present();
        }
        break;
      }

      default: {
        break;
      }
    }

  }

}
