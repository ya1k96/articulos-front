import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticlesService } from '../servicios/articles.service';
import { MostrarService } from '../servicios/mostrar.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

  public loading: boolean = true;  
  public buscarFlag: boolean = false;
  public listaImagenes = [];
  public mostrarCantidad: number = 10;
  public listaCantidad = [10, 25, 50, 100];
  public paginaActual = 1;
  public listaPaginas = [];
  public totalPages: number;
  public query: string;
  public cantForm: FormGroup;
  pantallaSeleccionada = '';
  usuarioPantallaSeleccionada = '';
  pantallasPresentes = [];
  articulo: any = {};

  constructor(private articulos: ArticlesService, 
    private formBuilder: FormBuilder, 
    private mostrar: MostrarService) { 
    this.mostrar.conectar();
  }

  ngOnInit(): void {
    this.cantForm = this.formBuilder.group({
      cantidadAMostrar: 10
    });
    this.getPagina(1);  
    
    this.mostrar.getPantallasConectadas()
    .subscribe((resp) => this.pantallasPresentes = resp);
    
    this.getPantallasPresentes();

  } 
  
  cambiarPagina( pagina: number ) {
    this.loading = true;
    this.listaPaginas = [];
    this.listaImagenes = [];
    this.paginaActual = pagina;
    this.buscarFlag = false;
    this.getPagina(pagina);
  }

  buscarArticulo(query) {
    this.query = query;
    this.buscarFlag = true;
    this.loading = true;
    this.listaPaginas = [];
    this.listaImagenes = [];
    this.articulos.buscarImagen(query)
    .subscribe((resp: any) => {
      this.loading = false;
      this.listaImagenes = resp.docs;
    });
  }

  seleccionarArticulo(articulo) {
    this.articulo = articulo;
  }

  mostrarArticulo() {
    this.articulo.client_id = this.pantallaSeleccionada;
    this.mostrar.selectArt(this.articulo);
  }

  getPagina(index: number) {
    this.articulos.imagenes(index, this.mostrarCantidad).subscribe((resp: any) => {
      //Obtenermos solo la lista de articulos
      this.listaImagenes = resp.result.docs;
      //Buscamos la info y despues borramos la lista

      this.setConfigs(resp.result);

      this.loading = false;  
    });
  }

  cantidadMostrar() {

    this.mostrarCantidad = this.cantForm.controls.cantidadAMostrar.value;
    this.cambiarPagina(this.paginaActual);
  }

  getPantallasPresentes() {
    this.articulos.getPantallas()
    .subscribe((resp: any) => {
      this.pantallasPresentes = resp.pantallas;
    });

  }

  elegirPantalla(cliente, usuario) {
    this.usuarioPantallaSeleccionada = usuario;
    this.pantallaSeleccionada = cliente;
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
