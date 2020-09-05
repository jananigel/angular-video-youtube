import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewerComponent } from './viewer/viewer.component';

const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',
    children: [
      {
        path: '',
        component: ViewerComponent,
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ViewerRoutingModule {}