import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Http import
import { HttpModule } from '@angular/http';

// Page imports
import { CategoryPage } from '../pages/category/category';
import { Category2Page } from '../pages/category2/category2';
import { Category3Page } from '../pages/category3/category3';
import { ListPage } from '../pages/list/list';
import { List2Page } from '../pages/list2/list2';
import { List3Page } from '../pages/list3/list3';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SingleItem } from '../pages/single-item/single-item';
import { cPenalPage } from '../pages/cPenal/cPenal';
import { cicPage } from '../pages/cic/cic';
import { cLoisPage } from '../pages/cLois/cLois';
import {CategoryCodePage} from '../pages/categoryCode/categoryCode'

// Service imports
import { ItemApi } from '../services/item-api.service';
import { ItemApicic } from '../services/item-api.service.cic';
import { ItemApicLois } from '../services/item-api.service.cLois';

// Native imports
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CategoryPage,
    Category2Page,
    Category3Page,
    ListPage,
    List2Page,
    List3Page,
    HomePage,
    SingleItem,
    TabsPage,
    cPenalPage,
    cicPage,
    cLoisPage,
    CategoryCodePage

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
    Category3Page,
    ListPage,
    List2Page,
    List3Page,
    HomePage,
    SingleItem,
    TabsPage,
    cPenalPage,
    cicPage,
    cLoisPage,
    CategoryCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ItemApi,
    ItemApicic,
    ItemApicLois,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
