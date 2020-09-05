import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCardGridComponent } from './video-card-grid/video-card-grid.component';
import { PipesShareModule } from '../../../shared/pipes/pipes.share.module';


@NgModule({
  imports: [
    CommonModule,
    PipesShareModule,
  ],
  declarations: [VideoCardGridComponent],
  exports: [
    VideoCardGridComponent,
  ]
})
export class VideoCardShareModule { }