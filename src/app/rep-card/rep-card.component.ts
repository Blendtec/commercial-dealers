import { Component, Input, OnInit } from '@angular/core';
import { IDealer } from '../models';

@Component({
  selector: 'app-rep-card',
  templateUrl: './rep-card.component.html',
  styleUrls: ['./rep-card.component.css']
})
export class RepCardComponent {

  @Input()
  dealer: IDealer;
}
