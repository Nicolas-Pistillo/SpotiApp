import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; // Los reactive extensions tienen muchos operadores utiles para filtrar data en este caso 

@Injectable({
  providedIn: 'root' // Esto hara el provide automaticamente en la raiz del proyecto, por lo que no tendremos que importarlo en el array de providers del app module
})

export class SpotifyService {

  constructor(private http:HttpClient) {}

  getQuery(query:string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({ 
      'Authorization': 'Bearer BQCLPXy6NGlSYIRNjjteb2i6cZLu3xCWmGHoyBURZ5RgPpmwofa4DIDCAU-mFQ1eHPYjvxpXKhy7Be8iWWg'
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
