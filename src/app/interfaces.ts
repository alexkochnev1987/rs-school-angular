import { Observable } from 'rxjs';

export interface ThumbNail {
  url: string;
  width: number;
  height: number;
}

export interface ThumbNails {
  default: ThumbNail;
  medium: ThumbNail;
  high: ThumbNail;
  standard: ThumbNail;
  maxres: ThumbNail;
}

export interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbNails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
  defaultLanguage?: string;
}

export interface Item {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;
}

export interface SearchItem {
  kind: string;
  etag: string;
  id: { kind: string; videoId: string };
  snippet: Snippet;
  statistics: Statistics;
}

export interface YoutubeResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Item[];
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export enum SortKey {
  date = 'date',
  view = 'view',
}

export interface SortEvent {
  order: SortOrder;
  key?: SortKey | null;
}

export interface SearchDetails {
  etag: string;
  items: SearchItem[];
  kind: string;
  pageInfo: { totalResults: number; resultsPerPage: number };
}

export interface SpinnerServiceState {
  [key: string]: boolean;
}

export interface CustomCard {
  title: string | null;
  description: string | null;
  img: string | null;
  link: string | null;
  date: string | null;
}

export interface CardsStore {
  customCards: CustomCard[];
  youTubeCard: Item[];
  loginStatus: boolean;
  searchStream: string;
  sortStream: SortEvent;
}
