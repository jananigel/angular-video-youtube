import { Component, OnInit, Input } from "@angular/core";
import { VideoInfo } from "../../../../core/interface/video.interface";

@Component({
  selector: 'app-video-card-grid',
  templateUrl: './video-card-grid.component.html',
  styleUrls: [ './video-card-grid.component.scss' ]
})
export class VideoCardGridComponent implements OnInit {

  @Input() data: VideoInfo;

  constructor() {}

  ngOnInit() {}
}