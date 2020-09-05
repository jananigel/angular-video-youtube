import { Component, OnInit } from "@angular/core";
import { VideoQueryParameter } from "../../../core/interface/video-query-parameter.interface";
// import { VideoDataService } from 'src/app/service/data/video.data.service';
import { VideoDataService } from '../../../service/data/video.data.service';
import { Video } from "../../../core/interface/video.interface";

const PER_PAGE_ITEM_COUNT = 12;
const DEFAULT_CURRENT_PAGE = 1;

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: [ './home-list.component.scss' ]
})
export class HomeListComponent implements OnInit {

  queryParameter = new VideoQueryParameter;
  data: Video;
  currentPage = DEFAULT_CURRENT_PAGE;
  perPageItemCount = PER_PAGE_ITEM_COUNT;

  constructor(
    private readonly videoDataService: VideoDataService,
  ) {
    console.log('home data = ', this.queryParameter);
  }

  ngOnInit() {
    this.videoDataService.getList(this.queryParameter).subscribe(data => {
      this.data = data;
      console.log('data = ', this.data);
    })
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
}