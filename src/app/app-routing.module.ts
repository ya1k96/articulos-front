import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EsUsuarioGuard } from './guards/es-usuario.guard';
import { LoginComponent } from './login/login.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CargarComponent } from './cargar/cargar.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { UploadComponent } from './upload/upload.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { MostradorComponent } from './mostrador/mostrador.component';
import { VerComponent } from './ver/ver.component';
import { MostrarComponent } from './mostrar/mostrar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'imagenes',
    component: ImagenesComponent
  },
  {
    path: 'usuarios',
    canActivate: [EsUsuarioGuard],
    children: [
      {
        path: 'reportes',
        component: ReportesComponent
      },
      {
        path: 'cargar',
        component: UploadComponent
      },
      {
        path: 'upload-image',
        component: ImageUploadComponent
      },
      {
        path: 'mostrador',
        component: MostradorComponent        
      },
      {
        path: 'ver',
        component: VerComponent
      },
      {
        path: 'mostrar',
        component: MostrarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
