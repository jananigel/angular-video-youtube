import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { VideoQueryParameter, PlayQueryParameter } from '../../core/interface/video-query-parameter.interface';

const END_POINT = 'https://www.googleapis.com/youtube/v3/videos';

@Injectable({
  providedIn: 'root',
})
export class VideoApiService {

  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  getList(queryParamter: VideoQueryParameter): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = this.getQueryParams(queryParamter);
    return this.httpClient.get(END_POINT, {params: queryParams});
  }

  playVideo(queryParamter: PlayQueryParameter): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = this.getQueryParams(queryParamter);
    return this.httpClient.get(END_POINT, {params: queryParams});
  }

  private getQueryParams(paramter: VideoQueryParameter | PlayQueryParameter): HttpParams {
    let params: HttpParams = new HttpParams();
    Object.keys(paramter).forEach(key => {
      params = params.set(key, paramter[key]);
    });
    return params;
  }
}