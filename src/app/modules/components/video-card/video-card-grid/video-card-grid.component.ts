import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { VideoInfo } from "../../../../core/interface/video.interface";
import { COLLECTIONS } from '../../../../core/const/local-storage';

@Component({
  selector: 'app-video-card-grid',
  templateUrl: './video-card-grid.component.html',
  styleUrls: [ './video-card-grid.component.scss' ]
})
export class VideoCardGridComponent implements OnInit {

  isCollected = false;
  data: VideoInfo;

  @Input('data') set setData(data: VideoInfo) {
    this.data = data;
    const hasCollection = !!localStorage.getItem(COLLECTIONS);
    if (hasCollection) {
      let collections: VideoInfo[] = JSON.parse(localStorage.getItem(COLLECTIONS));
      const isInCollection = collections.some(collection => collection.id === data.id);
      this.isCollected = isInCollection;
    }
  }

  @Output() collect = new EventEmitter<VideoInfo>();

  constructor() {}

  ngOnInit() {}

  onCollectionClick() {
    this.isCollected = !this.isCollected;
    this.collect.emit(this.data);
  }
}
