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
import { RevisarImagenComponent } from './revisar-imagen/revisar-imagen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CorregirComponent } from './corregir/corregir.component';
import { DetalleImagenCorregirComponent } from './detalle-imagen-corregir/detalle-imagen-corregir.component';

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
    path: 'dashboard',
    canActivate: [EsUsuarioGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      },
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
        path: 'lista-corregir',
        component: CorregirComponent
      },
      {
        path: 'imagenes',
        children: [
          {
            path: '',
            component: ImagenesComponent,
          },
          {
            path:'detalle/:id',
            component: RevisarImagenComponent
          }
        ]
      }
      
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
