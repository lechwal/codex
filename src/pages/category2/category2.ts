import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

// Import pages to allow links to the page
import { SingleItem } from '../../pages/single-item/single-item';

// Service import for items
import { ItemApicic } from '../../services/service';

// The component imports the specific parts from the html and scss file.
// The Http provider is included to make the API call to the service.
@Component({
  selector: 'page-category2',
  templateUrl: 'category2.html',
  providers: [Http]
})

export class Category2Page {

  // The items array to populate with data is created
  items: any;
  passedcategory2: any;

  constructor(
              public navCtrl: NavController,
              private navParams:NavParams,
              private itemApicic: ItemApicic,
              public loadingController: LoadingController
            )
            {
              //this.category2 = this.navParams.data; // garder ici un category sans le 2
              this.passedcategory2 = this.navParams.get('category');
            }

  // ------------------------------------------------------------------------------------------
  // FUNCTIONS
  // ------------------------------------------------------------------------------------------

  // This is where the data loads from the service.
  // It happens when the view loads for the first time.
  ionViewDidLoad() {

    let loader = this.loadingController.create({
      content: "Getting items.."
    });
    loader.present();

    // Get the JSON data from our itemApi
    this.itemApicic.getItems().then(data => {
      loader.dismiss();
      this.items = data;
      this.items = this.items.filter(item => item.category == this.passedcategory2);
    });

  }

  // This function is an event to listen to clicks on elements.
  // The SingleItem Page has been included to be passed in this function.
  itemTapped($event, item) {
    this.navCtrl.push(SingleItem, item);
  }


}
