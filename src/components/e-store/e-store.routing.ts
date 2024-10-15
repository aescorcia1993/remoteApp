import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EStoreComponent } from '../component/e-store/e-store.component';

const routes: Routes = [
    {
        path: '',
        component: EStoreComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EStoreRoutingModule { }