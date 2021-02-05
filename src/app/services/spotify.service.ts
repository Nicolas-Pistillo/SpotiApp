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
      'Authorization': 'Bearer BQBCA7xks6coumI3rhl6EwTuWYjC_l4f31EL6GTf7-xkXOFBiFddDvGTj7eqL72RuJZk4ivSdRhqHkkYams'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=15',{ headers }) // Agregamos {opciones} a la peticion, en este caso los headers que definimos

  }
}
