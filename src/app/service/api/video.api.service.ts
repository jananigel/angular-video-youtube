import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { VideoQueryParameter } from '../../core/interface/video-query-parameter.interface';

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
    Object.keys(queryParamter).forEach(key => {
      queryParams = queryParams.set(key, queryParamter[key]);
    });
    return this.httpClient.get(END_POINT, {params: queryParams});
  }
}