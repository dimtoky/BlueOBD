import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ShareServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShareService {

    data:string[];
    conected:boolean;

    constructor() {
      this.conected = false;
        this.data = [""];
    }

    setData(data, state) {
      console.log(data);
      this.conected = state;
      this.data = data;
    }

    getData() {
        return this.data;
    }

    getCoState(){
      return this.conected;
    }
}
