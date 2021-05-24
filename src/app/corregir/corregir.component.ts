import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticlesService } from '../servicios/articles.service';

@Component({
  selector: 'app-corregir',
  templateUrl: './corregir.component.html',
  styleUrls: ['./corregir.component.css']
})
export class CorregirComponent implements OnInit {
  public loading: boolean = true;  
  public listaArticulos = [];
  public mostrarCantidad: number = 10;
  public listaCantidad = [10, 25, 50, 100];
  public paginaActual = 1;
  public listaPaginas = [];
  public totalPages: number;
  public cantForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private articulos: ArticlesService) { }

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
    this.getPagina(pagina);
  }


  getCategoria() {
    this.loading = true;
    this.listaPaginas = [];
    this.getPagina(1);
  }

  getPagina(index: number) {
    this.articulos.listaParaCorregir(index, this.mostrarCantidad).subscribe((resp: any) => {
      console.log(resp);
      //Obtenermos solo la lista de articulos
      this.listaArticulos = resp.docs;
      //Buscamos la info y despues borramos la lista

      this.setConfigs(resp.docs);
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
