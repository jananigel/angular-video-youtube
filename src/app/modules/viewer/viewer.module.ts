import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerRoutingModule } from './viewer.routing';
import { ViewerComponent } from './viewer/viewer.component';
import { MainNavigatinModule } from '../components/main-navigation/main-navigation.module';
import { LayoutModule } from '../components/layouts/layout.module';
import { VideoDataService } from '../../service/data/video.data.service';

@NgModule({
  imports: [
    CommonModule,
    ViewerRoutingModule,
    MainNavigatinModule,
    LayoutModule,
  ],
  declarations: [ViewerComponent],
  providers: [VideoDataService],
})
export class ViewerModule { }