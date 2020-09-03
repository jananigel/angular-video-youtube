export interface IVideoQueryParameter {
  id?: string;
  myRating?: string;
  part: string[];
  chart: string;
  maxResults: string;
  key: string;
  pageToken?: string;
}

export class VideoQueryParameter implements IVideoQueryParameter {

  constructor(
    public key = 'AIzaSyAGfVARifTfizbS7NddtI4VzAc8gkncCAw',
    public part = ['snippet', 'contentDetails'],
    public chart = 'mostPopular',
    public maxResults = '10',
  ) {}

}