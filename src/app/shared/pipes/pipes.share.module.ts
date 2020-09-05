import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationHandlerPipe } from './pagination-handler/pagination-handler.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PaginationHandlerPipe],
  exports: [PaginationHandlerPipe],
})
export class PipesShareModule { }