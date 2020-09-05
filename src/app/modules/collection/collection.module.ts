import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionRoutingModule } from './collection.routing';
import { LayoutModule } from '../components/layouts/layout.module';
import { MainNavigatinModule } from '../components/main-navigation/main-navigation.module';
import { CollectionListComponent } from './list/collection-list.component';
import { VideoCardShareModule } from '../components/video-card/video-card.share.module';
import { PipesShareModule } from '../../shared/pipes/pipes.share.module';
import { PaginationListModule } from '../components/pagination/pagination-list.module';


@NgModule({
  imports: [
    CommonModule,
    CollectionRoutingModule,
    LayoutModule,
    MainNavigatinModule,
    PaginationListModule,
    PipesShareModule,
    VideoCardShareModule,
  ],
  declarations: [CollectionListComponent],
})
export class CollectionModule { }