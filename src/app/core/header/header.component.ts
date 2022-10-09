import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { HeaderSortService } from 'src/app/services/header-sort.service';
import { SortEvent, SortKey, SortOrder } from '../../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  show = false;
  search = '';
  SortOrder = SortOrder;
  SortKey = SortKey;
  order = SortOrder.asc;
  key?: SortKey;
  @Output() orderEvent: EventEmitter<SortEvent> = new EventEmitter();
  @Output() searchEvent: EventEmitter<string> = new EventEmitter();
  constructor(private headerSortService: HeaderSortService) {}

  emitSearchEvent(value: string) {
    this.headerSortService.streamInput(value);
    this.searchEvent.emit(value);
  }

  emitOrderEvent(order: SortOrder, key: SortKey | undefined) {
    const obj: SortEvent = { order: order, key: key };
    this.headerSortService.streamSort(obj);
    this.orderEvent.emit(obj);
  }
}
