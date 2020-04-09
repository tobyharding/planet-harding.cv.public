import { Injectable, OnDestroy } from '@angular/core';

import { interval, Subject, Subscription } from 'rxjs';

import { Recommendation } from '../models/recommendation.model';

@Injectable()
export class CarouselService implements OnDestroy {
  carouselChanged = new Subject<Recommendation>();
  private carouselSubscription: Subscription;

  private currentItem = 0;
  private maxItems = 3;
  private speedInMillis = 7500;

  recommendations: Recommendation[] = [
    new Recommendation('Toby is one of the most competent and intelligent technical managers I have had the pleasure to work with. He combines these traits with a commercial acumen and general customer-friendliness uncommon in senior technical profiles. Very professional and fun to work with.','Mats Andersson, Global Project Manager, Managing Director & Partner'),
    new Recommendation('By far the best and most pragmatic technical project manager I have worked with in a long time.', 'Steve Howe, Lead Business Analyst, DVLA'),
    new Recommendation('Toby is a rare breed that can work effectively and in collaboration with development teams and project deployment teams alike. He brings a well-balanced and educated approach to development tasks and how the end result is deployed effectively to meet customers’ business needs.', 'Nicholas Goddard, Director, Cloud Solution Architecture, Oracle')
  ];

  constructor() {
    const counter = interval(this.speedInMillis);
    this.carouselSubscription = counter.subscribe(
      (number: Number) => {
        this.changeItem();
      }
    );
  }

  ngOnDestroy() {
    this.carouselSubscription.unsubscribe();
  }

  changeItem() {
    this.currentItem++;
    if(this.currentItem === this.maxItems) {
      this.currentItem = 0;
    }
    this.carouselChanged.next(this.recommendations[this.currentItem]);
  }

  getFirstRecommendation() {
    return this.recommendations[0];
  }
}