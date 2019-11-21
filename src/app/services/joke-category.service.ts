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
    return new Promise((resolve, reject)=>{
      this.ss.hitApi(APIURL.categories, 'GET', {}, 'false').subscribe((data: any) => {
        if (data.type === 'success') {
          let menu = [];
          data.value.forEach(element => {
            menu.push( {
              title: element.charAt(0).toUpperCase() + element.slice(1),
              url: '/home/'+element,
              icon: 'happy'
            });
            this.jokeCategories.push({ name: element });
            
          });
          resolve(menu)

        }
      });
    })
  }
}
