import { Component, OnInit } from '@angular/core';

import { CvItem } from '../../models/cv-item.model';

import { LocalizationService } from '../../services/l10n.service';
import { CvItemService } from '../../services/cv-item.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  public l10n;
  public educationItems: CvItem[];
  public certificationItems: CvItem[];

  constructor(
    private localizationService: LocalizationService,
    private cvItemService: CvItemService,
  ) { }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  private getItems(): void {
    this.cvItemService
      .getEducationItems()
      .then(items => this.educationItems = items);
    this.cvItemService
      .getCertificationItems()
      .then(items => this.certificationItems = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

}
