import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainNavigationComponent } from './navigation/main-navigation.component';




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [MainNavigationComponent],
  exports: [MainNavigationComponent],
})
export class MainNavigatinModule { }