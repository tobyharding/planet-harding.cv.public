import { Component, OnInit } from '@angular/core';

import { LocalizationService } from '../../shared/services/l10n.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public l10n;

  constructor(
    private localizationService: LocalizationService,
  ) {
    this.localizationService.languageChanged.subscribe(() => { this.getLocalization() });
  }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  ngOnInit() {
    this.getLocalization();
  }

}
