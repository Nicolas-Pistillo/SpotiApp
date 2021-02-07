import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private spotify:SpotifyService) { }

  spotyArtistas:any[] = [];
  loading:boolean = false;

  buscar(termino:string) {

    this.loading = true;

    if (termino != '') {
      this.spotify.getArtists(termino)
    .subscribe((artista:any) => {
      this.spotyArtistas = artista;
      this.loading = false;
      console.log(artista);
      })
    } else {
      this.loading = false;
    }
  }

}
