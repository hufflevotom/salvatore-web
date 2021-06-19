import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(): boolean{
    if(localStorage.getItem('dni')===null){
      return true;
    }else{
      this.router.navigateByUrl('/inicio');
      return false;
    }
  }
  
}
