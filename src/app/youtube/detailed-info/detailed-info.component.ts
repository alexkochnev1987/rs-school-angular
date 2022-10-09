import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/interfaces';
import { SearchItemService } from 'src/app/services/search-item.service';

@Component({
  selector: 'app-detailed-info',
  templateUrl: './detailed-info.component.html',
  styleUrls: ['./detailed-info.component.scss'],
})
export class DetailedInfoComponent implements OnInit {
  item?: Item;
  constructor(
    private route: ActivatedRoute,
    private searchItemService: SearchItemService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.searchItemService.getItems().subscribe(x => {
      this.item = x.find(elem => elem.id === id);
    });
    console.log(this.item);
  }

  goBack(): void {
    this.location.back();
  }
}
