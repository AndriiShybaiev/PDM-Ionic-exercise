import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
  standalone: false
})
export class AutorPage implements OnInit, OnDestroy {

  constructor() {
    console.log('Constructor AutorPage');
  }

  ngOnInit() {
    console.log('ngOnInit AutorPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter AutorPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter AutorPage');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave AutorPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave AutorPage');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy AutorPage');
  }

}
