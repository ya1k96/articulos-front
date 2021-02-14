import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { ArticlesService } from '../servicios/articles.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  items: boolean = true;
  forma: FormGroup;
  archivo: File;

  constructor(private formBuilder: FormBuilder, private articulos: ArticlesService) { }

  ngOnInit(): void {
    this.forma = this.formBuilder.group({
      file: ''
    });
  }

  fileEvent(file) {
    this.archivo = file.target.files[0];
  }

  subirArchivo() {
    let formData = new FormData();
    formData.append('file', this.archivo, this.archivo.name);
    let url = 'upload';

    if(!this.items) {
      url = 'upload-description';
    }

    this.articulos.subirArchivo(url, formData)
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
