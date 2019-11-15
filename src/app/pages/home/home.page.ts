import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { SharedService } from '../../shared/services/shared.service';
import { JokeService } from '../../services/joke.service';
import { Joke } from '../../modals/joke';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
  jokes: Joke[];
  category: string = '';
  constructor(private route: ActivatedRoute, private ss: SharedService, private js: JokeService) {
  }
  ngOnInit() {
    this.category = this.route.snapshot.params['category'] != undefined ? this.route.snapshot.params['category'] : '';
    this.js.get(this.category).then((data: Joke[]) => {
      this.jokes = data;
    }).catch((err) => { console.log(err); });
  }
  ngAfterViewInit() {
    this.infiniteScroll.disabled = false;
  }
  loadData(event) {
    this.js.get(this.category, 'false').then((data: Joke[]) => {
      if (data.length > 0) {
        this.jokes = this.jokes.concat(data);
        event.target.complete();
      } else {
        this.infiniteScroll.disabled = true;
      }
    }).catch((err) => { console.log(err); });
  }
}
