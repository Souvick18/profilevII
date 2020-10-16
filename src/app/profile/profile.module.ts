import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { ProfileComponentRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SidenavModule } from '../sidenav/sidenav.module';

import { RemoveProfileDialogComponent } from './remove-profile.dialog';
import { EditProfileDialogComponent } from './edit-profile.dialog';

@NgModule({
    declarations: [ ProfileComponent, RemoveProfileDialogComponent, EditProfileDialogComponent ],
    imports: [
      ProfileComponentRoutingModule,
      CommonModule, ReactiveFormsModule,
      MaterialModule, SidenavModule
    ],
    entryComponents: [ RemoveProfileDialogComponent, EditProfileDialogComponent]
})

export class ProfileModule {
}
