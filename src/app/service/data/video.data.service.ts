import { Injectable } from '@angular/core';
import { VideoApiService } from '../api/video.api.service';
import { VideoQueryParameter, PlayQueryParameter } from '../../core/interface/video-query-parameter.interface';
import { Observable } from 'rxjs';

@Injectable()
export class VideoDataService {

  constructor(private readonly videoApiService: VideoApiService) {}

  getList(queryParamter: VideoQueryParameter): Observable<any> {
    return this.videoApiService.getList(queryParamter);
  }

  getPlayVideo(queryParamter: PlayQueryParameter): Observable<any> {
    return this.videoApiService.playVideo(queryParamter);
  }
}