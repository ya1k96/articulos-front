import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {ArticlesService} from '../servicios/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loading: boolean = true;  
  public buscarFlag: boolean = false;
  public listaArticulos = [];
  public mostrarCantidad: number = 10;
  public listaCantidad = [10, 25, 50, 100];
  public paginaActual = 1;
  public listaPaginas = [];
  public totalPages: number;
  public ultActulizacion: string;
  public query: string;
  public cantForm: FormGroup;

  constructor(private articulos: ArticlesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cantForm = this.formBuilder.group({
      cantidadAMostrar: 10
    });
    this.getPagina(1);  
    
  }
  
  cambiarPagina( pagina: number ) {
    this.loading = true;
    this.listaPaginas = [];
    this.listaArticulos = [];
    this.paginaActual = pagina;
    this.buscarFlag = false;
    this.getPagina(pagina);
  }

  buscarArticulo(query) {
    this.query = query;
    this.buscarFlag = true;
    this.loading = true;
    this.listaPaginas = [];
    this.listaArticulos = [];
    this.articulos.buscarArticulos(query)
    .subscribe((resp: any) => {
      this.loading = false;
      this.listaArticulos = resp.resp;
    });
  }

  getPagina(index: number) {
    this.articulos.articulos(index, this.mostrarCantidad).subscribe(resp => {
      //Obtenermos solo la lista de articulos
      this.listaArticulos = resp.items.doc.docs;
      //Buscamos la info y despues borramos la lista

      this.setConfigs(resp.items.doc);
      this.ultActulizacion = resp.items.fecha;

      this.loading = false;  
    });
  }

  cantidadMostrar() {

    this.mostrarCantidad = this.cantForm.controls.cantidadAMostrar.value;
    this.cambiarPagina(this.paginaActual);
  }

  setConfigs(infoPage) {
    this.totalPages = infoPage.totalPages;
    if(infoPage.totalPages  !== 0) {

      if( (infoPage.prevPage-1) > 0 ) {
        this.listaPaginas.push(infoPage.prevPage-1);

      }      
      if( infoPage.prevPage >= 1) {
        this.listaPaginas.push(infoPage.prevPage);

      }

      this.listaPaginas.push(infoPage.page);

      this.listaPaginas.push(infoPage.nextPage);

      if( (infoPage.nextPage++) < infoPage.totalPages ) {
        this.listaPaginas.push(infoPage.nextPage++);

      }
    }

  }
  
}
