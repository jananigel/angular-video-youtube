import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { LayoutModule } from '../components/layouts/layout.module';
import { MainNavigatinModule } from '../components/main-navigation/main-navigation.module';
import { HomeListComponent } from './list/home-list.component';
import { VideoDataService } from '../../service/data/video.data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PaginationListModule } from '../components/pagination/pagination-list.module';
import { PipesShareModule } from '../../shared/pipes/pipes.share.module';
import { VideoCardShareModule } from '../components/video-card/video-card.share.module';
import { CommonShareComponentModule } from '../components/common/common-share-component.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    MainNavigatinModule,
    PaginationListModule,
    PipesShareModule,
    VideoCardShareModule,
    CommonShareComponentModule,
  ],
  declarations: [HomeListComponent],
  providers: [
    VideoDataService,
  ]
})
export class HomeModule { }