import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { PipesModule } from '../pipes/pipes.module';

import { BookletCompositeRoutingModule } from './booklet-composite-routing.module';
import { BookletCompositeComponent } from './booklet-composite.component';


@NgModule({
    declarations: [ BookletCompositeComponent ],
    imports: [ BookletCompositeRoutingModule,
              CommonModule, ReactiveFormsModule,
              MaterialModule, PipesModule ]
})

export class BookletCompositeModule {
}
