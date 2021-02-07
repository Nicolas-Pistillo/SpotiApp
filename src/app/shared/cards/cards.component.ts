import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent {

  @Input() spotyData:any[] = []; // Recibimos un array (la data de la API de Spotify) de cualquier componente y la reutilizamos para armar las tarjetas

  constructor() { }

}
