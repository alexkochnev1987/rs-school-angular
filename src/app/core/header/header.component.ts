import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { filter, map } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { HeaderSortService } from 'src/app/services/header-sort.service';
import { SortEvent, SortKey, SortOrder } from '../../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchForm = new FormGroup({
    search: new FormControl(''),
  });
  sortForm = new FormGroup({
    order: new FormControl(SortOrder.asc),
    key: new FormControl(SortKey.date),
  });
  show = false;
  SortOrder = SortOrder;
  SortKey = SortKey;
  order = SortOrder.asc;
  key?: SortKey;
  loginStatus$ = this.authService.getLoginStatus();
  constructor(
    private headerSortService: HeaderSortService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.headerSortService.streamInput(
      this.searchForm.valueChanges.pipe(map(x => (x.search ? x.search : '')))
    );
    this.headerSortService.streamSort(
      this.sortForm.valueChanges.pipe(
        map(x => {
          let order = SortOrder.asc;
          let key;
          if (x.key) key = x.key;
          if (x.order) order = x.order;
          return { order: order, key: key };
        })
      )
    );
  }

  logOut() {
    this.authService.logout();
  }
}
