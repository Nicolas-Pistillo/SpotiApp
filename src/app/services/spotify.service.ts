import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; // Los reactive extensions tienen muchos operadores utiles para filtrar data en este caso 

@Injectable({
  providedIn: 'root' // Esto le dice a Angular que este servicio en cuestion esta hecho por nosotros
})

export class SpotifyService {

  constructor(private http:HttpClient) {}

  headers = new HttpHeaders({ 
    'Authorization': 'Bearer BQCBq85S6AFWrCS_LiNv4e7ZAsOHMu0rJLs0bF-BKO14Swl4BcHq9pPC-Lb5SxiltnPGkPmhmmzn4rP3DYo'
  })

  getQuery(query:string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({ 
      'Authorization': 'Bearer BQDEAUSk2hOb1LsJny3kncCA2ejobIbJRle0nuG9XMbD_zPaP_A53Uf_p7ZlQzM3Yeg_ds2hIxhAh11Mr_c"'
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
