import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AgeCategory,
  Color,
  MS_IN_DAY,
  RouterStateValue,
  getImageURL,
} from 'src/app/constants';
import { Item } from 'src/app/interfaces';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  RouterStateValue = RouterStateValue;
  private age = 0;
  @Input() item!: Item;
  getImageURL = getImageURL;

  constructor() {}

  ngOnInit(): void {
    this.age = Math.floor(
      Math.abs(Date.now() - new Date(this.item.snippet.publishedAt).getTime()) /
        MS_IN_DAY
    );
  }

  getColorBorder() {
    if (this.age < AgeCategory.young) return Color.Blue;
    if (this.age < AgeCategory.middle) return Color.Green;
    if (this.age < AgeCategory.old) return Color.Yellow;
    return Color.Red;
  }
}
