import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SettingsPage } from '../pages/settings/settings';
import { ChartsPage } from '../pages/charts/charts';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Injectable } from '@angular/core'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { AlertesPage } from '../pages/alertes/alertes';
import { ShareService} from '../providers/share-service/share-service';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    ChartsPage,
    HomePage,
    TabsPage,
    AlertesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'BlueOBDdb',
         driverOrder: [ 'sqlite','indexeddb', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    ChartsPage,
    HomePage,
    TabsPage,
    AlertesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    ShareService,
    IonicStorageModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
