import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
  standalone: false
})
export class PortfolioPage implements OnInit, OnDestroy {

  constructor() {
    console.log('Constructor PortfolioPage');
  }

  ngOnInit() {
    console.log('ngOnInit PortfolioPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter PortfolioPage');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter PortfolioPage');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave PortfolioPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave PortfolioPage');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy PortfolioPage');
  }

}
