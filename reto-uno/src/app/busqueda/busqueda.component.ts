import { Component, OnInit } from '@angular/core';
import { Resultado } from '../resultado';//Importa clase
import { Http, Response} from '@angular/http';//Importa modulo Http y Response
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})


export class BusquedaComponent implements OnInit {

  resultado: Resultado ;
  //Declara privada la URL de la API
  private apiURL = 'http://www.liverpool.com.mx/tienda?s=nintendo&d3106047a194921c01969dfdec083925=json';  
  data: any = {};
  
  //LLAMA METODOS EN EL CONSTRUCTOR
  constructor(private http: Http) { 
    console.log("Inicia llamado duro a la API");
    this.getResultados();
    this.getDatos();
  }

  //METODO PARA OBTENER DATOS
  getDatos(){
    return this.http.get(this.apiURL)
      .map((res: Response) => res.json())  
  }
  //METODO PARA OBTENER RESULTADOS
  getResultados(){
    this.getDatos().subscribe(data => {
      console.log(data);
      this.data = data
    })
  }

  ngOnInit() {
  }

}
