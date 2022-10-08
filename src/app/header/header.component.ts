import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { SortEvent, SortKey, SortOrder } from '../interfaces';

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
  constructor() {}

  emitSearchEvent(value: string) {
    this.searchEvent.emit(value);
  }

  emitOrderEvent(order: SortOrder, key: SortKey | undefined) {
    const obj: SortEvent = { order: order, key: key };
    this.orderEvent.emit(obj);
  }
}
