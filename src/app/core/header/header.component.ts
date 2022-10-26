import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Subject,
  takeUntil,
  tap,
} from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import {
  changeSearchStream,
  changeSortStream,
} from 'src/app/redux/actions/cards.actions';
import { selectLoginStatus } from 'src/app/redux/selectors/card.selector';
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
  loginStatus$ = this.store.select(selectLoginStatus);
  unsubscribe$ = new Subject();
  constructor(
    private authService: AuthService,
    private store: Store,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged(),
        map(x => (x.search ? x.search : '')),
        tap(() =>
          this.router.url !== '/main' ? this.router.navigate(['main']) : null
        ),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(x => {
        this.store.dispatch(changeSearchStream({ input: x }));
      });

    this.sortForm.valueChanges
      .pipe(map(this.createSortPipe), takeUntil(this.unsubscribe$))
      .subscribe(x => {
        this.store.dispatch(changeSortStream({ input: x }));
      });
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
