import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class LoadingService {

  private _isLoading: boolean;
  private timer: Subscription;

  constructor() {
  }

  public get isLoading(): boolean {
    return this._isLoading;
  }

  public startLoading() {
    if (this.timer) {
      this.timer.unsubscribe();
      this.timer = null;
    }
    this._isLoading = true;
    this.timer = Observable.timer(1000, 0).subscribe(() => {
      this._isLoading = false;
      this.timer.unsubscribe();
      this.timer = null;
    });
  }

}
