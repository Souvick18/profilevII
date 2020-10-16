import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { SidenavComponent } from './sidenav.component';


@NgModule({
    declarations: [ SidenavComponent ],
    exports: [ SidenavComponent ],
    imports: [
      CommonModule, ReactiveFormsModule,
      MaterialModule, RouterModule
    ]
})

export class SidenavModule {
}
