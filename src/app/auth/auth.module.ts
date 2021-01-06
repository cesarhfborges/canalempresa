import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [LoginComponent, LandingComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgbModule
  ]
})
export class AuthModule {
}
