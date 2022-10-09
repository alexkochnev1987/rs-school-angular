import { Component, Input, OnInit } from '@angular/core';
import { AgeCategory, Color, MS_IN_DAY } from 'src/app/constatnts';
import { Item } from 'src/app/interfaces';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  age = 0;
  @Input() item!: Item;
  showDescription = false;
  constructor() {}
  ngOnInit(): void {
    this.age = Math.floor(
      Math.abs(Date.now() - new Date(this.item.snippet.publishedAt).getTime()) /
        MS_IN_DAY
    );
  }
  switchDescription() {
    this.showDescription = !this.showDescription;
  }

  getColorBorder() {
    if (this.age < AgeCategory.young) return Color.Blue;
    if (this.age < AgeCategory.middle) return Color.Green;
    if (this.age < AgeCategory.old) return Color.Yellow;
    return Color.Red;
  }
}
