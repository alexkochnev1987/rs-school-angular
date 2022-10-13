import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/interfaces';
import { SearchItemService } from 'src/app/services/search-item.service';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoComponent implements OnInit {
  item$!: Observable<Item | undefined>;
  constructor(
    private route: ActivatedRoute,
    private searchItemService: SearchItemService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.item$ = this.searchItemService.getVideoItem(id);
    }
  }

  getImageURL(item: Item) {
    const thumbnail = item.snippet.thumbnails;
    if (thumbnail.maxres?.url) return thumbnail.maxres.url;
    if (thumbnail.high?.url) return thumbnail.high.url;
    if (thumbnail.medium?.url) return thumbnail.medium.url;
    if (thumbnail.standard?.url) return thumbnail.standard.url;
    return thumbnail.default.url;
  }

  goBack(): void {
    this.location.back();
  }
}
