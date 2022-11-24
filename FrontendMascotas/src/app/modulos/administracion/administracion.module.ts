import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { CrearProductoServicioComponent } from './productoServicio/crear-producto-servicio/crear-producto-servicio.component';
import { CrearProspectoComponent } from './prospecto/crear-prospecto/crear-prospecto.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { BuscarSucursalComponent } from './sucursal/buscar-sucursal/buscar-sucursal.component';
import { BuscarProductoServicioComponent } from './productoServicio/buscar-producto-servicio/buscar-producto-servicio.component';
import { BuscarProspectoComponent } from './prospecto/buscar-prospecto/buscar-prospecto.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal/editar-sucursal.component';
import { EditarProductoServicioComponent } from './productoServicio/editar-producto-servicio/editar-producto-servicio.component';
import { EditarProspectoComponent } from './prospecto/editar-prospecto/editar-prospecto.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { EliminarSucursalComponent } from './sucursal/eliminar-sucursal/eliminar-sucursal.component';
import { EliminarProductoServicioComponent } from './productoServicio/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { EliminarProspectoComponent } from './prospecto/eliminar-prospecto/eliminar-prospecto.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    CrearMascotaComponent,
    CrearPlanComponent,
    CrearSucursalComponent,
    CrearProductoServicioComponent,
    CrearProspectoComponent,
    BuscarUsuarioComponent,
    BuscarMascotaComponent,
    BuscarPlanComponent,
    BuscarSucursalComponent,
    BuscarProductoServicioComponent,
    BuscarProspectoComponent,
    EditarUsuarioComponent,
    EditarMascotaComponent,
    EditarPlanComponent,
    EditarSucursalComponent,
    EditarProductoServicioComponent,
    EditarProspectoComponent,
    EliminarUsuarioComponent,
    EliminarMascotaComponent,
    EliminarPlanComponent,
    EliminarSucursalComponent,
    EliminarProductoServicioComponent,
    EliminarProspectoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
