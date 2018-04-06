import { Component, OnInit } from '@angular/core';
import { BusquedaService } from '../busqueda.service';

@Component({
  selector: 'app-resultados-list',
  templateUrl: './resultados-list.component.html',
  styleUrls: ['./resultados-list.component.css']
})
export class ResultadosListComponent implements OnInit {
  resultados = [];
  constructor(private busquedaService: BusquedaService) {}
  ngOnInit() {
    this.busquedaService.getDatos().subscribe(resBusquedaData => this.resultados = resBusquedaData)
  }

}
