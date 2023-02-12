import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ResolveService } from './resolve.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuard implements  Resolve<Object>{
 constructor(private rs:ResolveService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Object | Promise<Object> | Observable<Object> {
  return this.rs.getUser()
   
  }

 
  }



  
  

