import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthenticateRoutingModule,
    DropdownModule,
  ]
})
export class AuthenticateModule { }
