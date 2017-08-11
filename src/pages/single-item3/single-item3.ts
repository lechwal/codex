import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

// Service import for items
import { ItemApicic } from '../../services/service';

@Component({
  selector: 'page-single-item3',
  templateUrl: 'single-item3.html',
  providers: [Http]
})
export class SingleItem3 {

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
