import { Component, OnInit } from '@angular/core';
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
export class VideoclubPage implements OnInit {

  public peliculas: Pelicula[] = [];

  constructor() { }

  ngOnInit() {
    this.cargarPeliculas();
  }

  cargarPeliculas() {
    if (peliculasData && (peliculasData as any).default) {
      this.peliculas = (peliculasData as any).default;
    } else {
      this.peliculas = peliculasData as any;
    }
  }
}
