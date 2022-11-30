import { Component, Input, OnInit } from '@angular/core';
import { RouterStateValue, getImageURL, getColor } from 'src/app/constants';
import { Item } from 'src/app/interfaces';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  RouterStateValue = RouterStateValue;
  @Input() item!: Item;
  getImageURL = getImageURL;
  getColor = getColor;

  constructor() {}
}
