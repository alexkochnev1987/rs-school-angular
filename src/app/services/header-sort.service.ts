import { Injectable } from '@angular/core';
import { map, Observable, of, Subject } from 'rxjs';
import { SortEvent, SortOrder } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class HeaderSortService {
  inputStream$: Observable<string> = of('');
  sortStream$: Observable<SortEvent> = of({ order: SortOrder.asc });

  getInput() {
    return this.inputStream$;
  }

  getSort() {
    return this.sortStream$;
  }

  streamInput(value: Observable<string>) {
    this.inputStream$ = value;
  }

  streamSort(value: Observable<SortEvent>) {
    this.sortStream$ = value;
  }
}
