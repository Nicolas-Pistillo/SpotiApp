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
      'Authorization': 'Bearer BQDIKTa4aS_fp_VbGQppPZajSZh7yrWO1l_WW-hgYt63vEFkQUnZVSfV0Jhgro8QE2Aqn0Gp1dQRXhuVO6g'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{ headers }) // Agregamos {opciones} a la peticion, en este caso los headers que definimos

  }

  getArtists(termino:string) {
    const headers = new HttpHeaders({ 
      'Authorization': 'Bearer BQDIKTa4aS_fp_VbGQppPZajSZh7yrWO1l_WW-hgYt63vEFkQUnZVSfV0Jhgro8QE2Aqn0Gp1dQRXhuVO6g'
    })

    return this.http.get(`https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=4`,{ headers })
  }
}
