import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasAPIService } from '../services/peliculasAPI.service';


@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
  standalone: false
})
export class VideoclubPage implements OnInit, OnDestroy {

  listaPeliculas: any[] = [];
  modoLista = true

  constructor(
    private router: Router,
    private peliculasAPIService: PeliculasAPIService
  ) {
    console.log('Constructor VideoclubPage');

  peliculasAPIService.getPeliculas().subscribe(
      (result: any) => {
        this.listaPeliculas = result;
      },
      (err: any) => {
        console.log(err);
      }
    )
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

  cambiarVista() {
    this.modoLista = !this.modoLista;
  }
}
