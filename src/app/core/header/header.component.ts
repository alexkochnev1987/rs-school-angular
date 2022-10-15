import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { HeaderSortService } from 'src/app/services/header-sort.service';
import { SortKey, SortOrder } from '../../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
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
  loginStatus$!: Observable<boolean>;
  unsubscribe$ = new Subject();
  constructor(
    private headerSortService: HeaderSortService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginStatus$ = this.authService.getLoginStatus();
    this.searchForm.valueChanges
      .pipe(
        map(x => x.search),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(x => this.headerSortService.streamInput(x));

    this.sortForm.valueChanges
      .pipe(map(this.createSortPipe), takeUntil(this.unsubscribe$))
      .subscribe(x => this.headerSortService.streamSort(x));
  }

  logOut() {
    this.authService.logout();
  }

  createSortPipe(
    x: Partial<{
      order: SortOrder | null;
      key: SortKey | null;
    }>
  ) {
    return { order: x.order ?? SortOrder.asc, key: x.key };
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(1);
    this.unsubscribe$.complete();
  }
}
