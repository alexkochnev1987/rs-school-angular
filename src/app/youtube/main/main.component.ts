import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'src/app/interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor() {}
  search = '';
  sortProperty!: SortEvent;
  addSearchEvent($event: string) {
    this.search = $event;
  }

  addSortEvent($event: SortEvent) {
    this.sortProperty = $event;
  }
}
