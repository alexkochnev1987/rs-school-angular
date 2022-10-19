import { Item } from './interfaces';

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
  admin = '/admin',
  login = '/login',
  main = '/main',
  mainId = '/main:id',
}

export const TOKEN = 'token';
const millisecondsInSecond = 1000;
const secondsInHour = 3600;
const hoursPerDay = 24;
export const MS_IN_DAY = millisecondsInSecond * secondsInHour * hoursPerDay;
export const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const API_KEY = '&key=AIzaSyA97B5VEERhz4GEOFzztkbam9vWF8ZFjTQ';

export const SEARCH = `search?type=video&part=snippet&&statistics&maxResults=15&order=viewCount&q=`;
export const VIDEO = `videos?id=`;
export const VIDEO_QUERY = '&part=snippet,statistics';

export function getImageURL(item: Item) {
  const thumbnail = item.snippet.thumbnails;
  if (thumbnail.maxres?.url) return thumbnail.maxres.url;
  if (thumbnail.high?.url) return thumbnail.high.url;
  if (thumbnail.medium?.url) return thumbnail.medium.url;
  if (thumbnail.standard?.url) return thumbnail.standard.url;
  return thumbnail.default.url;
}

export enum SpinnerStateName {
  login = 'login',
}

export enum PasswordValidatorSymbols {
  upperCase = 'uppercase',
  lowerCase = 'lowercase',
  numbers = 'numbers',
  special = 'special',
  minLength = 'minlength',
  symbol = '*@!#%&()^~{}',
}

export const urlPattern =
  '(?:https?)://(w+:?w*)?(S+)(:d+)?(/|/([w#!:.?+=&%!-/]))?';
