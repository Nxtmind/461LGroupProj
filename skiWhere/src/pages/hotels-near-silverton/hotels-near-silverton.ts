import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { FlightsPage } from '../flights/flights';
import { HttpClient } from '@angular/common/http';
import { ServerRequest } from '../../request/api';

@Component({
  selector: 'page-hotels-near-silverton',
  templateUrl: 'hotels-near-silverton.html'
})
export class HotelsNearSilvertonPage {

  api: ServerRequest;
  startDate : string;
  endDate : string;
  constructor(public navCtrl: NavController,public navParams: NavParams, private http: HttpClient) {
    this.api = ServerRequest.Instance();
    this.startDate = navParams.get('start');
    this.endDate = navParams.get('end');
    console.log(this.startDate);
    console.log(this.endDate);
  }



  load(){
    console.log(this.http.get('https://randomuser.me/api/?results=10'));
  }


  goToFlights(){
    this.navCtrl.push(FlightsPage,{
      start : this.startDate,
      end: this.endDate,
    });
  }
}
