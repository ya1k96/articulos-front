import { Component, OnDestroy, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { PantallaService } from '../servicios/pantalla.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit, OnDestroy {
  logged: boolean = false;
  input: string = '';
  articulo: any = null;
  
  constructor(private pservice: PantallaService) { 
    this.pservice.conectar();
  }

  ngOnInit(): void {
    this.pservice.mostrarArticulos()
    .subscribe((resp) => {
      console.log(resp);
      this.articulo = resp;
    });
  }

  ngOnDestroy(): void {
    this.pservice.desconectar();
  }

  login() {
    if(this.input.length < 5) {
      Swal.fire('Error', 'El espacio debe tener al menos 5 caracteres', 'error');
    } else {
      this.logged = true;
      this.pservice.authPantalla(this.input);
    }
  }

}
