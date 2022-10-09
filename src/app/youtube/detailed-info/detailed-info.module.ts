import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailedInfoRoutingModule } from './detailed-info-routing.module';
import { DetailedInfoComponent } from './detailed-info.component';

@NgModule({
  declarations: [DetailedInfoComponent],
  imports: [CommonModule, DetailedInfoRoutingModule],
})
export class DetailedInfoModule {}
