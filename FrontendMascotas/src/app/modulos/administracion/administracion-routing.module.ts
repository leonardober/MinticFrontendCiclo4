import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarMascotaComponent } from './mascota/buscar-mascota/buscar-mascota.component';
import { CrearMascotaComponent } from './mascota/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascota/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascota/eliminar-mascota/eliminar-mascota.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { BuscarProductoServicioComponent } from './productoServicio/buscar-producto-servicio/buscar-producto-servicio.component';
import { CrearProductoServicioComponent } from './productoServicio/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './productoServicio/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './productoServicio/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { BuscarProspectoComponent } from './prospecto/buscar-prospecto/buscar-prospecto.component';
import { CrearProspectoComponent } from './prospecto/crear-prospecto/crear-prospecto.component';
import { EditarProspectoComponent } from './prospecto/editar-prospecto/editar-prospecto.component';
import { EliminarProspectoComponent } from './prospecto/eliminar-prospecto/eliminar-prospecto.component';
import { BuscarSucursalComponent } from './sucursal/buscar-sucursal/buscar-sucursal.component';
import { CrearSucursalComponent } from './sucursal/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursal/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursal/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarUsuarioComponent } from './usuario/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
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
      component: EditarMascotaComponent
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
export class AdministracionRoutingModule { }
