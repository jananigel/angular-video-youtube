export interface Video {
  etag: string;
  items: VideoInfo[];
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
}

export interface VideoInfo {
  id: string;
  etag: string;
  kind: string;
  snippet: Snippet;
  localized: Localized;
  contentDetails: ContentDetail;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface Snippet {
  categoryId: string;
  channelTitle: string;
  description: string;
  thumbnails: Thumbnails
  title: string;
}

export interface Thumbnails {
  default: ThumbnailsInfo;
  high: ThumbnailsInfo;
  maxres: ThumbnailsInfo;
  medium: ThumbnailsInfo;
  standard: ThumbnailsInfo;
}

export interface ThumbnailsInfo {
  url: string;
  width: number;
  height: number;
}

export interface Localized {
  description: string;
  title: string;
}

export interface ContentDetail {
  duration: string;
}