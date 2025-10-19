import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  standalone: false
})
export class DetallePage implements OnInit {

  public pelicula: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peliculasService: PeliculasService
  ) {
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam !== null) {
      const id = Number(idParam);

      this.pelicula = this.peliculasService.getPelicula(id);

      if (this.pelicula) {
        console.log('Película recibida en DetallePage:', this.pelicula.title);
      } else {
        this.volver();
      }
    } else {
      this.volver();
    }
  }

  volver() {
    console.log('No se recibieron datos de película, volviendo a /videoclub');
    this.router.navigate(['/videoclub']);
  }
}
