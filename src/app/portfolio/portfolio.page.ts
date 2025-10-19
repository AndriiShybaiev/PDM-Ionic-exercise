import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
  standalone: false
})
export class PortfolioPage implements OnInit, OnDestroy {

  listaTrabajos: {
    titulo: string,
    desc: string,
    fecha: string,
    enlace?: string
  }[];

  constructor() {
    console.log('Constructor PortfolioPage');

    this.listaTrabajos = [
      {
        titulo: 'App TFG Front en Angular',
        desc: 'Front End de Trabajo de Fin de Grado',
        fecha: '2023',
        enlace: 'https://github.com/AndriiShybaiev/TFG-angular-front'
      },
      {
        titulo: 'Expense Tracker Pet Project',
        desc: 'A full-stack application for tracking personal expenses.',
        fecha: '2025',
        enlace: 'https://github.com/AndriiShybaiev/Expense_tracker'
      },
      {
        titulo: 'Videoclub',
        desc: 'Práctica del curso de Ionic (ese misma app)',
        fecha: '2025',
        enlace: 'https://github.com/AndriiShybaiev/PDM-Ionic-exercise'
      }
    ];
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
