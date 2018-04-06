import { Injectable } from '@angular/core';
import { Resultado } from './resultado';//Importa clase
import { Http, Response} from '@angular/http';//Importa modulo Http y Response
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class BusquedaService {

  
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
      .catch(this.errorHandler);
  }

  errorHandler(error:Response){
    console.error(error);
    return Observable.throw(error || "Error de servidor");
  }
  //METODO PARA OBTENER RESULTADOS
  getResultados(){
    this.getDatos().subscribe(data => {      
      console.log(data);
      console.log(this.data = Array.of(this.data));
      this.data = data
    })
  }

}
