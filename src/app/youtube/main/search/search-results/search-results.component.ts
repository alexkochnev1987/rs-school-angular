import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { Item, SortEvent, SortKey, SortOrder } from 'src/app/interfaces';
import { HeaderSortService } from 'src/app/services/header-sort.service';
import { SearchItemService } from 'src/app/services/search-item.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  items$!: Observable<Item[]>;
  inputStreamed = '';
  sortEventStreamed?: SortEvent;

  constructor(
    private searchItem: SearchItemService,
    private headerSortService: HeaderSortService
  ) {}
  ngOnInit(): void {
    this.items$ = this.searchItem.getItems();
    this.headerSortService.getInput().subscribe(x => (this.inputStreamed = x));
    this.headerSortService
      .getSort()
      .subscribe(x => (this.sortEventStreamed = x));
  }
}
