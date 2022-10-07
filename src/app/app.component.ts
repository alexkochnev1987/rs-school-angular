import { Component } from '@angular/core';
import { SortEvent } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rs-school';
  search = '';
  sortProperty!: SortEvent;
  addSearchEvent($event: string) {
    this.search = $event;
  }

  addSortEvent($event: SortEvent) {
    this.sortProperty = $event;
  }
}
