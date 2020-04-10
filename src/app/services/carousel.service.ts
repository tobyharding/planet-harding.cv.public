import { Injectable, OnDestroy } from '@angular/core';

import { interval, Subject, Subscription } from 'rxjs';

import { Recommendation } from '../models/recommendation.model';

import { CvItemService } from '../services/cv-item.service';

@Injectable()
export class CarouselService implements OnDestroy {
  public recommendations: Recommendation[];

  carouselChanged = new Subject<Recommendation>();
  private carouselSubscription: Subscription;

  private currentItem = 0;
  private speedInMillis = 7500;

  constructor(private cvItemService: CvItemService) {
    this.getItems();
    const counter = interval(this.speedInMillis);
    this.carouselSubscription = counter.subscribe(
      () => {
        this.changeItem();
      }
    );
  }

  private getItems(): void {
    this.cvItemService
      .getRecommendationItems()
      .then(items => this.recommendations = items);
  }

  ngOnDestroy() {
    this.carouselSubscription.unsubscribe();
  }

  private changeItem() {
    this.currentItem++;
    if(this.currentItem === this.recommendations.length) {
      this.currentItem = 0;
    }
    this.carouselChanged.next(this.recommendations[this.currentItem]);
  }

  getFirstRecommendation() {
    return this.recommendations[0];
  }
}