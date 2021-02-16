import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; // Los reactive extensions tienen muchos operadores utiles para filtrar data en este caso 

@Injectable({
  providedIn: 'root' // Esto le dice a Angular que este servicio en cuestion esta hecho por nosotros
})

export class SpotifyService {

  constructor(private http:HttpClient) {}

  getQuery(query:string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({ 
      'Authorization': 'Bearer BQA_4tB3HelqHZqL0U0nTRUTfkM528EHywCk6bqocWIW3TtA3Cw0tYfBPIbNyQUH-hkbGHX872gPoP9jTzg'
    })

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map(data => data['albums'].items));
  }

  getArtists(termino:string) {
    return this.getQuery(`search?query=${termino}&type=artist&offset=0&limit=8`)
    .pipe( map (data => {
      return data['artists'].items;
    }))
  }

  getArtistById(idArtist:string) {
    return this.getQuery(`artists/${idArtist}`);
  }

  getTopTracks(idArtist:string) {
    return this.getQuery(`artists/${idArtist}/top-tracks?market=US`)
    .pipe(map(data => {
      return data['tracks'];
    }))
  }
}
