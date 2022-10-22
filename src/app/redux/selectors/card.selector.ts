import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardsStore } from 'src/app/interfaces';

export const featureKey = 'card';

export const selectCard = createFeatureSelector<CardsStore>(featureKey);

export const selectCustomCard = createSelector(
  selectCard,
  (state: CardsStore) => state.customCards
);

export const selectYouTubeCard = createSelector(
  selectCard,
  (state: CardsStore) => state.youTubeCard
);

export const selectLoginStatus = createSelector(
  selectCard,
  (state: CardsStore) => state.loginStatus
);

export const selectSortStream = createSelector(
  selectCard,
  (state: CardsStore) => state.sortStream
);

export const selectSearchStream = createSelector(
  selectCard,
  (state: CardsStore) => state.searchStream
);
