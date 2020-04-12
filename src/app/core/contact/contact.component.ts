import { Component, OnInit }    from '@angular/core';

import { CvItemService }        from '../../shared/services/cv-item.service';
import { FeatureToggleService } from '../../shared/services/feature-toggle.service';
import { LocalizationService }  from '../../shared/services/l10n.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public l10n;
  public featureToggles;
  public contactItems;

  constructor(
    private localizationService: LocalizationService,
    private featureToggleService: FeatureToggleService,
    private cvItemService: CvItemService,
  ) {
    this.localizationService.languageChanged.subscribe(() => { this.getLocalization() });
  }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  private getFeatureToggles(): void {
    this.featureToggles = this.featureToggleService.getFeatureToggles();
  }

  private getItems(): void {
    this.cvItemService
      .getContactItems()
      .then(items => this.contactItems = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getFeatureToggles();
    this.getItems();
  }

}
