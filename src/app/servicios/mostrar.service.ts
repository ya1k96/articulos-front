import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { io } from 'socket.io-client';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MostrarService {
  socket: any;
  private pantallasEvent$ = new Subject<any[]>();
  pantallasConectadas = [];

  constructor() { 
    this.socket = io(environment.url + '/pantalla');
  }
  
  conectar() {
    this.socket.connect();
    this.options();
  }
  
  desconectar() {
    this.socket.disconnect();
  }

  options() {
    //TODOS LOS EVENTOS QUE PUEDEN OCURRIR SE DECLARAN EN LA INICIALIZACION
    this.socket.on('socketOf', () => {
      this.desconectar();
    });
    this.socket.on('nuevaPantalla', (nuevaPantalla) => {
      this.pantallasConectadas.push(nuevaPantalla);
      this.pantallasEvent$.next(this.pantallasConectadas);
    });
    this.socket.on('pantallaEliminada', (pantalla_id) => {
      let pantalla_index = this.pantallasConectadas.indexOf((elem) => elem.client_id == pantalla_id);
      this.pantallasConectadas.splice(pantalla_index, 1);
      this.pantallasEvent$.next(this.pantallasConectadas);
    });
  }
  
  //EMITIR EVENTOS
  selectArt(articulo) {
    this.socket.emit('articulo', {articulo});
  }

  getPantallasConectadas() {
    return this.pantallasEvent$;
  }
}
