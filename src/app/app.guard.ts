import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AppGuard implements CanActivate {
  constructor(private appRouter: Router) {
  }
  canActivate(): boolean {

        const loggedIn = !!localStorage.getItem('bfs_buyerprofile_uid');
        if (loggedIn) {
          return true;
        } else {
            this.appRouter.navigate(['/login']);
            return false;
        }
      }


  }

