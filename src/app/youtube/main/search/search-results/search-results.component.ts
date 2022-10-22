import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Subject, switchMap, takeUntil } from 'rxjs';
import { SortEvent } from 'src/app/interfaces';
import { reloadCards } from 'src/app/redux/actions/cards.actions';
import {
  selectSearchStream,
  selectSortStream,
  selectYouTubeCard,
} from 'src/app/redux/selectors/card.selector';
import { SearchItemService } from 'src/app/services/search-item.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject();
  sortEventStreamed?: SortEvent;
  items$ = this.store.select(selectYouTubeCard);
  searchStream$ = this.store.select(selectSearchStream);
  sortStream$ = this.store.select(selectSortStream);

  constructor(
    private searchItemService: SearchItemService,
    private store: Store
  ) {}
  ngOnInit(): void {
    this.sortStream$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(x => (this.sortEventStreamed = x));
    this.searchStream$
      .pipe(
        filter(x => x.length > 2),
        switchMap(x => this.searchItemService.getSearchItems(x)),
        switchMap(x => this.searchItemService.getVideoItems(x)),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(x => {
        this.store.dispatch(reloadCards({ items: x }));
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(1);
    this.unsubscribe$.complete();
  }
}
