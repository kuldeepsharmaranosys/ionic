import { Injectable } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { APIURL } from '../constants/apiurl';
import { JokeCategory } from '../modals/joke-category';
@Injectable({
  providedIn: 'root'
})
export class JokeCategoryService {
  jokeCategories: JokeCategory[] = [];
  constructor(private ss: SharedService) { }
  get() {
    this.ss.hitApi(APIURL.categories, 'GET', {}, 'false').subscribe((data: any) => {
      if (data.type === 'success') {
        data.value.forEach(element => {
          this.jokeCategories.push({ name: element });
        });
      }
    });
  }
}
