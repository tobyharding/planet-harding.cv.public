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
  public languageItems;

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
    this.cvItemService
    .getLanguageItems()
    .then(items => this.languageItems = items);
  }

  public getLanguageLevelDescription(level: number): String {
    // 100% = NATIVE;  80-99% = FLUENT;  60-79% = ADVANCED;  40-59% = INTERMEDIATE;  20-39% = ELEMENTARY;  0-19% = BEGINNER
    if (level >= 100) {
      return this.l10n.education.language_native;
    }
    if (level >= 80) {
      return this.l10n.education.language_fluent;
    }
    if (level >= 60) {
      return this.l10n.education.language_advanced;
    }
    if (level >= 40) {
      return this.l10n.education.language_intermediate;
    }
    if (level >= 20) {
      return this.l10n.education.language_elementary;
    }
    return this.l10n.education.language_beginner;
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

}
