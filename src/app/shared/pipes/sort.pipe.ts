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
    if (sortEvent.key === undefined || sortEvent.key === SortKey.view) {
      sortArray = value.sort((a, b) => {
        if (Number(a.statistics.viewCount) > Number(b.statistics.viewCount)) {
          return 1;
        }
        return -1;
      });
    }
    if (sortEvent.key === SortKey.date) {
      sortArray = value.sort((a, b) =>
        new Date(a.snippet.publishedAt).getTime() >
        new Date(b.snippet.publishedAt).getTime()
          ? 1
          : -1
      );
    }

    return sortEvent.order === SortOrder.asc ? sortArray : sortArray.reverse();
  }
}
