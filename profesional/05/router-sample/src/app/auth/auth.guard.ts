import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {CanLoad} from '@angular/router';
import {Observable} from 'rxjs';


@Injectable()
export class AuthGuard implements CanLoad{

  constructor(private authService: AuthService) {
  }

  canLoad(): Observable<boolean> {
    return this.authService.checkPermissions();
  }
}
