import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { VideoDataService } from "../../../service/data/video.data.service";
import { PlayQueryParameter } from "../../../core/interface/video-query-parameter.interface";

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: [ './viewer.component.scss' ]
})
export class ViewerComponent implements OnInit {

  playParameter = new PlayQueryParameter;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly dataService: VideoDataService,
  ) {
    console.log('viewer id = ', this.route.snapshot.params.id);
  }

  ngOnInit() {
    const videoId = this.route.snapshot.params.id;
    this.playParameter.id = videoId;
    this.dataService.getPlayVideo(this.playParameter).subscribe(res => {
      console.log('res = ', res);
    })
  }


}