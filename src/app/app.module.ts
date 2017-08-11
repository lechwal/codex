import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Http import
import { HttpModule } from '@angular/http';

// Page imports
import { CategoryPage } from '../pages/category/category';
import { Category2Page } from '../pages/category2/category2';
import { ListPage } from '../pages/list/list';
import { List2Page } from '../pages/list2/list2';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SingleItem } from '../pages/single-item/single-item';
import { SingleItem2 } from '../pages/single-item2/single-item2';
import { SingleItem3 } from '../pages/single-item3/single-item3';
import { cPenalPage } from '../pages/cPenal/cPenal';
import { cicPage } from '../pages/cic/cic';

// Service imports
import { ItemApi } from '../services/item-api.service';
import { ItemApicic } from '../services/item-api.service.cic';

// Native imports
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CategoryPage,
    Category2Page,
    ListPage,
    List2Page,
    HomePage,
    SingleItem,
    SingleItem2,
    SingleItem3,
    TabsPage,
    cPenalPage,
    cicPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoryPage,
    Category2Page,
    ListPage,
    List2Page,
    HomePage,
    SingleItem,
    SingleItem2,
    SingleItem3,
    TabsPage,
    cPenalPage,
    cicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ItemApi,
    ItemApicic,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
