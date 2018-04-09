import { AlertesPage } from './../alertes/alertes';
import { Component } from '@angular/core';
import { SettingsPage } from '../settings/settings';
import { ChartsPage } from '../charts/charts';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SettingsPage;
  tab3Root = ChartsPage;
  tab4Root = AlertesPage;
  constructor() {

  }
}
