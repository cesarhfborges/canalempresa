import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicLayoutComponent} from './layouts/basic-layout/basic-layout.component';
import {FullLayoutComponent} from './layouts/full-layout/full-layout.component';
import {ClearLayoutComponent} from './layouts/clear-layout/clear-layout.component';
import {AuthGuardService} from './shared/guards/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: '',
    component: BasicLayoutComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  },
  {
    path: '',
    component: FullLayoutComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  },
  {
    path: '',
    component: ClearLayoutComponent,
    loadChildren: () => import('./paineis/paineis.module').then(m => m.PaineisModule),
    canActivate: [AuthGuardService],
    canActivateChild: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
