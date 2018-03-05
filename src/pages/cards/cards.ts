import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {
  tickets = [
    {
    id: 1,
    subject: 'ticket num #1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
    created_at: '26/01/2018',
    priority: 1
  },
  {
    id: 2,
    subject: 'ticket num #2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
    created_at: '26/01/2018',
    priority: 2
  },
  {
    id: 3,
    subject: 'ticket num #3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
    created_at: '26/01/2018',
    priority: 1
  },
  {
    id: 4,
    subject: 'ticket num #4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
    created_at: '26/01/2018',
    priority: 3
  },
];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

}
