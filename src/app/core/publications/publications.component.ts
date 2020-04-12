import { Component, OnInit } from '@angular/core';

import { CvItem } from '../../shared/models/cv-item.model';

import { CvItemService } from '../../shared/services/cv-item.service';
import { LocalizationService } from '../../shared/services/l10n.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
})
export class PublicationsComponent implements OnInit {
  public l10n;
  public publicationItems: CvItem[];
  public talkItems: CvItem[];

  constructor(
    private localizationService: LocalizationService,
    private cvItemService: CvItemService,
  ) {
    this.localizationService.languageChanged.subscribe((data) => { this.l10n = data });
  }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  private getItems(): void {
    this.cvItemService
      .getPublicationItems()
      .then(items => this.publicationItems = items);
    this.cvItemService
      .getTalkItems()
      .then(items => this.talkItems = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

}
