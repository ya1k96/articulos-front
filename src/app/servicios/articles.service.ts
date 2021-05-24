import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  url = environment.url;

  constructor(private http: HttpClient) { 
  }

  subirArchivo(uri: string, file) {
    return this.http.post(this.url + '/' + uri + '?token=' + this.getToken(), file);
  }

  subirLote(file) {
    return this.http.post(this.url + '/imagenes' + '?token=' + this.getToken(), file);
  }

  subirImagen(forma, id: string) {
    return this.http.post(this.url + '/api/muestra-imagen/'+ id + '?token=' + this.getToken(), forma);
  }

  buscarCategoria(query: string) {
    return this.http.get(this.url + '/api/categorias/buscar?query=' + query)
  }

  articulos(pagina, cantidad, categoria) {
    return this.http.get(this.url + '/api/articulos/' + pagina + '?cantidad=' + cantidad + '&categoria=' + categoria)
    .pipe( map( (resp: any) =>  resp ) );
  }

  imagenes(pagina, cantidad) {
    return this.http.get(this.url + '/api/lista-imagenes/' + pagina + '?cantidad=' + cantidad);
  }

  buscarImagen(codigo: string) {
    return this.http.get(this.url + '/api/buscar-imagen?keyword=' + codigo);
  }

  imagenById(id: string) {
    return this.http.get(this.url + '/api/imagen/' + id);
  }

  getPantallas() {
    return this.http.get(this.url + '/api/getPantallas');
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
  
  listaFaltantes() {
    return this.http.get( this.url + '/faltantes' );    
  }

  listaParaCorregir(pagina, cantidad) {
    return this.http.get(this.url + '/api/lista-corregir/' + pagina + '?cantidad=' + cantidad )
    .pipe( map( (resp: any) =>  resp.result ) );
  }

  detalleImagenCorregir(id: string) {
    return this.http.get(this.url + '/api/imagen-corregir-detalle/' + id)
    .pipe( map( (resp: any) =>  resp.result ) );
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
