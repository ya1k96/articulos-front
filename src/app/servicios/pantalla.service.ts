import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PantallaService {
  socket: any;
  private articuloMostrar$ = new Subject<any[]>();

  constructor() { 
    this.socket = io(environment.url + '/pantalla');
    this.conectar();
  }
  
  conectar() {
    this.socket.connect();
    this.options();
  }
  
  desconectar() {
    this.socket.disconnect();
  }

  options() {
    this.socket.on('socketOf', () => {
      this.desconectar();
    });
    this.socket.on('mostrarArticulo', (socket) => {
      console.log('articulo a mostrar: !')
      this.articuloMostrar$.next(socket.articulo);
    });
  }

  authPantalla(user: string) {
    this.socket.emit('login', {user});
  }

  mostrarArticulos() {
    return this.articuloMostrar$;
  }
  
}