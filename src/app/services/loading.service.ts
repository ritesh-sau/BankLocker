import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor() { }

  #loadingSignal = signal(false);

  loadig = this.#loadingSignal.asReadonly();

  loadingOn(){
    this.#loadingSignal.set(true);

  }

  loadingOff(){
     this.#loadingSignal.set(false);
  }
}
