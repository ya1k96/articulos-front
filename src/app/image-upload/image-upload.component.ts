import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticlesService } from '../servicios/articles.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {
  archivos = [];
  progressBarStatus: number = 0;
  loading: boolean = false;
  forma: FormGroup;

  constructor(private formBuilder: FormBuilder, private articulos: ArticlesService) { }

  ngOnInit(): void {
    this.forma = this.formBuilder.group({
      file: ''
    });
  }

  fileEvent(file) {
    console.log(file.target.files)
    this.archivos = file.target.files;
  }

  subirArchivo() {
    this.loading = true;

    for (let index = 0; index < this.archivos.length; index++) {
      const img = this.archivos[index];
      let formData = new FormData();
      formData.append('image', img, img.name);
      
      this.articulos.subirImagen(formData)
      .subscribe((resp: any) => {    
        if( this.progressBarStatus < 100 ) {
          this.progressBarStatus = this.progressBarStatus + 1;

        }   

      });
    }

    this.progressBarStatus = 100;

    setTimeout(() => {

      this.loading = false;
  
      Swal.fire({
        icon: 'success',
        title: 'Correcto',
        text: 'El archivo fue cargado con exito'
      });    
    }, 2000);

    this.forma.reset();

  }


}
