import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CvItemService } from './shared/services/cv-item.service';

@Component({
  selector: 'app-root',
  styleUrls: [ './app.component.css' ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private generalData;

  public constructor(
    private cvItemService: CvItemService,
    private titleService: Title,
  ) {
    this.getItems();
    this.setTitle(this.generalData.name + ' | ' + this.generalData.position);
  }

  private getItems(): void {
    this.generalData = this.cvItemService.getGeneralData();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
