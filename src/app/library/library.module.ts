import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { LibraryComponentRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { SidenavModule } from '../sidenav/sidenav.module';



@NgModule({
    declarations: [ LibraryComponent ],
    imports: [
      LibraryComponentRoutingModule,
      CommonModule, ReactiveFormsModule,
      MaterialModule, SidenavModule
    ]
})

export class LibraryModule {
}
