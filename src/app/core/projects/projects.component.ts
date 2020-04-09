import { Component, OnInit } from '@angular/core';

import { CvItem } from '../../models/cv-item';

import { LocalizationService } from '../../services/l10n.service';
import { CvItemService } from '../../services/cv-item.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  public l10n;
  public projectItems: CvItem[];

  constructor(
    private localizationService: LocalizationService,
    private cvItemService: CvItemService,
  ) { }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  private getItems(): void {
    this.cvItemService
      .getProjectItems()
      .then(items => this.projectItems = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

}
