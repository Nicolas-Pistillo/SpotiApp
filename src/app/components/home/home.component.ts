import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit { 

  constructor( private spotify:SpotifyService ) { 

  }

  spotyLanzamienos:any[] = [];

  ngOnInit(): void {
    this.spotify.getNewReleases()
    .subscribe((data:any) => { // Nos suscribimos a la respuesta de la peticion y guardamos los items que necesitamos (data.albums.items parseado)
      this.spotyLanzamienos = data.albums.items;

      console.log(this.spotyLanzamienos);
    });
  }

}
