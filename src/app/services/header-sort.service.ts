import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SortEvent } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class HeaderSortService {
  inputStream$ = new Subject<string>();
  sortStream$ = new Subject<SortEvent>();

  getInput() {
    return this.inputStream$;
  }

  getSort() {
    return this.sortStream$;
  }

  streamInput(value: string | null | undefined) {
    if (value) this.inputStream$.next(value.trim());
  }

  streamSort(value: SortEvent) {
    this.sortStream$.next(value);
  }
}
