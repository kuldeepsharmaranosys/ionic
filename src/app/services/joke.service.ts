import { Injectable } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { APIURL } from '../constants/apiurl';
import { Joke } from '../modals/joke';
import { elementAt } from 'rxjs/operators';
import { promise } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class JokeService {
  perPage = 10;
  constructor(private ss: SharedService) { }
  get(category = '', loaderShow = 'true') {
    return new Promise((resolve, reject) => {
      let params = {};
      if (category != '') {
        params = { 'limitTo': '[' + category + ']' };
      }
      this.ss.hitApi(APIURL.jokes + '/' + this.perPage, 'GET', params, loaderShow).subscribe((data: any) => {
        const joke: Joke[] = [];
        if (data.type === 'success') {
          data.value.forEach((element: any) => {
            joke.push({ id: element.id, joke: element.joke, categories: element.categories });
          });
          resolve(joke);
        } else {
          reject();
        }
      });
    });
  }

  detail(id) {
    return new Promise((resolve, reject) => {
      this.ss.hitApi(APIURL.joke + id).subscribe((data: any) => {
        if (data.type === 'success') {
          let joke = new Joke({ id: data.value.id, joke: data.value.joke, categories: data.value.categories });
          resolve(joke);
        } else {
          reject();
        }
      });
    });
  }
}
