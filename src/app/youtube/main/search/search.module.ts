import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../../shared/shared.module';
import { ColoringBorderDirective } from 'src/app/shared/directives/coloring-border.directive';
import { CustomCardComponent } from './custom-card/custom-card.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    CustomCardComponent,
  ],
  imports: [MatCardModule, MatIconModule, SharedModule],
  exports: [SearchItemComponent, SearchResultsComponent],
})
export class SearchModule {}
