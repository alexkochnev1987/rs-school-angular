import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ColoringBorderDirective } from './directives/coloring-border.directive';
import { ColoringButtonDirective } from './directives/coloring-button.directive';

const Material = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatRadioModule,
];

@NgModule({
  declarations: [SortPipe, ColoringBorderDirective, ColoringButtonDirective],
  imports: [CommonModule, FormsModule, RouterModule, Material],
  exports: [
    SortPipe,
    FormsModule,
    RouterModule,
    ColoringBorderDirective,
    ColoringButtonDirective,
    Material,
    CommonModule,
  ],
})
export class SharedModule {}
