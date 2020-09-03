import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionRoutingModule } from './collection.routing';
import { LayoutModule } from '../components/layouts/layout.module';
import { MainNavigatinModule } from '../components/main-navigation/main-navigation.module';
import { CollectionListComponent } from './list/collection-list.component';


@NgModule({
  imports: [
    CommonModule,
    CollectionRoutingModule,
    LayoutModule,
    MainNavigatinModule,
  ],
  declarations: [CollectionListComponent],
})
export class CollectionModule { }