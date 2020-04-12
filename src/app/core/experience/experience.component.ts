import { Component, OnInit } from '@angular/core';

import { CvItem } from '../../shared/models/cv-item.model';

import { LocalizationService } from '../../shared/services/l10n.service';
import { CvItemService } from '../../shared/services/cv-item.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  public l10n;
  public experienceItems: CvItem[];
  public skills;

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
      .getCvItems()
      .then(items => this.experienceItems = items);

    this.cvItemService
      .getSkillsItems()
      .then(items => this.skills = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

}
