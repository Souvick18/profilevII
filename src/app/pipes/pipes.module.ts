import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetFirstName } from './pipes.component';

@NgModule({
    declarations: [ GetFirstName ],
    imports: [ CommonModule ],
    exports: [ GetFirstName ]
})

export class PipesModule {
}
