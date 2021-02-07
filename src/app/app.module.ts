import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// HTTP
import { HttpClientModule } from '@angular/common/http';

// Servicios
import { SpotifyService } from './services/spotify.service';

// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { CardsComponent } from './shared/cards/cards.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { ArtistaComponent } from './components/artista/artista.component';

// RUTAS
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

// PIPES
import { NoImagePipe } from './pipes/no-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    UsersComponent,
    NoImagePipe,
    CardsComponent,
    LoadingComponent,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, {useHash: true} ),
    HttpClientModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
