import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { HomeComponentRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SidenavModule } from '../sidenav/sidenav.module';


@NgModule({
    declarations: [ HomeComponent ],
    imports: [
      HomeComponentRoutingModule,
      CommonModule, ReactiveFormsModule,
      MaterialModule, SidenavModule
    ]
})

export class HomeModule {
}
