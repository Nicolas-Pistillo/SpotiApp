import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  @ViewChild('navMenu') menu:ElementRef /* Traemos el decorador ViewChild para seleccionar un elemento
  de la vista del componente y al lado colocamos el nombre de su referencia junto al tipo :ElementRef */

  constructor() { }

  openMenu() {
    this.menu.nativeElement.classList.toggle('openMenu');
  }

}
