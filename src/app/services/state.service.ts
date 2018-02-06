import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IState } from '../models';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '../config';

@Injectable()
export class StateService {

  private _resource = 'states.json';

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig) {}

  public getAll$(): Observable<IState[]> {
    return this.http.get<IState[]>(`${this.config.s3}/${this._resource}`)
      .map(states => states.filter(s => s.country === 'US'));
  }
}
