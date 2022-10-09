import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortPipe } from './pipes/sort.pipe';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';

const Material = [
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatRadioModule,
];

@NgModule({
  declarations: [SortPipe],
  imports: [CommonModule, FormsModule, RouterModule, Material],
  exports: [SortPipe, FormsModule, RouterModule, Material],
})
export class SharedModule {}
