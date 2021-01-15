import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { ButtonComponent } from './Components/button/button.component';
import { FilterPipe } from './Pipes/filter.pipe';



@NgModule({
  declarations: [SharedComponent, ButtonComponent, FilterPipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[ButtonComponent,FilterPipe],

})
export class SharedModule { }
