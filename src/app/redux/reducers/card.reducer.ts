import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { SpinnerStateName } from 'src/app/constants';
import { CardsStore, SortOrder } from 'src/app/interfaces';
import {
  addCard,
  changeLoginStatus,
  changeSearchStream,
  changeSortStream,
  makeSpinnerStateFalse,
  makeSpinnerStateTrue,
  reloadCards,
} from '../actions/cards.actions';

export const initialState: CardsStore = {
  customCards: [],
  youTubeCard: [],
  loginStatus: false,
  searchStream: '',
  sortStream: { order: SortOrder.asc, key: null },
  spinnerState: {
    [SpinnerStateName.login]: false,
  },
};

export const cardStore = createReducer<CardsStore>(
  initialState,
  on(
    addCard,
    (state, { card }): CardsStore => ({
      ...state,
      customCards: [...state.customCards, card],
    })
  ),
  on(
    reloadCards,
    (state, { items }): CardsStore => ({ ...state, youTubeCard: items })
  ),
  on(
    changeLoginStatus,
    (state, { status }): CardsStore => ({ ...state, loginStatus: status })
  ),
  on(
    changeSearchStream,
    (state, { input }): CardsStore => ({ ...state, searchStream: input })
  ),
  on(
    changeSortStream,
    (state, { input }): CardsStore => ({ ...state, sortStream: input })
  ),
  on(
    makeSpinnerStateFalse,
    (state, { name }): CardsStore => ({
      ...state,
      spinnerState: { ...state.spinnerState, [name]: false },
    })
  ),
  on(
    makeSpinnerStateTrue,
    (state, { name }): CardsStore => ({
      ...state,
      spinnerState: { ...state.spinnerState, [name]: true },
    })
  )
);
