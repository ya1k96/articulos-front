import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ArticlesService } from '../servicios/articles.service';

@Component({
  selector: 'app-revisar-imagen',
  templateUrl: './revisar-imagen.component.html',
  styleUrls: ['./revisar-imagen.component.css']
})
export class RevisarImagenComponent implements OnInit {
  id: string;
  loading = true;
  articulo: any;
  archivo: File;
  forma: FormGroup;
  aprobado = false;
  calificar = false;

  constructor(private route: ActivatedRoute, private articulos: ArticlesService, private form: FormBuilder) { }

  ngOnInit(): void {
    //Formulario para la obseravacion
    this.forma = this.form.group({
      comentario: ['', Validators.required],
      autor: '',
      file: ''
    });

    this.id = this.route.snapshot.paramMap.get('id');
    this.articulos.detalleImagenCorregir(this.id)
    .subscribe((resp: any) => {
      this.articulo = resp;
      console.log(resp);
      this.loading = false;
    });
  }

  fileEvent(file) {
    this.archivo = file.target.files[0];
  }

  subirArchivo() {
    let formData = new FormData();
    formData.append('file', this.archivo, this.archivo.name);
    formData.append('comentario', this.forma.get('comentario').value);
    formData.append('autor', this.forma.get('autor').value);    
    let url = 'upload';

    if(!this.forma.valid) {
      return Swal.fire({
        icon: 'warning',
        title: 'Campo incompleto',
        text: 'Como minimo, debes completar con un comentario.'
      });
    }

    this.articulos.subirImagen(formData, this.id)
    .subscribe((resp: any) => {
      if(resp.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Correcto',
          text: 'El archivo fue cargado con exito'
        });

        this.forma.reset();
      }

    });
  }
}
