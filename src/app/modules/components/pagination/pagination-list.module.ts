import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationListComponent } from './page-list/pagination-list.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ PaginationListComponent ],
  exports: [PaginationListComponent]
})
export class PaginationListModule { }
