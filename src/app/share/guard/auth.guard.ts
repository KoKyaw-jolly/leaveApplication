import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from '../../store/state/app.state';
import { selectAuthUserInfo } from '../../store/selector/auth.selector';
import { AtaffActiveRouteInit } from '../../core/models/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) { }

  staffActiveRoute = AtaffActiveRouteInit;
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.store.pipe(
      select(selectAuthUserInfo),
      map((authInfo: any) => {
        // console.log('userInfo', authInfo.userInfo);
        // console.log('routePath', route.routeConfig?.path!)
        if (authInfo.userInfo.user.role == 'Admin') {
          return true;
        } else if (authInfo.userInfo.user.role == 'Staff' &&
          this.staffActiveRoute.includes(route.routeConfig?.path!)
        ) {
          return true;
        } else {
          this.router.navigate(['/error']);
          return false;
        }
      })
    );
  }
}
