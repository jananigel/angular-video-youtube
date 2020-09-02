import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeListComponent } from './list/home-list.component';

const routes: Routes = [
  { path: '', 
    pathMatch: 'full',
    children: [
    {
      path: '',
      component: HomeListComponent,
    }
  ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule {}