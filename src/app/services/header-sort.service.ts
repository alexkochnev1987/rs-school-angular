import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { SortEvent } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class HeaderSortService {
  private input = new Subject<string>();
  private sort = new Subject<SortEvent>();

  inputStream$ = this.input.asObservable();
  sortStream$ = this.sort.asObservable();

  getInput() {
    return this.input.pipe(map(x => x));
  }

  getSort() {
    return this.sort.pipe(map(x => x));
  }

  streamInput(value: string) {
    this.input.next(value);
  }

  streamSort(value: SortEvent) {
    this.sort.next(value);
  }
}
