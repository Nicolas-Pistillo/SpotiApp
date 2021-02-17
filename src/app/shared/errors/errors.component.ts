import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
})
export class ErrorsComponent implements OnInit {

  @Input () mensajeError:string;

  constructor() { }

  ngOnInit(): void {
  }

}
