import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SEARCH, VIDEO, VIDEO_QUERY } from '../constants';
import { SearchDetails, YoutubeResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getData(searchInput: string) {
    const url = SEARCH + searchInput;
    return this.http.get<SearchDetails>(url);
  }

  getItemById(id: string) {
    const url = VIDEO + id + VIDEO_QUERY;
    return this.http.get<YoutubeResponse>(url);
  }
}
