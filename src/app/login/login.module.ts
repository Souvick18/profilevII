import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { LoginComponentRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
    declarations: [ LoginComponent ],
    imports: [
      LoginComponentRoutingModule,
      CommonModule, ReactiveFormsModule,
      MaterialModule
    ]
})

export class LoginModule {
}
