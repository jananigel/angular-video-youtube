import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionListComponent } from './list/collection-list.component';

const routes: Routes = [
  { path: '', 
    pathMatch: 'full',
    children: [
    {
      path: '',
      component: CollectionListComponent,
    }
  ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CollectionRoutingModule {}