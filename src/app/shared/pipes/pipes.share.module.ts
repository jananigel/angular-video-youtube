import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationHandlerPipe } from './pagination-handler/pagination-handler.pipe';
import { Iso8601Pipe } from './time-format/iso-8601.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [PaginationHandlerPipe, Iso8601Pipe],
  exports: [PaginationHandlerPipe, Iso8601Pipe],
})
export class PipesShareModule { }