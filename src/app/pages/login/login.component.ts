import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensajeRespuesta = {
    type:"",
    message:""
  };

  constructor(public usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
  }

  ingresar(form: NgForm) {
    if (form.invalid) {
      console.log('Formulario inválido')
    }
    this.usuarioService.ingresar(form.value).subscribe((res: any) => {
      if (res['type'] === 'success') {
        if (res['data'].idTipoRol === '60bb0f9768bcb70590c9eccc') {
          const dniStorage = res['data'].dni
          localStorage.setItem('dni', dniStorage)
          this.router.navigateByUrl('/inicio')
          console.log(dniStorage);
        }
      } else if (res['type'] === 'error') {
        console.log(res)
        this.mensajeRespuesta = res
      }
    })
  }
}