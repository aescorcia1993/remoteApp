import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EStoreComponent } from '../component/e-store/e-store.component';
import { EStoreRoutingModule } from './e-store.routing';


@NgModule({
  declarations: [ EStoreComponent],
  imports: [
    CommonModule,
    EStoreRoutingModule,
  ]
})
export class EStoreModule { }
