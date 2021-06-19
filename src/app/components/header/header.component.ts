import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() page?: string;
  e:Date = new Date();
  fecha = this.e.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  cerrarSesion() {
    localStorage.removeItem('dni')
    this.router.navigateByUrl('/login')
  }

}
