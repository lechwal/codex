import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { cPenalPage } from '../cPenal/cPenal';
import { cicPage } from '../cic/cic';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = cPenalPage;
  tab3Root = cicPage;

  constructor() {

  }
}
