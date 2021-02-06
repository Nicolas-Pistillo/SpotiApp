import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // Esto le dice a Angular que este servicio en cuestion esta hecho por nosotros
})

export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log('Servicio de Spotify listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({ // Aca definimos los headers de una peticion, en este caso el Token (Authorization) que nos pide la API de spotify
      'Authorization': 'Bearer BQCt3BS-i9DszPx2e7MzwMgkw1rP-h8BiLq4vdYcMzVyA6XbUUHxA21LZD3QoHsjyw3gI6gUdpMnnyAtcsM'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{ headers }) // Agregamos {opciones} a la peticion, en este caso los headers que definimos

  }

  getArtists(termino:string) {
    const headers = new HttpHeaders({ 
      'Authorization': 'Bearer BQCt3BS-i9DszPx2e7MzwMgkw1rP-h8BiLq4vdYcMzVyA6XbUUHxA21LZD3QoHsjyw3gI6gUdpMnnyAtcsM'
    })

    return this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=4`,{ headers })
  }
}
