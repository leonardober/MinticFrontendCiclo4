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
import { ServiciosComponent } from './plantilla/components/servicios/servicios.component';
import { AboutComponent } from './plantilla/components/about/about.component';
import { TeamComponent } from './plantilla/components/team/team.component';
import { ContactComponent } from './plantilla/components/contact/contact.component';
import { RegisterComponent } from './plantilla/components/register/register.component';
import { IniciarSesionComponent } from './plantilla/components/iniciar-sesion/iniciar-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    AsignarMascotaUsuarioComponent,
    AsignarMascotaAsesorComponent,
    BarraNavegacionComponent,
    PiePaginaComponent,
    InicioComponent,
    ErrorComponent,
    ServiciosComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    RegisterComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
