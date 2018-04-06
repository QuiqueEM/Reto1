import { Component } from '@angular/core';
import { BusquedaService } from './busqueda.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BusquedaService]
})
export class AppComponent {
  title = 'app';
}
