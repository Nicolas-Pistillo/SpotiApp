import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  data_users:object;

  constructor(private http:HttpClient) { /* Creamos un atributo privado de la clase HttpClient 
    para acceder a las propiedades y metodos y trabajar con peticiones HTTP*/

    this.http.get('https://jsonplaceholder.typicode.com/users') //Realizamos una peticion GET (metodo) pasandole la URL de los recursos
    .subscribe( data => { /* En el momento en que los datos de los recursos esten listos, 
    estaran disponibles en "data", el cual esta subscrito a la peticion*/
      this.data_users = data;
    });

  }

  ngOnInit(): void {
  }

}
