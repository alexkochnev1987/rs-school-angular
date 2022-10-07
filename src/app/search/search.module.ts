import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SortPipe } from '../shared/pipes/sort.pipe';

@NgModule({
  declarations: [SearchResultsComponent, SearchItemComponent, SortPipe],
  imports: [CommonModule, MatCardModule, MatIconModule],
  exports: [SearchItemComponent, SearchResultsComponent],
})
export class SearchModule {}
