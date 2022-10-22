import { Item } from './interfaces';

export enum Color {
  Red = 'red',
  Yellow = 'yellow',
  Green = 'green',
  Blue = 'blue',
}

export enum ClassButton {
  red = 'danger',
  yellow = 'warning',
  green = 'success',
  blue = 'primary',
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
const SECOND_KEY = 'AIzaSyA39vER2D9Sp6O3ig1YrTLtkBTmsGWhw0k';
const FIRST_KEY = 'AIzaSyCChvDOjQZk-4dKlEWeNDybUdncBU81ZQI';
export const API_KEY = `&key=${SECOND_KEY}`;

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

export function getColor(date: string) {
  const getAge = (date: string) =>
    Math.floor(Math.abs(Date.now() - new Date(date).getTime()) / MS_IN_DAY);
  const age = getAge(date);
  if (age < AgeCategory.young) return Color.Blue;
  if (age < AgeCategory.middle) return Color.Green;
  if (age < AgeCategory.old) return Color.Yellow;
  return Color.Red;
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
