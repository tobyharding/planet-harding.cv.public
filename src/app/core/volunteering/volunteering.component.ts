import { Component, OnInit } from '@angular/core';

import { CvItem } from '../../models/cv-item.model';

import { CvItemService } from '../../services/cv-item.service';
import { LocalizationService } from '../../services/l10n.service';

@Component({
  selector: 'app-volunteering',
  templateUrl: './volunteering.component.html',
  styleUrls: ['./volunteering.component.css'],
})
export class VolunteeringComponent implements OnInit {
  public l10n;
  public volunteerItems: CvItem[];

  constructor(
    private localizationService: LocalizationService,
    private cvItemService: CvItemService
  ) { }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  private getItems(): void {
    this.cvItemService
      .getVolunteerItems()
      .then(items => this.volunteerItems = items);
  }


  ngOnInit() {
    this.getLocalization();
    this.getItems();
  }

}
