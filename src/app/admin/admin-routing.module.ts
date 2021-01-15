import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [{ path: '', component: FirstComponent },
{path: 'first', component: FirstComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
