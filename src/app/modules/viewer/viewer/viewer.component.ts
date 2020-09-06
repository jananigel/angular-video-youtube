import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { VideoDataService } from "../../../service/data/video.data.service";
import { PlayQueryParameter } from "../../../core/interface/video-query-parameter.interface";
import videojs from 'video.js';
import { VideoInfo } from "../../../core/interface/video.interface";
import { COLLECTIONS } from "../../../core/const/local-storage";

const DEFAULT_VIDEO_CONFIG = {
  autoplay: false,
  controls: true,
  sources: [
    {
      src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
      type: 'application/x-mpegURL'
    },
  ]};

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: [ './viewer.component.scss' ]
})
export class ViewerComponent implements OnInit, AfterViewInit, OnDestroy {

  playParameter = new PlayQueryParameter;
  player: videojs.Player;
  data;
  list;

  @Input() videoConfig: {
      fluid?: boolean,
      aspectRatio?: string,
      controls?: boolean,
      autoplay: boolean,
      sources: {
          src: string,
          type: string,
      }[],
  } = DEFAULT_VIDEO_CONFIG;

  @ViewChild('videoEle', {static: true}) videoEle: ElementRef;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly dataService: VideoDataService,
  ) {}

  ngOnInit() {
    this.initVideoData();
    this.initList();
    // console.log('this.list = ', this.list);
  }

  ngAfterViewInit() {
    this.initVideoJS();
  }

  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }

  onCardClick(item: VideoInfo) {
    this.router.navigate(['./video', item.id]);
    this.data = item;
  }

  private initVideoData() {
    const videoId = this.route.snapshot.params.id;
    this.playParameter.id = videoId;
    this.dataService.getPlayVideo(this.playParameter).subscribe(res => {
      // console.log('res = ', res);
      this.data = res.items[0];
    });
  }

  private initVideoJS() {
    this.player = videojs(this.videoEle.nativeElement, this.videoConfig, function onPlayerReady() {
      // console.log('onPlayerReady', this);
    });
  }

  private initList() {
    const hasCollection = !!localStorage.getItem(COLLECTIONS);
    if (hasCollection) {
      let collections: VideoInfo[] = JSON.parse(localStorage.getItem(COLLECTIONS));
      this.list = collections;
    }
  }

}