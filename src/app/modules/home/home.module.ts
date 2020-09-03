import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { LayoutModule } from '../components/layouts/layout.module';
import { MainNavigatinModule } from '../components/main-navigation/main-navigation.module';
import { HomeListComponent } from './list/home-list.component';
import { VideoDataService } from '../../service/data/video.data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    // HttpClientModule,
    LayoutModule,
    MainNavigatinModule,
  ],
  declarations: [HomeListComponent],
  providers: [
    VideoDataService,
  ]
})
export class HomeModule { }