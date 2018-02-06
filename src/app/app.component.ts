import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { IDealer, IState } from './models';
import { StateService, DealerService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  public dealers$: Observable<IDealer[]>;
  public reps$: Observable<IDealer[]>;
  public states$: Observable<IState[]>;
  public state = 'default';

  constructor(dealerService: DealerService, countryService: StateService) {
    this.states$ = countryService.getAll$();
    this.dealers$ = dealerService.getDealers();
    this.reps$ = dealerService.getReps();
  }
}
