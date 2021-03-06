import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../busqueda.service';

@Component({
  selector: 'app-resultados-list',
  templateUrl: './resultados-list.component.html',
  styleUrls: ['./resultados-list.component.css']
})
export class ResultadosListComponent implements OnInit {
  resultados = [];
  mensageError: string;
  constructor(private busquedaService: BusquedaService) {}
  ngOnInit() {    
    this.busquedaService.getDatos()
    //.subscribe(resBusquedaData => this.resultados = Array.of(this.resultados),
    .subscribe(resBusquedaData => this.resultados = resBusquedaData,
                 resBusquedaError => this.mensageError = resBusquedaError);
                 
                 /*https://plnkr.co/edit/hfiJ3SQokGjOwsf9OviG?p=preview
                   https://forum.ionicframework.com/t/solved-ngfor-only-supports-binding-to-iterables-such-as-arrays/59597*/
  }

}
