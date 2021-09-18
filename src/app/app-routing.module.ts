import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';
import { MonitoreoComponent } from './pages/monitoreo/monitoreo.component';
import { EvidenciasComponent } from './pages/evidencias/evidencias.component';
import { FoliosComponent } from './pages/folios/folios.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { ImportarArchivoComponent } from './pages/importar-archivo/importar-archivo.component';
import { ValidarFoliosComponent } from './pages/validar-folios/validar-folios.component';
import { HabilitarVehiculosComponent } from './pages/habilitar-vehiculos/habilitar-vehiculos.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'monitoreo',
    component: MonitoreoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'evidencias',
    component: EvidenciasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'folios',
    component: FoliosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'vehiculos',
    component: VehiculosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'importar-archivo',
    component: ImportarArchivoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'validar-folios',
    component: ValidarFoliosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'habilitar-vehiculos',
    component: HabilitarVehiculosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
