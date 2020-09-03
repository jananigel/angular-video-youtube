import { Component, OnInit } from "@angular/core";
import { VideoQueryParameter } from "../../../core/interface/video-query-parameter.interface";
// import { VideoDataService } from 'src/app/service/data/video.data.service';
import { VideoDataService } from '../../../service/data/video.data.service';
import { Video } from "../../../core/interface/video.interface";

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: [ './home-list.component.scss' ]
})
export class HomeListComponent implements OnInit {

  queryParameter = new VideoQueryParameter;
  data: Video[];

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
}