import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

// Import pages to allow links to the page
import {CategoryPage} from '../category/category'
import {CategoryCodePage} from '../categoryCode/categoryCode';


// Service import for items
import { ItemApi } from '../../services/service';

@Component({
  selector: 'page-cPenal',
  templateUrl: 'cPenal.html',
  providers: [Http]
})
export class cPenalPage {

  // The items array to populate with data is created
  items: any;

  constructor(
              public navCtrl: NavController,
              public params:NavParams,
              private itemApi: ItemApi
            )
            {}

  // This is where the data loads from the service.
  // It happens when the view loads for the first time.
  ionViewDidLoad() {
    this.itemApi.getItems().then(data => this.items = data);
  }


  // This function is an event to listen to clicks on elements.
  // The SingleItem Page has been included to be passed in this function.
  CategoryTapped($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'L1'
    });
  }

  CategoryTapped_2($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'L2T1'
    });
  }
    CategoryTapped_3($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'L2T1bis'
    });
  }

      CategoryTapped_4($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'L2T1ter'
    });
  }
  CategoryTapped_5($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'L2T1'
    });
  }

  CategoryTapped_6($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'L2T2'
    });
  }

    CategoryTapped_7($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'L2T3'
    });
  }

    CategoryTapped_8($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'L2T4'
    });
  }

    CategoryTapped_9($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'L2T5'
    });
  }

    CategoryTapped_10($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'L2T6'
    });
  }

    CategoryTapped_11($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'L2T7'
    });
  }

    CategoryTapped_12($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'L2T8'
    });
  }

    CategoryTapped_13($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'L2T9'
    });
  }

  CategoryTapped_14($event, category) {
    this.navCtrl.push(CategoryPage, {
        category: 'L2T10'
    });
  }
  CodeTapped_l1c1($event, code) {
    this.navCtrl.push(CategoryCodePage, {
        code: 'l1c1'
    });
  }

  CodeTapped_l1c2s1($event, code) {
    this.navCtrl.push(CategoryCodePage, {
        code: 'l1c2s1'
    });
  }
}
