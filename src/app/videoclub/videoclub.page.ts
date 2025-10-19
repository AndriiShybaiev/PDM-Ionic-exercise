import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';


@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
  standalone: false
})
export class VideoclubPage implements OnInit, OnDestroy {

  listaPeliculas: any[] = [];

  constructor(
    private router: Router,
    private peliculasService: PeliculasService
  ) {
    console.log('Constructor VideoclubPage');

    this.listaPeliculas = this.peliculasService.getPeliculas();
  }

  verPaginaDetalle(id: number): void {
    console.log('Enviando id a /detalle:', id);

    this.router.navigate(['/detalle', id]);
  }

  ngOnInit() {
    console.log('ngOnInit VideoclubPage');
  }
  ionViewWillEnter() {
    console.log('ionViewWillEnter VideoclubPage');
  }
  ionViewDidEnter() {
    console.log('ionViewDidEnter VideoclubPage');
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave VideoclubPage');
  }
  ionViewDidLeave() {
    console.log('ionViewDidLeave VideoclubPage');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy VideoclubPage');
  }
}
