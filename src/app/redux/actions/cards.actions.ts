import { createAction, props } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SpinnerStateName } from 'src/app/constants';
import { CustomCard, Item, SortEvent } from 'src/app/interfaces';

export const addCard = createAction(
  '[Admin Component] CreateCard',
  props<{ card: CustomCard }>()
);

export const reloadCards = createAction(
  '[Search component] reloadCard',
  props<{ items: Item[] }>()
);

export const changeLoginStatus = createAction(
  '[Auth service] change login status',
  props<{ status: boolean }>()
);

export const changeSearchStream = createAction(
  '[Header Component] change search stream',
  props<{ input: string }>()
);

export const changeSortStream = createAction(
  '[Header Component] change search stream',
  props<{ input: SortEvent }>()
);

export const makeSpinnerStateFalse = createAction(
  '[Spinner Service] spinner state false',
  props<{ name: SpinnerStateName }>()
);

export const makeSpinnerStateTrue = createAction(
  '[Spinner Service]  spinner state true',
  props<{ name: SpinnerStateName }>()
);
