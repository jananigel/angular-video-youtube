import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerRoutingModule } from './viewer.routing';
import { ViewerComponent } from './viewer/viewer.component';
import { MainNavigatinModule } from '../components/main-navigation/main-navigation.module';
import { LayoutModule } from '../components/layouts/layout.module';

@NgModule({
  imports: [
    CommonModule,
    ViewerRoutingModule,
    MainNavigatinModule,
    LayoutModule,
  ],
  declarations: [ViewerComponent],
})
export class ViewerModule { }