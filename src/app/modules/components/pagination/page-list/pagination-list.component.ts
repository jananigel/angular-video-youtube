import { Component, OnInit, Input } from '@angular/core';

const APPEAR_PAGE = 10;

@Component({
  selector: 'app-pagination-list',
  templateUrl: './pagination-list.component.html',
  styleUrls: ['./pagination-list.component.scss'],
})
export class PaginationListComponent implements OnInit {

  pages: number[] = [];
  appearPages: number[] = [];
  currentPage = 1;
  totalCount = 0;

  @Input() prePageCount = APPEAR_PAGE;
  @Input('totalCount') set setTotalCount(count: number) {
    this.totalCount = count;
    this.initPages();
    this.appearPageHandler();
    this.appearPages = Array.from(this.pages).slice(0, this.prePageCount);
  }

  constructor() {}

  ngOnInit() {
    // do nothing
  }

  onFirstPageClick() {
    this.currentPage = 1;
    this.appearPageHandler();
  }

  onPrevClick() {
    this.currentPage -= 1;
    this.appearPageHandler();
  }

  onPageClick(index: number) {
    this.currentPage = index;
    this.appearPageHandler();
  }

  onNextClick() {
    this.currentPage += 1;
    this.appearPageHandler();
  }

  onLastPageClick() {
    const totalPages = this.pages.length - 1;
    this.currentPage = this.pages[totalPages];
    this.appearPageHandler();
  }

  private initPages() {
    const page = Math.ceil(this.totalCount / this.prePageCount);
    for (let i = 0; i < page; ++ i) {
      this.pages.push(i + 1);
    }
  }

  private appearPageHandler() {
    const appearPageLength = this.appearPages.length - 1;
    const lastAppearPage = this.appearPages[appearPageLength];
    const firstAppearPage = this.appearPages[1];

    if (this.currentPage >= this.pages[this.pages.length - 1]) {
      this.appearPages = Array.from(this.pages).slice(this.pages.length - this.prePageCount + 1, this.pages.length);
      return;
    }

    if (this.currentPage > lastAppearPage - 1) {
      const next = this.currentPage - 1;
      const endPage = this.prePageCount + this.currentPage - 1;
      this.appearPages = Array.from(this.pages).slice(next, endPage);
      return;
    }

    if (this.currentPage < firstAppearPage) {
      const pre = this.currentPage - this.prePageCount <= 0 ? 0 : this.currentPage - this.prePageCount;
      const startPage = pre + this.prePageCount;
      this.appearPages = Array.from(this.pages).slice(pre, startPage);
    }
  }
}