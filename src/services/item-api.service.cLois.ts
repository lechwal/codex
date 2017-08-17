import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ItemApicLois {

  constructor(private http: Http) {}

  getItems(){
    return new Promise(resolve => {
        this.http.get('assets/cLois.json')
          .subscribe(res => resolve(res.json()));
    });
  }

}
