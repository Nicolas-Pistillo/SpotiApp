import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent {

  @Input() spotyData:any[] = []; // Recibimos un array (la data de la API de Spotify) de cualquier componente y la reutilizamos para armar las tarjetas

  constructor(private router:Router) { }

  verArtista(data:any) {

    let idArtista:string;

    if (data.type === 'artist') {
      idArtista = data.id;
    } else if (data.type === 'album') {
      idArtista = data.artists[0].id;
    }

    this.router.navigate([`artist/${idArtista}`]);
  }

}
