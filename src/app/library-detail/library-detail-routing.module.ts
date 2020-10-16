import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LibraryDetailComponent } from './library-detail.component';

const routes: Routes = [
    { path: '', component: LibraryDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class LibraryDetailRoutingModule {
}
