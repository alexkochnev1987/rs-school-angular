import {
  Component,
  Input,
  OnInit,
  ɵinternalCreateApplication,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  AgeCategory,
  Color,
  MS_IN_DAY,
  RouterStateValue,
} from 'src/app/constants';
import { Item, Statistics } from 'src/app/interfaces';
import { SearchItemService } from 'src/app/services/search-item.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  RouterStateValue = RouterStateValue;
  age = 0;
  @Input() item!: Item;
  statistics$?: Observable<Item>;
  showDescription = false;
  constructor() {}
  ngOnInit(): void {
    this.age = Math.floor(
      Math.abs(Date.now() - new Date(this.item.snippet.publishedAt).getTime()) /
        MS_IN_DAY
    );
  }

  getImageURL() {
    const thumbnail = this.item.snippet.thumbnails;
    if (thumbnail.maxres?.url) return thumbnail.maxres.url;
    if (thumbnail.high?.url) return thumbnail.high.url;
    if (thumbnail.medium?.url) return thumbnail.medium.url;
    if (thumbnail.standard?.url) return thumbnail.standard.url;
    return thumbnail.default.url;
  }

  getColorBorder() {
    if (this.age < AgeCategory.young) return Color.Blue;
    if (this.age < AgeCategory.middle) return Color.Green;
    if (this.age < AgeCategory.old) return Color.Yellow;
    return Color.Red;
  }
}
