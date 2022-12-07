import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarMascotaComponent } from '../administracion/mascota/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from '../administracion/mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from '../administracion/mascota/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from '../administracion/mascota/eliminar-mascota/eliminar-mascota.component';
import { BuscarPlanComponent } from '../administracion/plan/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from '../administracion/plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from '../administracion/plan/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from '../administracion/plan/eliminar-plan/eliminar-plan.component';
import { BuscarProductoServicioComponent } from '../administracion/productoServicio/buscar-producto-servicio/buscar-producto-servicio.component';
import { CrearProductoServicioComponent } from '../administracion/productoServicio/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from '../administracion/productoServicio/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from '../administracion/productoServicio/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { BuscarProspectoComponent } from '../administracion/prospecto/buscar-prospecto/buscar-prospecto.component';
import { CrearProspectoComponent } from '../administracion/prospecto/crear-prospecto/crear-prospecto.component';
import { EditarProspectoComponent } from '../administracion/prospecto/editar-prospecto/editar-prospecto.component';
import { EliminarProspectoComponent } from '../administracion/prospecto/eliminar-prospecto/eliminar-prospecto.component';
import { BuscarSucursalComponent } from '../administracion/sucursal/buscar-sucursal/buscar-sucursal.component';
import { CrearSucursalComponent } from '../administracion/sucursal/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from '../administracion/sucursal/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from '../administracion/sucursal/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarUsuarioComponent } from '../administracion/usuario/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from '../administracion/usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from '../administracion/usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from '../administracion/usuario/eliminar-usuario/eliminar-usuario.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';

const routes: Routes = [
  {
    path:"cargaFormularios",
    component:IdentificacionComponent
  },

  {
    path:"identificar",
    component:IdentificacionComponent
  },
  {
    path:"cerrarSesion",
    component:CerrarSesionComponent
  },
  {
    path:"crear-usuario",
    component:CrearUsuarioComponent
  },
  {
    path:"buscar-usuario",
    component:BuscarUsuarioComponent
  },
    {
      path:"editar-usuario",
      component:EditarUsuarioComponent
    },
    {
      path:"eliminar-usuario",
      component:EliminarUsuarioComponent
    },
    {
      path:"crear-mascota",
      component:CrearMascotaComponent
    },
    {
      path:"buscar-mascota",
      component:BuscarMascotaComponent
    },
    {
      path:"editar-mascota",
      component:EditarMascotaComponent
    },
    {
      path:"eliminar-mascota",
      component: EliminarMascotaComponent
    },
    {
      path:"crear-plan",
      component:CrearPlanComponent
    },
    {
      path:"buscar-plan",
      component: BuscarPlanComponent
    },
    {
      path:"eliminar-plan",
      component: EliminarPlanComponent
    },
    {
      path:"crear-sucursal",
      component: CrearSucursalComponent
    },
    {
      path:"buscar-sucursal",
      component: BuscarSucursalComponent
    },
    {
      path:"editar-sucursal",
      component: EditarSucursalComponent
    },
    {
      path:"eliminar-sucursal",
      component: EliminarSucursalComponent
    },
    {
      path:"crear-productoServicio",
      component: CrearProductoServicioComponent
    },
    {
      path:"editar-productoServicio",
      component: EditarProductoServicioComponent
    },
    {
      path:"buscar-productoServicio",
      component: BuscarProductoServicioComponent
    },
    {
      path:"eliminar-productoServicio",
      component: EliminarProductoServicioComponent
    },
    {
      path:"crear-prospecto",
      component:CrearProspectoComponent
    },
    {
      path:"buscar-prospecto",
      component: BuscarProspectoComponent
    },
    {
      path:"editar-prospecto",
      component: EditarProspectoComponent
    },
    {
      path:"eliminar-prospecto",
      component: EliminarProspectoComponent
    },
    {
      path:"editar-plan",
      component: EditarPlanComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
