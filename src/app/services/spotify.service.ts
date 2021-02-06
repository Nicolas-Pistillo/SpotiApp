import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; // Los reactive extensions tienen muchos operadores utiles para filtrar data en este caso 

@Injectable({
  providedIn: 'root' // Esto le dice a Angular que este servicio en cuestion esta hecho por nosotros
})

export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('Servicio de Spotify listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({ // Aca definimos los headers de una peticion, en este caso el Token (Authorization) que nos pide la API de spotify
      'Authorization': 'Bearer BQBW5nKrkRrHgZmaEfjdcSqKegUDszvv6nt4Md4-bpnzw4iAh17Zq-NLvMOmB_TwEXrBBmxx0Ec16KMuaGo'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{ headers })// Agregamos {opciones} a la peticion, en este caso los headers que definimos
    .pipe( map( data => data['albums'].items)); // Hacemos que la data en bruto busque una propiedad llamada albums))
  }

  getArtists(termino:string) {
    const headers = new HttpHeaders({ 
      'Authorization': 'Bearer BQBW5nKrkRrHgZmaEfjdcSqKegUDszvv6nt4Md4-bpnzw4iAh17Zq-NLvMOmB_TwEXrBBmxx0Ec16KMuaGo'
    })

    return this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=4`,{ headers })
    .pipe( map(data => data['artists'].items));
  }
}
