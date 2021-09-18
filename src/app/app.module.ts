import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { RightBarComponent } from './components/right-bar/right-bar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MonitoreoComponent } from './pages/monitoreo/monitoreo.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { EvidenciasComponent } from './pages/evidencias/evidencias.component';
import { FoliosComponent } from './pages/folios/folios.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { ImportarArchivoComponent } from './pages/importar-archivo/importar-archivo.component';
import { ValidarFoliosComponent } from './pages/validar-folios/validar-folios.component';
import { HabilitarVehiculosComponent } from './pages/habilitar-vehiculos/habilitar-vehiculos.component';
import { HeaderComponent } from './components/header/header.component';
import { RespuestaComponent } from './components/respuesta/respuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftBarComponent,
    RightBarComponent,
    InicioComponent,
    MonitoreoComponent,
    LoginComponent,
    UsuariosComponent,
    EvidenciasComponent,
    FoliosComponent,
    VehiculosComponent,
    ImportarArchivoComponent,
    ValidarFoliosComponent,
    HabilitarVehiculosComponent,
    HeaderComponent,
    RespuestaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
