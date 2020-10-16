import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatSidenavModule, MatInputModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


const MatModules = [ MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule];

@NgModule({
    imports: [MatModules],
    exports: [MatModules]
})

export class MaterialModule {}
