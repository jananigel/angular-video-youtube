import { Component, OnInit } from "@angular/core";
import { VideoInfo } from "../../../core/interface/video.interface";
import { COLLECTIONS } from "../../../core/const/local-storage";
import { Router } from "@angular/router";

const PER_PAGE_ITEM_COUNT = 12;
const DEFAULT_CURRENT_PAGE = 1;

// TODO: extract same const or method to util or public
@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: [ './collection-list.component.scss' ]
})
export class CollectionListComponent implements OnInit {

  data: VideoInfo[];
  currentPage = DEFAULT_CURRENT_PAGE;
  perPageItemCount = PER_PAGE_ITEM_COUNT;

  constructor(
    private readonly router: Router,
  ) {
    // console.log('collection');
  }

  ngOnInit() {
    const hasCollection = !!localStorage.getItem(COLLECTIONS);
    if (hasCollection) {
      let collections: VideoInfo[] = JSON.parse(localStorage.getItem(COLLECTIONS));
      this.data = collections;
    }
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  onCollectClick(video: VideoInfo) {
    let collections: VideoInfo[] = JSON.parse(localStorage.getItem(COLLECTIONS));
    this.data = collections.filter(collection => collection.id !== video.id);
    localStorage.setItem(COLLECTIONS, JSON.stringify(this.data));
  }

  onCardClick(id: string) {
    this.router.navigate(['./video', id]);
  }
}