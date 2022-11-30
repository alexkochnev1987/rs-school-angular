import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailedInfoRoutingModule } from './detailed-info-routing.module';
import { DetailedInfoComponent } from './detailed-info.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DetailedInfoComponent],
  imports: [CommonModule, DetailedInfoRoutingModule, SharedModule],
})
export class DetailedInfoModule {}
