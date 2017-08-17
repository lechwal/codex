import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

// Import pages to allow links to the page
import { Category2Page } from '../../pages/category2/category2';

// Service import for items
import { ItemApicic } from '../../services/service';

@Component({
  selector: 'page-cic',
  templateUrl: 'cic.html',
  providers: [Http]
})
export class cicPage {

  // The items array to populate with data is created
  items: any;

  constructor(
              public navCtrl: NavController,
              public params:NavParams,
              private itemApicic: ItemApicic
            )
            {}

  // This is where the data loads from the service.
  // It happens when the view loads for the first time.
  ionViewDidLoad() {
    this.itemApicic.getItems().then(data => this.items = data);
  }

  // This function is an event to listen to clicks on elements.
  // The SingleItem Page has been included to be passed in this function.
  CategoryTapped($event, category) {
    this.navCtrl.push(Category2Page, {
        category: 'TP'
    });
  }

  CategoryTapped_2($event, category) {
    this.navCtrl.push(Category2Page, {
        category: 'L1'
    });
  }
    CategoryTapped_3($event, category) {
    this.navCtrl.push(Category2Page, {
        category: 'L2T1'
    });
  }

      CategoryTapped_4($event, category) {
    this.navCtrl.push(Category2Page, {
        category: 'L2T1ter'
    });
  }
  CategoryTapped_5($event, category) {
    this.navCtrl.push(Category2Page, {
        category: 'L2T2'
    });
  }

  CategoryTapped_6($event, category) {
    this.navCtrl.push(Category2Page, {
        category: 'L2T3'
    });
  }

    CategoryTapped_7($event, category) {
    this.navCtrl.push(Category2Page, {
        category: 'L2T4'
    });
  }

    CategoryTapped_8($event, category) {
    this.navCtrl.push(Category2Page, {
        category: 'L2T5'
    });
  }

    CategoryTapped_9($event, category) {
    this.navCtrl.push(Category2Page, {
        category: 'L2T6'
    });
  }

    CategoryTapped_10($event, category) {
    this.navCtrl.push(Category2Page, {
        category: 'L2T7'
    });
  }

    CategoryTapped_11($event, category) {
    this.navCtrl.push(Category2Page, {
        category: 'L2T8'
    });
  }

    CategoryTapped_12($event, category) {
    this.navCtrl.push(Category2Page, {
        category: 'L2T9'
    });
  }

    CategoryTapped_13($event, category) {
    this.navCtrl.push(Category2Page, {
        category: 'L2T10'
    });
  }



}
