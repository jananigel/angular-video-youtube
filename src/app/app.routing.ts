import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
  { path: 'video/:id', loadChildren: () => import('./modules/viewer/viewer.module').then(m => m.ViewerModule)},
  {path: 'collection', loadChildren: () => import('./modules/collection/collection.module').then(m => m.CollectionModule)},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}