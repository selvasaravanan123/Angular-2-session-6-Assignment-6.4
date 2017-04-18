import { ICricketList } from './interface/cricketer-list';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './cricketer-app.component.html',
  styleUrls: ['./cricketer-app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class AppComponent implements OnInit {

  /**Public variable */
  firstName: string;
  lastName: string;
  favShot: string;
  batmanBowler: string;
  cricketerDetail: ICricketList;
  submitted:boolean = false;

  ngOnInit() {
    /** Assign values to the variable after OnInit */
    this.firstName = 'Milind';
    this.lastName = 'Sud';
    this.favShot = 'Hook';
    this.batmanBowler = 'BatsMan';
  }

  /**Add a cricket */
  addCricketer(first, last, shot, batsmanBowler) {
    this.submitted = true;
    this.cricketerDetail = {
      firstName: first,
      lastName: last,
      favShot: shot,
      batsmanBowler: batsmanBowler
    }
    console.log(`Hi I am ${first} ${last} and my Favorite Shot is ${shot} and I am a ${batsmanBowler}`)
  }

}
