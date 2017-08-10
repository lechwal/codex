import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

// Import pages to allow links to the page
import { cPenalPage } from '../../pages/cPenal/cPenal';
import { cicPage } from '../../pages/cic/cic';

// Service import for items

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Http]
})
export class HomePage {

  // The items array to populate with data is created
  items: any;

  constructor(
              public navCtrl: NavController,
              public params:NavParams,
            )
            {}

  // This is where the data loads from the service.
  // It happens when the view loads for the first time.


  navigateTo(){
    this.navCtrl.push(cPenalPage)
  };
navigateTocic(){
    this.navCtrl.push(cicPage)
  }

}
