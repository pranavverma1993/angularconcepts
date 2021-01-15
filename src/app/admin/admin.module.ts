import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { FirstComponent } from './first/first.component';


@NgModule({
  declarations: [AdminComponent, FirstComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,SharedModule,FormsModule
  ]
})
export class AdminModule { }
