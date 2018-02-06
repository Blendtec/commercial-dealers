import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {IDealer} from '../models';
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, AppConfig} from '../config';

@Injectable()
export class DealerService {

  private _resource = 'dealers.json';

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {
  }

  public getDealers(): Observable<IDealer[]> {
    return this.http.get<IDealer[]>(`${this.config.s3}/${this._resource}`)
      .map(dealers => dealers.filter(dealer => dealer.isRep === false));
  }

  public getReps(): Observable<IDealer[]> {
    return this.http.get<IDealer[]>(`${this.config.s3}/${this._resource}`)
      .map(reps => reps.filter(rep => rep.isRep === true));
  }
}
