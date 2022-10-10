import { Injectable } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { Item } from '../interfaces';
import { response } from './response.mock';

@Injectable({
  providedIn: 'root',
})
export class SearchItemService {
  constructor() {}

  getItems(): Observable<Item[]> {
    return of(response).pipe(map(x => x.items));
  }

  searchItem(value: string) {
    return this.getItems().pipe(map(x => x.find(elem => elem.id === value)));
  }
}
