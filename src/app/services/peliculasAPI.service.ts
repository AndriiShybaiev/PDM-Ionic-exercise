import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PeliculasAPIService {

  private peliculas: {
    title: string;
    year: string;
    director: string;
    poster: string;
    synopsis: string;
  }[] | undefined;

  APIep = 'http://gbrain.dlsi.ua.es/videoclub/api/v1/catalog';

  constructor( public http: HttpClient ) {

  }

  getPeliculas() {
    return this.http.get(this.APIep);
  }

  getPelicula(id: number): any {
    return this.http.get(this.APIep + '/' + id);
  }
}
