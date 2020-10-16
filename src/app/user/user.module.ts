import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { UserComponentRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SidenavModule } from '../sidenav/sidenav.module';


@NgModule({
    declarations: [ UserComponent ],
    imports: [
      UserComponentRoutingModule,
      CommonModule, ReactiveFormsModule,
      MaterialModule, SidenavModule
    ]
})

export class UserModule {
}
