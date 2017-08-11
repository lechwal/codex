import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ItemApicic {

  constructor(private http: Http) {}

  getItems(){
    return new Promise(resolve => {
        this.http.get('assets/cic.json')
          .subscribe(res => resolve(res.json()));
    });
  }

}
