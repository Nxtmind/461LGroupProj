import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { ResortsPage } from '../resorts/resorts';
import { CalendarComponentOptions } from 'ion2-calendar';

@Component({
  selector: 'page-when',
  templateUrl: 'when.html'
})
export class WhenPage {
  
  dateRange: { from: any; to: any; };
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
  pickMode: 'range'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }
  
  goToResorts(){
      if (this.dateRange != undefined){
        this.navCtrl.push(ResortsPage,{
          start : this.dateRange.from.format("YYYY-MM-DD"),
          end: this.dateRange.to.format("YYYY-MM-DD"),
        });     
    }
  }
}
