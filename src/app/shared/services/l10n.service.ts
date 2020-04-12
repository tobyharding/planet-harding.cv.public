import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { FeatureToggleService } from './feature-toggle.service';
import { L10N } from '../../data/l10n.data';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  private featureToggles;

  languageChanged = new Subject();

  constructor(
    private featureToggleService: FeatureToggleService,
  ) {
    this.getFeatureToggles();
  }

  protected getFeatureToggles(): void {
    this.featureToggles = this.featureToggleService.getFeatureToggles();
  }

  public getAll() {
    return L10N;
  }

  public get(locale: string) {
    if (L10N.hasOwnProperty(locale)) {
      return L10N[locale]; // TODO merge with EN as default values
    }
    return this.getDefault();
  }

  public getDefault() {
    let language = this.featureToggles.default_language;
    try {
      language = JSON.parse(localStorage.getItem('l10n')).language;
    } catch (err) { }
    return L10N[language];
  }

  public changeLanguage(language):void {
    this.languageChanged.next(L10N[language]);
  }
}
