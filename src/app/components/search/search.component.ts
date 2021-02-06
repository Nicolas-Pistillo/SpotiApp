import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private spotify:SpotifyService) { }

  artistasSearch:any[] = [];

  buscar(termino:string) {

    if (termino != '') {
      this.spotify.getArtists(termino)
    .subscribe((artista:any) => {
      this.artistasSearch = artista;
      console.log(artista);
    })
    }
  }

}
