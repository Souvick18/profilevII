import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { LibraryDetailRoutingModule } from './library-detail-routing.module';
import { LibraryDetailComponent } from './library-detail.component';
import { SidenavModule } from '../sidenav/sidenav.module';

import { ProfileCreateDialogComponent } from './profile-create.dialog';


@NgModule({
    declarations: [ LibraryDetailComponent,
                    ProfileCreateDialogComponent],
    imports:      [ LibraryDetailRoutingModule,
                    CommonModule, ReactiveFormsModule,
                    MaterialModule, SidenavModule],
    entryComponents: [ ProfileCreateDialogComponent]
})

export class LibraryDetailModule {
}
