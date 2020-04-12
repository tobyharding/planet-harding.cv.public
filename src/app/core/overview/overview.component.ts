import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Subscription } from 'rxjs';

import { Recommendation } from '../../shared/models/recommendation.model';
import { CarouselService } from '../../shared/services/carousel.service';

import { LocalizationService } from '../../shared/services/l10n.service';
import { CvItemService } from '../../shared/services/cv-item.service';
import { PictureModalComponent } from '../../shared/helpers/picture-modal/picture-modal.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  public l10n;
  public generalData;
  public interests;

  private carouselChanged: Subscription;
  recommendation: Recommendation;

  constructor(
    private localizationService: LocalizationService,
    private carouselService: CarouselService,
    private cvItemService: CvItemService,
    private dialog: MatDialog,
  ) {
    this.localizationService.languageChanged.subscribe((data) => { this.l10n = data });
  }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  public showAvatar() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      imagePath: 'assets/img/avatar.jpg',
      title: this.generalData.name,
    };
    this.dialog.open(PictureModalComponent, dialogConfig);
  }

  private getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
    this.cvItemService
      .getInterestItems()
      .then(items => this.interests = items);
  }

  ngOnInit() {
    this.getLocalization();
    this.getItems();

    this.recommendation = this.carouselService.getFirstRecommendation();
    
    this.carouselChanged = this.carouselService.carouselChanged.subscribe(
      (newRecommendation: Recommendation) => {
        this.recommendation = newRecommendation;
      }
    );
  }

}
