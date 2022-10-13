import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class SearchItemService {
  constructor(private httpService: HttpService) {}

  getSearchItems(searchInput: string): Observable<string[]> {
    return this.httpService
      .getData(searchInput)
      .pipe(map(x => x.items.map(x => x.id.videoId)));
  }

  getVideoItems(id: string[]) {
    return this.httpService.getItemById(id.join(',')).pipe(map(x => x.items));
  }

  getVideoItem(id: string) {
    return this.httpService.getItemById(id).pipe(map(x => x.items[0]));
  }
}
