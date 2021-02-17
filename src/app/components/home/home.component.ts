import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 

  spotyLanzamientos:any[];
  loading:boolean = true;

  error:boolean;
  mensajeError:string;

  constructor( private spotify:SpotifyService ) { 
    this.error = false;
  }

  ngOnInit(): void {
    this.spotify.getNewReleases()
    .subscribe((data:any) => { // Nos suscribimos a la respuesta de la peticion y guardamos los items que necesitamos.
      this.spotyLanzamientos = data; // Recibimos la data YA filtrada desde el spotify.service utilizando el operador map.
    }, (serviceError) => {  // Capturamos el mensaje del posible error que pudiera generarse en el proceso de la peticion
      this.error = true;
      this.loading = false;
      this.mensajeError = serviceError.error.error.message;
    },() => {
      this.loading = false; // Cuando se halla completado la peticion, removemos el loader
    });
  }

}
