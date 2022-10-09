import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'main',
    loadChildren: () =>
      import('./youtube/main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login.module').then(m => m.LoginModule),
  },
  {
    path: 'main/:id',
    loadChildren: () =>
      import('./youtube/detailed-info/detailed-info.module').then(
        m => m.DetailedInfoModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    loadChildren: () =>
      import('./youtube/page-not-found/page-not-found.module').then(
        m => m.PageNotFoundModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
