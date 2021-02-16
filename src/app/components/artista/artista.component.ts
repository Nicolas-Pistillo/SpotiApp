import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {

  spotyIdArtista:string;
  spotyArtista:object;
  spotyTopTracks:any[];
  loading:boolean = true;

  constructor(private activatedRoute:ActivatedRoute, private spotify:SpotifyService) { 
    this.activatedRoute.params.subscribe(param => {
      this.spotyIdArtista = param.id;
    });

    this.spotify.getArtistById(this.spotyIdArtista)
    .subscribe(data => {
      this.spotyArtista = data;
      console.log(this.spotyArtista);
      this.loading = false;
    });

    this.spotify.getTopTracks(this.spotyIdArtista)
    .subscribe(data => {
      this.spotyTopTracks = data;
      console.log(this.spotyTopTracks)
    });
  }

  ngOnInit(): void {
    
  }

}
