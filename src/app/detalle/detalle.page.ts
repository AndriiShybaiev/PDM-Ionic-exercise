import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasAPIService } from '../services/peliculasAPI.service';

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
    private peliculasAPIService: PeliculasAPIService
  ) {
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');

      const id = Number(idParam);

      this.peliculasAPIService.getPelicula(id).subscribe(
        (result: any) => {
          this.pelicula = result;
        },
        (err: any) => {
          console.log(err);
        }
      )
  }
}
