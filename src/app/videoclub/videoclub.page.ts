import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import * as peliculasData from '../../assets/lista_peliculas.json';

interface Pelicula {
  title: string;
  year: string;
  director: string;
  poster: string;
  synopsis: string;
}

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  standalone: false,
  styleUrls: ['./videoclub.page.scss']
})
export class VideoclubPage implements OnInit, OnDestroy {

  public peliculas: Pelicula[] = [];

  constructor(private router: Router) {
    console.log('Constructor VideoclubPage');
  }

  ngOnInit() {
    console.log('ngOnInit VideoclubPage');
    this.cargarPeliculas();
  }

  cargarPeliculas() {
    if (peliculasData && (peliculasData as any).default) {
      this.peliculas = (peliculasData as any).default;
    } else {
      this.peliculas = peliculasData as any;
    }
  }

  verPaginaDetalle(peli: Pelicula): void {
    this.router.navigate(['/detalle'], {
      state: {
        peliculaSeleccionada: peli
      }
    });
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
