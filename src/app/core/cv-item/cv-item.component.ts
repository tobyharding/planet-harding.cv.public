import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig }                         from '@angular/material/dialog';

import { PictureModalComponent }                              from '../../shared/helpers/picture-modal/picture-modal.component';

import { CvItemDirective }                                    from '../../shared/directives/cv-item.directive';

import { CvItem }                                             from '../../shared/models/cv-item.model';

import { LocalizationService }                                from '../../shared/services/l10n.service';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css'],
})

export class CvItemComponent implements OnInit, AfterViewInit {
  public l10n;
  @Input() public cvItem: CvItem;
  @ViewChild(CvItemDirective) public cvThumbnail: CvItemDirective;

  constructor(
    private dialog: MatDialog,
    private localizationService: LocalizationService,
  ) { }

  private getLocalization(): void {
    this.l10n = this.localizationService.getDefault();
  }

  ngOnInit(): void {
    this.getLocalization();
  }

  ngAfterViewInit() {
    this.calculateCvItemHeight();
  }

  private setComponentMinHeight(height) {
    if (this.cvThumbnail) {
      this.cvThumbnail.elementRef.nativeElement.style.minHeight = `${height}px`;
    }
  }

  private calculateCvItemHeight(): void {
    if (this.cvItem !== undefined && this.cvItem.thumbnail !== undefined && this.cvItem.thumbnail !== '') {
      const img = new Image();
      img.onload = () => {
        const thumbnailHeight = img.height;
        const thumbnailWidth = img.width;
        const ratio = Number(((thumbnailHeight.valueOf() / thumbnailWidth.valueOf()) * 100).toFixed(0));
        const excess = Math.max(ratio - 84, 0);
        this.setComponentMinHeight(100 + excess);
      };
      img.src = '../../assets/img/item-thumbnails/' + this.cvItem.thumbnail;
    }
  }

  private toggleDetails(event) {
    const card = event.target.closest('mat-card');
    if (card.classList.contains('opened')) {
      card.classList.add('closed');
      card.classList.remove('opened');
    } else {
      card.classList.add('opened');
      card.classList.remove('closed');
    }
  }

  private viewImage(imageName: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      imagePath: '../../assets/attachments/' + imageName
    };
    this.dialog.open(PictureModalComponent, dialogConfig);
  }

}
