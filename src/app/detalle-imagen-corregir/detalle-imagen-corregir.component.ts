import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../servicios/articles.service';

@Component({
  selector: 'app-detalle-imagen-corregir',
  templateUrl: './detalle-imagen-corregir.component.html',
  styleUrls: ['./detalle-imagen-corregir.component.css']
})
export class DetalleImagenCorregirComponent implements OnInit {

  constructor(private articulos: ArticlesService, private route: ActivatedRoute) { }
  articulo: any;
  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.articulos.detalleImagenCorregir(id)
    .subscribe((resp: any) => {
      this.articulo = resp.result;
      console.log(this.articulo);
    });
  }

}
