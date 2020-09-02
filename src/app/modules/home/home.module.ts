import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home.routing';
import { LayoutModule } from '../components/layouts/layout.module';
import { MainNavigatinModule } from '../components/main-navigation/main-navigation.module';
import { HomeListComponent } from './list/home-list.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    MainNavigatinModule,
  ],
  declarations: [HomeListComponent],
})
export class HomeModule { }