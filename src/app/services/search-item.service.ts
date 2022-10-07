import { Injectable } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { Item } from '../interfaces';
import { response } from './response.mock';

@Injectable({
  providedIn: 'root',
})
export class SearchItemService {
  items: Item[] = [];
  searchValue = '';

  constructor() {}

  getItems(): Observable<Item[]> {
    return of(response).pipe(map(x => x.items));
  }
  // setSearch(value: string) {
  //   this.searchValue = value;
  // }

  searchItem(value: string): Observable<Item[]> {
    if (!this.searchValue.trim()) return of([]);
    return of(response).pipe(
      map(
        x =>
          (this.items = x.items.filter(x =>
            x.snippet.title.includes(value.toLowerCase())
          ))
      )
    );
  }
}
