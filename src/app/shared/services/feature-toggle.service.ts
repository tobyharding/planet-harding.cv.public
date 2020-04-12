import { Injectable } from '@angular/core';

import { FEATURE_TOGGLES } from '../../data/feature-toggles.data';

@Injectable({
  providedIn: 'root',
})
export class FeatureToggleService {

  constructor() { }

  public getFeatureToggles() {
    return FEATURE_TOGGLES;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
