import { Pipe, PipeTransform } from '@angular/core';
import { Item, SortEvent, SortKey, SortOrder } from 'src/app/interfaces';

@Pipe({
  name: 'sortItem',
})
export class SortPipe implements PipeTransform {
  transform(
    value: Item[] | null,
    sortEvent: SortEvent | undefined
  ): Item[] | null {
    if (!value || !sortEvent) return value;

    let sortArray: Item[] = [];
    if (sortEvent.key === undefined || sortEvent.key === SortKey.view)
      sortArray = value.sort(this.sortViewCount);
    if (sortEvent.key === SortKey.date) sortArray = value.sort(this.sortDate);

    return sortEvent.order === SortOrder.asc ? sortArray : sortArray.reverse();
  }

  sortDate(a: Item, b: Item) {
    return new Date(a.snippet.publishedAt).getTime() >
      new Date(b.snippet.publishedAt).getTime()
      ? 1
      : -1;
  }

  sortViewCount(a: Item, b: Item) {
    return Number(a.statistics.viewCount) > Number(b.statistics.viewCount)
      ? 1
      : -1;
  }
}
