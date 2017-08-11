import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

// Service import for items
import { ItemApicic } from '../../services/service';

@Component({
  selector: 'page-single-item2',
  templateUrl: 'single-item2.html',
  providers: [Http]
})
export class SingleItem2 {

  item: any;

  constructor(
              public navCtrl: NavController,
              private navParams:NavParams,
              private itemApi: ItemApicic
            )
            {
              this.item = this.navParams.data;
              console.log(this.item);
            }

  // ------------------------------------------------------------------------------------------
  // FUNCTIONS
  // ------------------------------------------------------------------------------------------


}
