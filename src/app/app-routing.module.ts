import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from './app.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'home',
    canActivate: [AppGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'user',
    canActivate: [AppGuard],
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path: 'profile-booklet',
    canActivate: [AppGuard],
    loadChildren: () => import('./library/library.module').then(m => m.LibraryModule),
  },
  {
    path: 'profile-booklet/:id',
    canActivate: [AppGuard],
    loadChildren: () => import('./library-detail/library-detail.module').then(m => m.LibraryDetailModule),
  },
  {
    path: 'profile-booklet/:id/profile/:id',
    canActivate: [AppGuard],
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'buyer-profile-booklet/:name',
    canActivate: [AppGuard],
    loadChildren: () => import('./booklet-composite/booklet-composite.module').then(m => m.BookletCompositeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule],
})
export class AppRoutingModule { }
