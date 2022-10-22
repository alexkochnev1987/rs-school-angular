import { Component, Input, OnInit } from '@angular/core';
import { CustomCard } from 'src/app/interfaces';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss'],
})
export class CustomCardComponent {
  @Input() customCard!: CustomCard;
  constructor() {}
}
