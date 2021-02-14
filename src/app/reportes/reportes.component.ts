import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../servicios/articles.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';
declare var $;

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  public listaLiquidaciones = [];
  public loading = true;
  public data: any = {};
  constructor(private articulos: ArticlesService) { }

  ngOnInit(): void {

    this.articulos.listaDeLiquidacion()
    .subscribe((resp: any) => {
      this.listaLiquidaciones = resp;
    })
    this.articulos.reporte()
    .subscribe((resp: any) => {
      this.loading = false;
      this.data = resp.data;
    });
  }

  getFecha(fecha) {
    return moment(fecha).format('l');
  }


  abrirModal() {
    Swal.fire({
      title: '<strong><u>Reporte</u></strong>',
      icon: 'info',
      html:`
      <div class="columns">
      <div class="column is-12">
            <div class="">
              <table class="table is-fullwidth" id="imprimir">
              <thead class="">
                <tr>          
                  <th>Total Articulos</th>
                  <th>Precio</th>
                  <th>SubTotal</th>
                </tr>
              </thead>
              <tfoot>
                <tr>          
                  <th></th>
                  <th></th>
                  <th colspan="3">Total $<span class="subtitle is-6" id="total">${ this.getTotal() }</span></th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <th><span id="cantEspecial">${ this.data.especial }</span> x Editados</th>
                  <td>${ this.data.precioEspecial }</td>
                  <td><span class="title is-6" id="subEsp">${ this.getSubtotalEspecial() }</span></td>
                </tr>
                <tr>
                  <th scope><span class="title is-6" id="cantNormal">${ this.data.normal }</span> x Normal</th>
                  <td>${ this.data.precioNormal }</td>
                  <td><span class="title is-6" id="subNormal">${ this.getSubTotalNormal() }</span></td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
  
       `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i>Guardar',
      confirmButtonAriaLabel: 'Guardar',
      cancelButtonText:
        '<i class="fa fa-thumbs-down" onclick="imprimirFactura()">Imprimir</i>',
      cancelButtonAriaLabel: 'Imprimir'
    });
  }

  getTotal() {
    return this.getSubTotalNormal() + this.getSubtotalEspecial();
  }

  getSubTotalNormal() {
    return this.data.precioNormal * this.data.normal;
  }
  
  getSubtotalEspecial() {
    return this.data.precioEspecial * this.data.especial;
  }

}
