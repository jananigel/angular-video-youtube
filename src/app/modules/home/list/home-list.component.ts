import { Component, OnInit } from "@angular/core";
import { VideoQueryParameter } from "../../../core/interface/video-query-parameter.interface";
// import { VideoDataService } from 'src/app/service/data/video.data.service';
import { VideoDataService } from '../../../service/data/video.data.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: [ './home-list.component.scss' ]
})
export class HomeListComponent implements OnInit {

  data = new VideoQueryParameter;

  constructor(
    private readonly videoDataService: VideoDataService,
  ) {
    console.log('home data = ', this.data);
  }

  ngOnInit() {
    this.videoDataService.getList(this.data).subscribe(data => {
      console.log('data = ', data);
    })
  }
}