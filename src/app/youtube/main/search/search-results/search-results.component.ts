import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  pipe,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';
import { Item, SortEvent, SortKey, SortOrder } from 'src/app/interfaces';
import { HeaderSortService } from 'src/app/services/header-sort.service';
import { SearchItemService } from 'src/app/services/search-item.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  notifier$ = new Subject();
  items$!: Observable<Item[]>;
  sortEventStreamed?: SortEvent;

  constructor(
    private searchItemService: SearchItemService,
    private headerSortService: HeaderSortService
  ) {}
  ngOnInit(): void {
    this.headerSortService
      .getSort()
      .pipe(takeUntil(this.notifier$))
      .subscribe(x => (this.sortEventStreamed = x));
    this.headerSortService
      .getInput()
      .pipe(
        debounceTime(450),
        distinctUntilChanged(),
        filter(x => x.length > 2),
        switchMap(x => this.searchItemService.getSearchItems(x)),
        takeUntil(this.notifier$)
      )
      .subscribe(x => {
        this.items$ = this.searchItemService.getVideoItems(x);
      });
  }

  ngOnDestroy(): void {
    this.notifier$.next(1);
    this.notifier$.complete();
  }
}