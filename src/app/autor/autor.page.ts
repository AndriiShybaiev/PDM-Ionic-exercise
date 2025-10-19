import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
  standalone: false
})
export class AutorPage implements OnInit, OnDestroy {

  autor: {
    name: string,
    email: string,
    twitter: string,
    phone: string
  };

  constructor() {
    console.log('Constructor AutorPage');

    this.autor = {
      name: 'Andrii', // <-- Замените вашими данными
      email: 'andrii@ejemplo.com',
      twitter: '@andrii',
      phone: '123456789'
    };
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
