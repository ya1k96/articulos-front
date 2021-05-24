import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import {ArticlesService} from './servicios/articles.service';
import { PaginationComponent } from './componentes/pagination/pagination.component';
import { TableArtsComponent } from './componentes/table-arts/table-arts.component';
import { BloqComponent } from './bloq/bloq.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CargarComponent } from './cargar/cargar.component';
import { ReportesComponent } from './reportes/reportes.component';
import { LoadingComponent } from './componentes/loading/loading.component';
import { UploadComponent } from './upload/upload.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HaceCuantoPipe } from './pipes/hace-cuanto.pipe';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { MostradorComponent } from './mostrador/mostrador.component';
import { VerComponent } from './ver/ver.component';
import { MostrarService } from './servicios/mostrar.service';
import { PantallaService } from './servicios/pantalla.service';
import { RevisarImagenComponent } from './revisar-imagen/revisar-imagen.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CorregirComponent } from './corregir/corregir.component';
import { DetalleImagenCorregirComponent } from './detalle-imagen-corregir/detalle-imagen-corregir.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PaginationComponent,
    TableArtsComponent,
    BloqComponent,
    LoginComponent,
    CargarComponent,
    ReportesComponent,
    LoadingComponent,
    UploadComponent,
    ImagenesComponent,
    HaceCuantoPipe,
    ImageUploadComponent,
    MostradorComponent,
    VerComponent,
    RevisarImagenComponent,
    DashboardComponent,
    CorregirComponent,
    DetalleImagenCorregirComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ArticlesService,
    MostrarService,
    PantallaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
