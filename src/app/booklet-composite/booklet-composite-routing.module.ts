import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookletCompositeComponent } from './booklet-composite.component';

const routes: Routes = [
    { path: '', component: BookletCompositeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class BookletCompositeRoutingModule {
}
