export interface IVideo {
  id?: string;
  key: string;
  part: string[];
}

export interface IVideoQueryParameter extends IVideo{
  myRating?: string;
  chart: string;
  maxResults: string;
  pageToken?: string;
  order?: string;
}

export class VideoQueryParameter implements IVideoQueryParameter {

  constructor(
    public key = 'AIzaSyAGfVARifTfizbS7NddtI4VzAc8gkncCAw',
    public part = ['snippet', 'contentDetails'],
    public chart = 'mostPopular',
    public maxResults = '50',
    public order = 'viewCount',
  ) {}

}

export class PlayQueryParameter implements IVideo {
  constructor(
    public key = 'AIzaSyAGfVARifTfizbS7NddtI4VzAc8gkncCAw',
    public id = '',
    public part = ['player'],
  ) {}
}