export enum Color {
  Red = 'red',
  Yellow = 'yellow',
  Green = 'green',
  Blue = 'blue',
}

export enum AgeCategory {
  young = 7,
  middle = 30,
  old = 180,
}

export enum RouterStateValue {
  login = '/login',
  main = '/main',
  mainId = '/main:id',
}

export const TOKEN = 'token';

export const MS_IN_DAY = 1000 * 3600 * 24;
export const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const API = 'AIzaSyA97B5VEERhz4GEOFzztkbam9vWF8ZFjTQ';

export const SEARCH = `search?key=${API}&type=video&part=snippet&&statistics&maxResults=15&order=viewCount&q=`;
export const VIDEO = `videos?key=${API}&id=`;
export const VIDEO_QUERY = '&part=snippet,statistics';
