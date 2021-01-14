import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RedirectComponent } from './redirect/redirect.component';
import { AuthGuard } from './shared/AuthGuard/auth.guard';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {path : ' ',redirectTo: '/login',pathMatch: 'full'},
  {path : 'redirect',component : RedirectComponent,canActivate : [AuthGuard]},
  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),canActivate : [AuthGuard] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canActivate : [AuthGuard] },
  {path : 'login',component : LoginComponent},
  {path : '**',component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
