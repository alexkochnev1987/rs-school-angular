import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { getImageURL } from 'src/app/constants';
import { Item } from 'src/app/interfaces';
import { SearchItemService } from 'src/app/services/search-item.service';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoComponent implements OnInit {
  item$!: Observable<Item | undefined>;
  getImageURL = getImageURL;
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

  goBack(): void {
    this.location.back();
  }
}
