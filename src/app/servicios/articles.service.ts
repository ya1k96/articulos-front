import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private url: string = 'https://up-articulos.herokuapp.com';

  constructor(private http: HttpClient) { 
  }

  subirArchivo(uri: string, file) {
    return this.http.post(this.url + '/' + uri + '?token=' + this.getToken(), file);
  }

  subirImagen(file) {
    return this.http.post(this.url + '/imagenes' + '?token=' + this.getToken(), file);
  }

  articulos(pagina, cantidad) {
    return this.http.get(this.url + '/api/articulos/' + pagina + '?cantidad=' + cantidad)
    .pipe( map( (resp: any) =>  resp ) );
  }

  imagenes(pagina, cantidad) {
    return this.http.get(this.url + '/api/lista-imagenes/' + pagina + '?cantidad=' + cantidad);
  }

  buscarImagen(codigo: string) {
    return this.http.get(this.url + '/api/buscar-imagen?keyword=' + codigo);
  }

  buscarArticulos(codigo: string) {
    return this.http.get(this.url + '/api/buscarArticulo?codigo=' + codigo);
  }
  
  reporte() {
    return this.http.get( this.url + '/api/liquidar?token=' + this.getToken() );    
  }

  listaDeLiquidacion() {
    return this.http.get( this.url + '/api/liquidacion-list?token=' + this.getToken() );    
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
