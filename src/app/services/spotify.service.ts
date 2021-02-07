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
      'Authorization': 'Bearer BQB3r32s27SFCwgSdY3D_C6rEJ08HBsa3JPK4xcSmAtV8OEjEMPAk7sbLNh0dEun6Vt8HGe0XK_5UkNh07Y'
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
}
