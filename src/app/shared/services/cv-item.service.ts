import { Injectable } from '@angular/core';

import { CvItem } from '../models/cv-item.model';
import { Recommendation } from '../models/recommendation.model';

// tslint:disable-next-line:max-line-length
import {
  GENERAL,
  CVITEMS,
  RECOMMENDATIONS,
  CERTIFICATES,
  EDUCATION,
  PROJECTS,
  VOLUNTEERING,
  LANGUAGES,
  CONTACT,
  PUBLICATIONS,
  TALKS,
  INTERESTS,
  SKILLS
} from '../../data/cv.data';

@Injectable({
  providedIn: 'root',
})
export class CvItemService {

  constructor() { }

  getGeneralData() {
    return GENERAL;
  }

  getCvItems(): Promise<CvItem[]> {
    return Promise.resolve(CVITEMS);
  }

  getRecommendationItems(): Promise<Recommendation[]> {
    return Promise.resolve(RECOMMENDATIONS);
  }

  getEducationItems(): Promise<CvItem[]> {
    return Promise.resolve(EDUCATION);
  }

  getCertificationItems(): Promise<CvItem[]> {
    return Promise.resolve(CERTIFICATES);
  }

  getProjectItems(): Promise<CvItem[]> {
    return Promise.resolve(PROJECTS);
  }

  getVolunteerItems(): Promise<CvItem[]> {
    return Promise.resolve(VOLUNTEERING);
  }

  getLanguageItems() {
    return Promise.resolve(LANGUAGES);
  }

  getContactItems() {
    return Promise.resolve(CONTACT);
  }

  getPublicationItems(): Promise<CvItem[]> {
    return Promise.resolve(PUBLICATIONS);
  }

  getTalkItems(): Promise<CvItem[]> {
    return Promise.resolve(TALKS);
  }

  getInterestItems() {
    return Promise.resolve(INTERESTS);
  }

  getSkillsItems() {
    return Promise.resolve(SKILLS);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
