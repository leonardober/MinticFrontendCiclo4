import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsignarMascotaUsuarioComponent } from './modulos/mascota/asignar-mascota-usuario/asignar-mascota-usuario.component';
import { AsignarMascotaAsesorComponent } from './modulos/mascota/asignar-mascota-asesor/asignar-mascota-asesor.component';
import { BarraNavegacionComponent } from './plantilla/barra-navegacion/barra-navegacion.component';
import { PiePaginaComponent } from './plantilla/pie-pagina/pie-pagina.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    AsignarMascotaUsuarioComponent,
    AsignarMascotaAsesorComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
