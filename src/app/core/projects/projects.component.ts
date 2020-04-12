import { Component, OnInit }    from '@angular/core';

import { CvItem }               from '../../shared/models/cv-item.model';

import { CvItemService }        from '../../shared/services/cv-item.service';
import { LocalizationService }  from '../../shared/services/l10n.service';

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
  ) {
    this.localizationService.languageChanged.subscribe((data) => { this.l10n = data });
  }

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
