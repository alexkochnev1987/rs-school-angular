import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { Item, SortEvent, SortKey, SortOrder } from 'src/app/interfaces';
import { SearchItemService } from 'src/app/services/search-item.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  @Input() searchInput = '';
  items$!: Observable<Item[]>;
  @Input() sortEvent?: SortEvent;
  @Input() SortKey: SortKey | undefined;
  constructor(private searchItem: SearchItemService) {}
  ngOnInit(): void {
    this.items$ = this.searchItem.getItems();
  }

  log() {
    console.log(this.searchInput);
  }
}
